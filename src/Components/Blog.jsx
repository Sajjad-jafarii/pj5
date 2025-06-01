import React, { useEffect, useState } from 'react';

function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fakePosts = [
      {
        date: "01",
        month: "Jun",
        image: "blog1.jpg",
        title: "Sample Blog Post",
        summary: "This is a test blog post to check image path.",
        link: "#",
        category: "Test",
        readTime: 2,
        comments: 0
      }
    ];
    setPosts(fakePosts);
  }, []);

  return (
    <section className="blog padding" id="blog">
      <div className="container">
        <h2>Our Blog</h2>
        {posts.map((post, index) => (
          <div key={index}>
            <h3>{post.title}</h3>
            <img src={`/${post.image}`} alt="blog" width="300" />
            <p>{post.summary}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Blog;
