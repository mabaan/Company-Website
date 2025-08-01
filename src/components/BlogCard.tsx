// src/components/BlogCard.tsx
import React from "react";
import { PortableText } from "@portabletext/react";
import { getOptimizedImage } from "src/utils/getOptimizedImage.ts"; // at top

export type Slug = { current: string };

export interface PostSummary {
  title: string;
  slug: Slug;
  excerpt?: string;
  publishedAt: string;
  imageUrl?: string;
  author?: string;
  categories?: { title: string }[];
  body?: any;
  featured?: boolean;
}

interface Props {
  post: PostSummary;
  className?: string;
  index?: number; // new prop for FCP logic
}

const BlogCard: React.FC<Props> = ({ post, className = "", index = 0 }) => {
  const formatDate = (iso: string) =>
    new Date(iso).toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric",
    });

  const isFirstCard = index === 0;

  return (
    <a
  href={`/blog/${post.slug.current}`}
  className={`group rounded-2xl shadow-md hover:shadow-2xl hover:border-[#003b71] hover:border-2 transition-all duration-300 border border-gray-200 bg-white/90 p-6 flex flex-col focus:outline-none focus:ring-2 focus:ring-[#003b71] ${className}`}
  tabIndex={0}
>
  {post.imageUrl && (
    <div className="block mb-4 rounded-xl overflow-hidden">
      <img
        src={getOptimizedImage(post.imageUrl, 1100, 734)}
        alt={post.title}
        width={1100}
        height={734}
        className="w-full object-cover h-40 md:h-52 xl:h-60 transition group-hover:scale-105 duration-300 rounded-xl"
        loading={isFirstCard ? "eager" : "lazy"}
        fetchPriority={isFirstCard ? "high" : "auto"}
      />
    </div>
  )}

  <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
    {(post.categories && post.categories.length > 0) && (
      <span className="inline-flex gap-1 flex-wrap">
        {post.categories.map((c) => (
          <span
            key={c.title}
            className="bg-[#eaf2fa] text-[#0054a4] font-medium px-2 py-0.5 rounded-full text-xs border border-[#0054a4]/10"
          >
            {c.title}
          </span>
        ))}
      </span>
    )}
    <span className="ml-auto">{formatDate(post.publishedAt)}</span>
  </div>

  <h2 className="text-xl font-bold mb-1 text-[#003b71] group-hover:text-[#e41f26] transition">
    {post.title}
  </h2>

  {post.author && (
    <p className="text-xs text-gray-600 mb-3">by {post.author}</p>
  )}

  {post.body && (
    <div className="relative overflow-hidden max-h-16 mb-4">
      <PortableText value={post.body} />
      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-white" />
    </div>
  )}
</a>

  );
};

export default BlogCard;
