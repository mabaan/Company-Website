// src/components/BlogCard.tsx
import React from "react";
import { PortableText } from "@portabletext/react";
import { getOptimizedImage } from "src/utils/getOptimizedImage.ts";

export type Slug = { current: string };

export interface Author {
  name: string;
  image?: string;
}

export interface PostSummary {
  title: string;
  slug: Slug;
  excerpt?: string;
  publishedAt: string;
  imageUrl?: string;
  authors?: Author[];
  categories?: { title: string }[];
  body?: any;
  featured?: boolean;
}

interface Props {
  post: PostSummary;
  className?: string;
  index?: number;
}

const BlogCard: React.FC<Props> = ({ post, className = "", index = 0 }) => {
  const formatDate = (iso: string) =>
    new Date(iso).toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric",
    });

  // Always treat authors as array
  const authors: Author[] = Array.isArray(post.authors) ? post.authors : [];

  const formatAuthors = (authors: Author[]): string => {
    if (!authors.length) return "The Intern";
    const names = authors.map((a) => a.name);
    if (names.length === 1) return names[0];
    if (names.length === 2) return `${names[0]} and ${names[1]}`;
    if (names.length === 3) return `${names[0]}, ${names[1]}, and ${names[2]}`;
    return `${names[0]}, ${names[1]}, and ${names.length - 2} others`;
  };

  const isFirstCard = index === 0;

  return (
    <a
      href={post.slug?.current ? `/blog/${post.slug.current}` : "#"}
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
        {post.categories && post.categories.length > 0 && (
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

      <h2 className="text-xl font-bold mb-2 text-[#003b71] group-hover:text-[#e41f26] transition">
        {post.title}
      </h2>

      {post.body && (
        <div className="relative overflow-hidden max-h-16 mb-4">
          <PortableText value={post.body} />
          <div className="pointer-events-none absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-white" />
        </div>
      )}

      {/* Authors display */}
      <div className="flex items-center gap-3 mt-auto pt-2 border-t border-gray-200 pt-3">
        <div className="flex -space-x-3">
          {authors.length > 0 ? (
            authors.slice(0, 3).map((author, i) =>
              author.image ? (
                <img
                  key={i}
                  src={author.image}
                  alt={author.name}
                  className="w-7 h-7 rounded-full object-cover border-2 border-white"
                />
              ) : (
                <div
                  key={i}
                  className="w-7 h-7 rounded-full bg-gray-300 text-white text-xs font-bold flex items-center justify-center border-2 border-white"
                >
                  {author.name.charAt(0).toUpperCase()}
                </div>
              )
            )
          ) : (
            <div className="w-7 h-7 rounded-full bg-gray-300 text-white text-xs font-bold flex items-center justify-center border-2 border-white">
              I
            </div>
          )}
          {authors.length > 3 && (
            <div className="w-7 h-7 rounded-full bg-gray-700 text-white text-xs font-medium flex items-center justify-center border-2 border-white">
              +{authors.length - 3}
            </div>
          )}
        </div>
        <div className="text-xs text-gray-600 truncate">
          by {formatAuthors(authors)}
        </div>
      </div>
    </a>
  );
};

export default BlogCard;
