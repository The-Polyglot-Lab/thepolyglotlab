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
  const upstreamPath = url.pathname.slice(route.prefix.length) || '/';
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

  return new Response(upstreamResponse.body, {
    status: upstreamResponse.status,
    statusText: upstreamResponse.statusText,
    headers: responseHeaders,
  });
}

function rewriteLocation(location, route, requestUrl) {
  try {
    const loc = new URL(location, route.origin);
    if (loc.origin === new URL(route.origin).origin) {
      const path = loc.pathname === '/' ? '' : loc.pathname;
      return `${requestUrl.origin}${route.prefix}${path}${loc.search}${loc.hash}`;
    }
  } catch {
    // ignore malformed Location values
  }
  return null;
}
