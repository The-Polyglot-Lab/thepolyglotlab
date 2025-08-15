import React from 'react';
import Blog from './Blog';

export default function BlogDemo() {
  return (
    <div className="blog-demo">
      <div className="demo-section">
        <h2>Blog Widget Demo</h2>
        <p>Different configurations of the dynamic blog widget:</p>
      </div>
      
      <div className="demo-grid">
        <div className="demo-item">
          <h3>Default Blog Widget</h3>
          <Blog />
        </div>
        
        <div className="demo-item">
          <h3>Without Badge</h3>
          <Blog showBadge={false} />
        </div>
        
        <div className="demo-item">
          <h3>Without Footer</h3>
          <Blog showFooter={false} />
        </div>
        
        <div className="demo-item">
          <h3>Minimal Configuration</h3>
          <Blog showBadge={false} showFooter={false} />
        </div>
      </div>
      
      <div className="demo-info">
        <h3>Features</h3>
        <ul>
          <li>✅ Automatically fetches latest blog post</li>
          <li>✅ Responsive design for all devices</li>
          <li>✅ Loading states and error handling</li>
          <li>✅ Hero image with fallback</li>
          <li>✅ Tags and metadata display</li>
          <li>✅ Customizable via props</li>
          <li>✅ Matches brand colors (#4FFFD2)</li>
        </ul>
      </div>
    </div>
  );
}
