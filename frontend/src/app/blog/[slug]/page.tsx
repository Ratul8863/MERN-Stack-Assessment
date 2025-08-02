import Header from "@/components/Header";
import { blogPosts } from "@/data/blogData";
import { notFound } from "next/navigation";
import Image from "next/image";

type BlogPageProps = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPage(props: BlogPageProps) {
  const { slug } = await props.params;
  const post = blogPosts.find((p) => p.slug === slug);


  if (!post) {
    notFound();
  }

  return (
    <>
      <Header />
      <div className="min-h-screen bg-white py-12 px-4 sm:px-8 md:px-16 flex justify-center">
        <article className="w-full max-w-3xl space-y-8">
          {/* Blog Image */}
         <div className="relative w-full h-64 md:h-96 overflow-hidden rounded-lg">
  <Image
    src={post.image}
    alt={post.title}
    fill
    style={{ objectFit: "cover" }}
    className="rounded-md"
    priority
    // Added the `sizes` prop to optimize image loading
    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  />
</div>
          {/* Blog Title */}
          <h1 className="text-4xl font-extrabold text-gray-900 md:text-5xl">
                {post.title}
          </h1>

          {/* Author + Date */}
          <div className="text-gray-600 text-sm space-x-2">
            <span>By <strong>{post.author}</strong></span>
            <span>•</span>
            <span>Published on {new Date(post.date).toLocaleDateString()}</span>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Content */}
          <div className="prose text-black prose-lg prose-slate max-w-none">
            <p>{post.content}</p>
          </div>
        </article>
      </div>
    </>
  );
}