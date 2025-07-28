import React from "react";

type Category = {
  title: string;
  slug: { current: string };
};

type BlogNavbarProps = {
  categories: Category[];
  activeSlug?: string; // e.g. "engineering" or undefined for "All Posts"
};

export default function BlogNavbar({
  categories,
  activeSlug,
}: BlogNavbarProps) {
  return (
    <>
      {/* Spacer for fixed navbar */}
      <div className="h-24 md:h-28" aria-hidden="true"></div>

      <nav className="flex flex-wrap gap-4 mb-10 max-w-6xl mx-auto px-4">
        <a
          href="/blog"
          className={`text-sm px-4 py-2 rounded-full transition ${
            !activeSlug
              ? "bg-black text-white"
              : "bg-gray-100 hover:bg-black hover:text-white"
          }`}
        >
          All Posts
        </a>
        {categories.map((cat) => (
          <a
            key={cat.slug.current}
            href={`/blog/category/${cat.slug.current}`}
            className={`text-sm px-4 py-2 rounded-full transition ${
              cat.slug.current === activeSlug
                ? "bg-black text-white"
                : "bg-gray-100 hover:bg-black hover:text-white"
            }`}
          >
            {cat.title}
          </a>
        ))}
      </nav>
    </>
  );
}
