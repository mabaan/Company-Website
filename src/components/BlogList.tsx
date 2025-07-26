import React, { useState, useEffect } from "react";
import BlogCard, { PostSummary } from "./BlogCard";

type Props = { posts: PostSummary[] };
const categories = [
  "All Posts",
  "Engineering",
  "Community",
  "Company News",
  "Customers",
];

const BlogList: React.FC<Props> = ({ posts }) => {
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<string>("All Posts");

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(t);
  }, []);

  const filtered =
    filter === "All Posts"
      ? posts
      : posts.filter((p) => p.categories?.some((c) => c.title === filter));

  return (
    <div>
      <nav className="flex gap-4 overflow-x-auto mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition ${
              filter === cat ? "bg-black text-white" : ""
            }`}
          >
            {cat}
          </button>
        ))}
      </nav>

      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="animate-pulse bg-gray-200 h-48 rounded mb-4"
            ></div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {filtered.map((post) => (
            <BlogCard key={post.slug.current} post={post} />
          ))}
        </div>
      )}
    </div>
  );
};

export default BlogList;
