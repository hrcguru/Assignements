import { useState } from 'react';
import './BlogList.css';

const BlogList = ({ blogs }) => {
  const [selectedBlog, setSelectedBlog] = useState(null);

  const handleBlogClick = (blog) => {
    setSelectedBlog(blog);
  };

  return (
    <div className="blog-container">
      <h2>Blog Posts</h2>
      
      <div className="blog-list">
        {blogs.map(blog => (
          <div
            key={blog.id}
            className={`blog-item ${selectedBlog?.id === blog.id ? 'active' : ''}`}
            onClick={() => handleBlogClick(blog)}
          >
            <h3>{blog.title}</h3>
          </div>
        ))}
      </div>

      <div className="blog-content">
        {selectedBlog ? (
          <div className="selected-blog">
            <h3>{selectedBlog.title}</h3>
            <p>{selectedBlog.content}</p>
          </div>
        ) : (
          <div className="placeholder">
            <p>Select a blog to read</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogList;