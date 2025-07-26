import React, { useState, useEffect } from "react";
import BlogCard, { PostSummary } from "./BlogCard";
import SkeletonCard from "./SkeletonCard";

type Props = { posts: PostSummary[] };

const BlogList: React.FC<Props> = ({ posts }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(t);
  }, []);

  if (loading) {
    return (
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {[...Array(3)].map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    );
  }

  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <BlogCard key={post.slug.current} post={post} />
      ))}
    </div>
  );
};

export default BlogList;
