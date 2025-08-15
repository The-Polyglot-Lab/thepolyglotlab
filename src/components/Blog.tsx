import React, { useState, useEffect } from 'react';
import '../styles/Blog.css';

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

interface BlogProps {
  showBadge?: boolean;
  showFooter?: boolean;
  className?: string;
}

export default function Blog({ showBadge = true, showFooter = true, className = '' }: BlogProps) {
  const [blogPost, setBlogPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLatestPost = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await fetch('https://blog.thepolyglotlab.com/api/latest-post.json');
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        setBlogPost(data);
      } catch (err) {
        console.error('Error fetching blog post:', err);
        setError(err instanceof Error ? err.message : 'Failed to fetch blog post');
      } finally {
        setLoading(false);
      }
    };

    fetchLatestPost();
  }, []);

  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    } catch {
      return dateString;
    }
  };

  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength).trim() + '...';
  };

  if (loading) {
    return (
      <section className="blog-section">
        <div className={`blog-widget ${className}`}>
          <div className="blog-loading">
            <div className="loading-spinner"></div>
            <p>Loading latest blog post...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="blog-section">
        <div className={`blog-widget ${className}`}>
          <div className="blog-error">
            <div className="error-icon">⚠️</div>
            <p>Unable to load blog post</p>
            <button 
              className="retry-button"
              onClick={() => window.location.reload()}
            >
              Try Again
            </button>
          </div>
        </div>
      </section>
    );
  }

  if (!blogPost) {
    return (
      <section className="blog-section">
        <div className={`blog-widget ${className}`}>
          <div className="blog-empty">
            <div className="empty-icon">📝</div>
            <p>No blog posts available</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="blog-section">
      <div className={`blog-widget ${className}`}>
        {showBadge && (
          <div className="blog-badge">
            <span>What's New</span>
          </div>
        )}
        
        <div className="blog-content">
          <div className="blog-hero">
                      <img 
            src={blogPost.heroImage?.src || "https://blog.thepolyglotlab.com/blogplaceholder.png"} 
            alt="Blog post hero image"
            width={560}
            height={315}
            className="blog-hero-image"
          />
          </div>
          
          <div className="blog-details">
                      <h3 className="blog-title">
            <a href={blogPost.fullUrl || `https://blog.thepolyglotlab.com/blog/${blogPost.slug}/`} target="_blank" rel="noopener noreferrer">
              {blogPost.title}
            </a>
          </h3>
            
            <p className="blog-excerpt">
              {truncateText(blogPost.excerpt || blogPost.description, 160)}
            </p>
            
            <div className="blog-meta">
              <span className="blog-date">
                📅 {formatDate(blogPost.pubDate)}
              </span>
              <span className="blog-read-time">
                ⏱️ {blogPost.readTime || Math.ceil(blogPost.description.length / 200)} min read
              </span>
            </div>
            
            {blogPost.tags && blogPost.tags.length > 0 && (
              <div className="blog-tags">
                {blogPost.tags.slice(0, 3).map((tag, index) => (
                  <span key={index} className="blog-tag">
                    #{tag}
                  </span>
                ))}
              </div>
            )}
            
                      <a 
            href={blogPost.fullUrl || `https://blog.thepolyglotlab.com/blog/${blogPost.slug}/`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="blog-read-more"
          >
            Read Full Post →
          </a>
          </div>
        </div>
        
        {showFooter && (
          <div className="blog-footer">
            <span>Powered by The Polyglot Lab</span>
          </div>
        )}
      </div>
    </section>
  );
}
