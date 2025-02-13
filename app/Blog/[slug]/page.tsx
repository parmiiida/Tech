import { notFound } from "next/navigation";
import { getBlogPosts } from "@/app/data/blogData";// Import static data for now
import Image from "next/image";

// Helper function to create a slug from the title
const slugify = (text: string): string =>
  text
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPosts().find(
    (post) => slugify(post.title) === params.slug
  );

  if (!post) {
    return notFound(); // Display a 404 page if the post is not found
  }

  return (
    <div className="w-full h-full bg-[#000000] pt-14 text-white">
        <div className="max-w-4xl flex flex-col justify-center items-center m-auto gap-7">

            <Image src={post.image} alt={post.title} width={650} height={350} className="opacity-50 rounded-md" />
            <h1 className="font-bold text-xl">{post.title}</h1>
            <div className="flex flex-row max-w-2xl w-full justify-between pt-6">
                <p className="text-left">{post.category}</p>
                <p className="text-right"><span className="text-purple-700">"</span> {post.date} <span className="text-purple-700">"</span></p>
            </div>
            <div className="w-full h-[1px] bg-white/20 -mb-3"/>
                {/* Add more detailed content here for the post */}
            <div>
            <p className="max-w-2xl text-white/60 text-lg">{post.paragraph}</p>
            </div>

      </div>
    </div>
  );
}
