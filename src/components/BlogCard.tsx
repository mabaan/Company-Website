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
    <article
      className={`rounded-lg shadow hover:shadow-md transition border border-gray-200 bg-[#f9fbfc] p-5 flex flex-col ${className}`}
    >
      {post.imageUrl && (
        <a href={`/blog/${post.slug.current}`} className="block mb-4">
          <img
            src={getOptimizedImage(post.imageUrl, 1100, 734)} // ideal display size
            alt={post.title}
            width={1100}
            height={734}
            className="w-full object-cover rounded h-32 md:h-48 lg:h-56 xl:h-64"
            loading={isFirstCard ? "eager" : "lazy"}
            fetchPriority={isFirstCard ? "high" : "auto"}
          />
        </a>
      )}

      <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
        {post.categories?.length && (
          <span className="inline-flex gap-1 flex-wrap">
            {post.categories.map((c) => (
              <span
                key={c.title}
                className="bg-gray-100 text-gray-700 px-2 py-0.5 rounded"
              >
                {c.title}
              </span>
            ))}
          </span>
        )}
        <span className="ml-auto">{formatDate(post.publishedAt)}</span>
      </div>

      <a href={`/blog/${post.slug.current}`}>
        <h2 className="text-xl font-semibold mb-1 text-[#0054a4]">
          {post.title}
        </h2>
      </a>

      {post.author && (
        <p className="text-sm text-gray-600 mb-3">by {post.author}</p>
      )}

      {post.body && (
        <div className="relative overflow-hidden max-h-20 mb-4">
          <PortableText value={post.body} />
          <div className="pointer-events-none absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-[#f9fbfc]" />
        </div>
      )}

      <a
        href={`/blog/${post.slug.current}`}
        className="mt-auto text-[#0054a4] font-medium hover:underline"
      >
        Read more →
      </a>
    </article>
  );
};

export default BlogCard;
