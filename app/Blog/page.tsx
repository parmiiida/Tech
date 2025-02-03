"use client";
import { useState } from "react";
import Link from "next/link";

const blogPosts = [
  {
    id: 1,
    title: "Building AI-Powered Web Apps",
    excerpt: "Learn how AI can enhance web applications with Next.js and TensorFlow.js.",
    date: "Jan 28, 2025",
    category: "AI Development",
  },
  {
    id: 2,
    title: "Mastering GSAP Animations",
    excerpt: "Step up your UI/UX game with GSAP scroll animations in React & Next.js.",
    date: "Feb 2, 2025",
    category: "Frontend",
  },
  // Add more posts...
];

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blogPosts.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-black text-white px-6 py-12">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-200">Blog</h1>
        <p className="text-gray-400 text-sm mt-2">Stay updated with the latest in AI, Web Dev, and more.</p>
      </div>

      {/* Search Bar */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search articles..."
          className="bg-zinc-900 text-white border border-zinc-700 px-4 py-2 rounded-md focus:ring-2 focus:ring-purple-600"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Blog Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPosts.map((post) => (
          <div key={post.id} className="bg-zinc-900 p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-gray-200">{post.title}</h2>
            <p className="text-gray-400 text-sm">{post.date} | {post.category}</p>
            <p className="text-gray-500 mt-3">{post.excerpt}</p>
            <Link href={`/blog/${post.id}`}>
              <span className="inline-block mt-4 text-purple-400 hover:underline">Read More →</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
