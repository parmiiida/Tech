import Image from "next/image";
import Link from "next/link";
import { getBlogPosts } from "../data/blogData"; // Import the function

const slugify = (text: string): string =>
  text
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");

export default function Blog() {
  const blogPosts = getBlogPosts(); // Get blog posts using the function

  const sortedPosts = blogPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const latestPosts = sortedPosts.slice(0, 2);
  const olderPosts = sortedPosts.slice(2, 5);
  const listedPosts = sortedPosts.slice(5);

  return (
    <div className="bg-black text-white justify-center items-center flex">
      <div className="max-w-6xl px-6 md:p-24 md:px-8 p-16">
        <h1 className="text-4xl font-bold mb-10">Blog</h1>

        {/* Featured Posts */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {latestPosts.map((post, index) => (
            <Link key={index} href={`/Blog/${slugify(post.title)}`}>
              <div className="bg-zinc-900 rounded-xl overflow-hidden p-5 hover:scale-105 transition-transform cursor-pointer">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={500}
                  height={300}
                  className="rounded-lg w-full opacity-50"
                />
                <p className="text-gray-400 text-sm mt-3">{post.category}</p>
                <h2 className="text-xl font-semibold mt-2">{post.title}</h2>
              </div>
            </Link>
          ))}
        </div>

        {/* Smaller Blog Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {olderPosts.map((post, index) => (
            <div key={index} className="bg-zinc-900 rounded-xl overflow-hidden p-4 hover:scale-105 transition-transform">
              <Image
                src={post.image}
                alt={post.title}
                width={300}
                height={200}
                className="rounded-lg"
              />
              <p className="text-gray-400 text-sm mt-2">{post.category}</p>
              <h3 className="text-lg font-semibold mt-1">{post.title}</h3>
            </div>
          ))}
        </div>

        <h2 className="mt-20">More News</h2>
        <div className="w-full h-[1px] bg-white/30 mt-3" />
        <div className="flex flex-col">
          <ul>
            {listedPosts.map((post, index) => (
              <li key={index} className="h-[50px] hover:bg-white/20 rounded-xl p-2 cursor-pointer">
                {post.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
