// pages/Blog.js
import React from 'react';

function Blog() {
  const blogPosts = [
    {
      title: "Getting Started with React Hooks",
      date: "April 1, 2025",
      summary: "Learn how to use React's useState and useEffect hooks to manage state and side effects in your functional components.",
      category: "React",
      readTime: "5 min read"
    },
    {
      title: "Mastering Tailwind CSS",
      date: "March 15, 2025",
      summary: "Explore advanced techniques for using Tailwind CSS to create beautiful, responsive user interfaces without writing custom CSS.",
      category: "CSS",
      readTime: "8 min read"
    },
    {
      title: "Building Accessible Web Applications",
      date: "February 28, 2025",
      summary: "Discover best practices for creating web applications that are accessible to users with disabilities and comply with WCAG guidelines.",
      category: "Accessibility",
      readTime: "10 min read"
    },
    {
      title: "Introduction to TypeScript for React Developers",
      date: "February 10, 2025",
      summary: "Learn how TypeScript can improve your React development experience by adding static type checking and better tooling.",
      category: "TypeScript",
      readTime: "7 min read"
    }
  ];

  return (
    <div className="py-8">
      <h1 className="text-3xl font-bold mb-10">Blog</h1>
      
      <div className="space-y-8">
        {blogPosts.map((post, index) => (
          <article 
            key={index}
            className="border-b dark:border-gray-700 pb-6 last:border-b-0"
          >
            <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400 mb-2">
              <span>{post.date}</span>
              <span>•</span>
              <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full">
                {post.category}
              </span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
            
            <h2 className="text-2xl font-semibold mb-3 hover:text-blue-500 transition-colors cursor-pointer">
              {post.title}
            </h2>
            
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {post.summary}
            </p>
            
            <button className="text-blue-500 hover:text-blue-700 font-medium transition-colors">
              Read more →
            </button>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Blog;