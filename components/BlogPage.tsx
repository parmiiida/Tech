import Image from "next/image";

interface BlogPost {
  title: string;
  category: string;
  image: string;
  date: string;
}

interface BlogPageProps {
  post: BlogPost;
}

export default function BlogPage({ post }: BlogPageProps) {
  return (
    <div className="bg-black text-white flex justify-center items-center min-h-screen">
      <div className="max-w-4xl px-6 md:px-12 py-16">
        <h1 className="text-4xl font-bold">{post.title}</h1>
        <p className="text-gray-400 text-sm mt-2">{post.category} - {new Date(post.date).toDateString()}</p>
        <Image src={post.image} alt={post.title} width={700} height={400} className="rounded-lg my-6" />
        <p className="text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse auctor, metus nec pharetra...
        </p>
      </div>
    </div>
  );
}
