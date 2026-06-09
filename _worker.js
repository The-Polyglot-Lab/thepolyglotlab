const PROXY_ROUTES = [
  { prefix: '/blog', origin: 'https://blog.thepolyglotlab.com' },
  { prefix: '/consulting', origin: 'https://consulting.thepolyglotlab.com' },
];

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    for (const route of PROXY_ROUTES) {
      if (matchesPrefix(url.pathname, route.prefix)) {
        return proxyToOrigin(request, route, url);
      }
    }

    return env.ASSETS.fetch(request);
  },
};

function matchesPrefix(pathname, prefix) {
  return pathname === prefix || pathname.startsWith(`${prefix}/`);
}

async function proxyToOrigin(request, route, url) {
  const originUrl = new URL(route.origin);
  const upstreamPath = toUpstreamPath(url.pathname, route);
  const upstreamUrl = new URL(`${upstreamPath}${url.search}`, route.origin);

  const headers = new Headers(request.headers);
  headers.set('Host', originUrl.host);
  headers.set('X-Forwarded-Host', url.host);
  headers.set('X-Forwarded-Proto', url.protocol.replace(':', ''));

  const init = {
    method: request.method,
    headers,
    redirect: 'manual',
  };

  if (request.method !== 'GET' && request.method !== 'HEAD') {
    init.body = request.body;
  }

  const upstreamResponse = await fetch(upstreamUrl.toString(), init);
  const responseHeaders = new Headers(upstreamResponse.headers);

  const location = responseHeaders.get('Location');
  if (location) {
    const rewritten = rewriteLocation(location, route, url);
    if (rewritten) {
      responseHeaders.set('Location', rewritten);
    }
  }

  const canonical = `${url.origin}${url.pathname}${url.search}`;
  responseHeaders.set('Link', `<${canonical}>; rel="canonical"`);

  const contentType = responseHeaders.get('Content-Type') || '';
  if (contentType.includes('text/html')) {
    const html = await upstreamResponse.text();
    const rewritten = rewriteHtml(html, route, url);
    responseHeaders.delete('Content-Length');
    return new Response(rewritten, {
      status: upstreamResponse.status,
      statusText: upstreamResponse.statusText,
      headers: responseHeaders,
    });
  }

  return new Response(upstreamResponse.body, {
    status: upstreamResponse.status,
    statusText: upstreamResponse.statusText,
    headers: responseHeaders,
  });
}

function toUpstreamPath(pathname, route) {
  if (pathname === route.prefix || pathname === `${route.prefix}/`) {
    return '/';
  }

  if (!pathname.startsWith(`${route.prefix}/`)) {
    return pathname;
  }

  let rest = pathname.slice(route.prefix.length) || '/';

  // Blog upstream serves at /post-slug, not /blog/post-slug
  if (route.prefix === '/blog' && (rest === '/blog' || rest.startsWith('/blog/'))) {
    rest = rest.slice('/blog'.length) || '/';
  }

  return rest;
}

function toMainPath(pathname, route) {
  if (pathname === '/' || pathname === '') {
    return route.prefix;
  }

  if (route.prefix === '/blog' && (pathname === '/blog' || pathname.startsWith('/blog/'))) {
    pathname = pathname.slice('/blog'.length) || '/';
  }

  return `${route.prefix}${pathname}`;
}

function rewriteHtml(html, route, requestUrl) {
  const prefix = route.prefix;
  const upstreamOrigin = new URL(route.origin).origin;
  const mainBase = `${requestUrl.origin}${prefix}`;

  let result = html
    .replace(/href="\/(?!blog\/|consulting\/)/g, `href="${prefix}/`)
    .replace(/src="\/(?!blog\/|consulting\/)/g, `src="${prefix}/`);

  if (prefix === '/blog') {
    result = result
      .replaceAll(`${upstreamOrigin}/blog/`, `${mainBase}/`)
      .replaceAll(`${upstreamOrigin}/`, `${mainBase}/`);
  } else {
    result = result.replaceAll(`${upstreamOrigin}/`, `${mainBase}/`);
  }

  return result;
}

function rewriteLocation(location, route, requestUrl) {
  try {
    const loc = new URL(location, route.origin);
    if (loc.origin === new URL(route.origin).origin) {
      const path = toMainPath(loc.pathname, route);
      return `${requestUrl.origin}${path}${loc.search}${loc.hash}`;
    }
  } catch {
    // ignore malformed Location values
  }
  return null;
}
