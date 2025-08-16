# Blog Component

A dynamic, responsive React component that automatically fetches and displays the latest blog post from The Polyglot Lab's blog API.

## 🚀 Features

- **Dynamic Content**: Automatically fetches the most recent blog post
- **Real-time Updates**: Reflects changes when blog content is updated
- **Responsive Design**: Works seamlessly on all devices and screen sizes
- **Professional Styling**: Matches brand colors (#4FFFD2 cyan, modern design)
- **Error Handling**: Graceful fallback if API fails
- **Loading States**: Shows loading spinner while fetching data
- **TypeScript**: Fully typed with proper interfaces
- **Accessibility**: Proper ARIA labels and semantic HTML

## 📦 Installation

The component is already included in your project. Simply import and use:

```tsx
import Blog from './components/Blog';
```

## 🎯 Basic Usage

### Default Configuration

```tsx
<Blog />
```

This displays the blog widget with:
- "What's New" badge
- Hero image (or fallback rocket emoji 🚀)
- Post title and excerpt
- Publication date and read time
- Tags (if available)
- Read More button
- "Powered by The Polyglot Lab" footer

### Customized Configuration

```tsx
// Without badge
<Blog showBadge={false} />

// Without footer
<Blog showFooter={false} />

// Minimal configuration
<Blog showBadge={false} showFooter={false} />

// With custom CSS class
<Blog className="custom-blog-style" />
```

## 🔧 Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `showBadge` | `boolean` | `true` | Show/hide the "What's New" badge |
| `showFooter` | `boolean` | `true` | Show/hide the "Powered by" footer |
| `className` | `string` | `''` | Additional CSS classes |

## 📱 API Integration

The component automatically fetches from:
```
https://blog.thepolyglotlab.com/api/latest-post.json
```

### Expected API Response Format

```typescript
interface BlogPost {
  title: string;
  description: string;
  pubDate: string;
  slug: string;
  fullUrl: string;
  heroImage?: {
    src: string;
    width: number;
    height: number;
    alt: string;
  };
  excerpt: string;
  readTime: number;
  tags: string[];
}
```

## 🎨 Styling

### Brand Colors
- **Primary**: #4FFFD2 (cyan)
- **Secondary**: #C084FC (purple)
- **Background**: Semi-transparent dark with backdrop blur
- **Text**: White with proper contrast ratios

### CSS Classes
- `.blog-widget` - Main container
- `.blog-badge` - "What's New" badge
- `.blog-hero` - Hero image container
- `.blog-title` - Post title
- `.blog-excerpt` - Post excerpt
- `.blog-meta` - Date and read time
- `.blog-tags` - Tag container
- `.blog-read-more` - Read more button
- `.blog-footer` - Footer section

## 📱 Responsive Design

The component automatically adapts to different screen sizes:

- **Desktop**: Full layout with side-by-side elements
- **Tablet**: Adjusted spacing and typography
- **Mobile**: Stacked layout with optimized touch targets

## 🔄 State Management

The component handles three main states:

1. **Loading**: Shows spinner while fetching data
2. **Error**: Displays error message with retry button
3. **Success**: Shows blog post content
4. **Empty**: Handles case when no posts are available

## 🚀 Performance Features

- **Automatic Fetching**: Loads data on component mount
- **Error Recovery**: Retry mechanism for failed requests
- **Optimized Rendering**: Efficient re-renders with React hooks
- **Image Optimization**: Proper image sizing and lazy loading support

## 🎯 Use Cases

### Homepage Widget
```tsx
<section className="latest-blog">
  <h2>Latest from Our Blog</h2>
  <Blog />
</section>
```

### Sidebar Component
```tsx
<aside className="sidebar">
  <Blog showFooter={false} />
</aside>
```

### News Section
```tsx
<div className="news-updates">
  <Blog showBadge={false} />
</div>
```

## 🛠️ Customization

### Custom Styling
Add your own CSS classes:

```tsx
<Blog className="my-custom-blog my-theme" />
```

### Theme Overrides
Override default styles in your CSS:

```css
.my-theme .blog-widget {
  background: your-custom-background;
}

.my-theme .blog-badge {
  background: your-custom-color;
}
```

## 🔍 Troubleshooting

### Common Issues

1. **API Not Responding**
   - Check network connectivity
   - Verify API endpoint is accessible
   - Check browser console for CORS issues

2. **Styling Conflicts**
   - Ensure CSS specificity is correct
   - Check for conflicting CSS frameworks
   - Verify brand colors are properly applied

3. **Responsive Issues**
   - Test on different screen sizes
   - Check CSS media queries
   - Verify viewport meta tag

## 📚 Examples

See `BlogDemo.tsx` for examples of different configurations and use cases.

## 🤝 Contributing

To modify the component:

1. Edit `src/components/Blog.tsx`
2. Update `src/styles/Blog.css`
3. Test with different configurations
4. Ensure responsive design works
5. Update this README if needed

## 📄 License

This component is part of The Polyglot Lab project and follows the same licensing terms.
