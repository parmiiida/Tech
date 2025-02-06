
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import React from 'react';

interface BlogPostProps {
  slug: string;
  // add other props as needed, for example: title, content, etc.
}

export default function BlogPost({ slug }: BlogPostProps) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-6 bg-black">
      <h1 className="text-3xl font-bold mb-4">Post Detail: {slug}</h1>
      {/* Render your post content here */}
    </div>
  );
}

// Example getStaticPaths



