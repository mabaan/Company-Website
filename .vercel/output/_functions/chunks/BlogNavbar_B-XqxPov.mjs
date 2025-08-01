import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import 'react';
import { PortableText } from '@portabletext/react';
import imageUrlBuilder from '@sanity/image-url';
import { c as client } from './getDescription_DlfpvRmk.mjs';

const builder = imageUrlBuilder(client);
function getOptimizedImage(imageRef, width = 1100, height) {
  const image = builder.image(imageRef).width(width).auto("format").quality(75);
  return height ? image.height(height).url() : image.url();
}

const BlogCard = ({ post, className = "", index = 0 }) => {
  const formatDate = (iso) => new Date(iso).toLocaleDateString(void 0, {
    year: "numeric",
    month: "short",
    day: "numeric"
  });
  const isFirstCard = index === 0;
  return /* @__PURE__ */ jsxs(
    "article",
    {
      className: `rounded-lg shadow hover:shadow-md transition border border-gray-200 bg-[#f9fbfc] p-5 flex flex-col ${className}`,
      children: [
        post.imageUrl && /* @__PURE__ */ jsx("a", { href: `/blog/${post.slug.current}`, className: "block mb-4", children: /* @__PURE__ */ jsx(
          "img",
          {
            src: getOptimizedImage(post.imageUrl, 1100, 734),
            alt: post.title,
            width: 1100,
            height: 734,
            className: "w-full object-cover rounded h-32 md:h-48 lg:h-56 xl:h-64",
            loading: isFirstCard ? "eager" : "lazy",
            fetchPriority: isFirstCard ? "high" : "auto"
          }
        ) }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-xs text-gray-500 mb-2", children: [
          post.categories?.length && /* @__PURE__ */ jsx("span", { className: "inline-flex gap-1 flex-wrap", children: post.categories.map((c) => /* @__PURE__ */ jsx(
            "span",
            {
              className: "bg-gray-100 text-gray-700 px-2 py-0.5 rounded",
              children: c.title
            },
            c.title
          )) }),
          /* @__PURE__ */ jsx("span", { className: "ml-auto", children: formatDate(post.publishedAt) })
        ] }),
        /* @__PURE__ */ jsx("a", { href: `/blog/${post.slug.current}`, children: /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold mb-1 text-[#0054a4]", children: post.title }) }),
        post.author && /* @__PURE__ */ jsxs("p", { className: "text-sm text-gray-600 mb-3", children: [
          "by ",
          post.author
        ] }),
        post.body && /* @__PURE__ */ jsxs("div", { className: "relative overflow-hidden max-h-20 mb-4", children: [
          /* @__PURE__ */ jsx(PortableText, { value: post.body }),
          /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-[#f9fbfc]" })
        ] }),
        /* @__PURE__ */ jsx(
          "a",
          {
            href: `/blog/${post.slug.current}`,
            className: "mt-auto text-[#0054a4] font-medium hover:underline",
            children: "Read more →"
          }
        )
      ]
    }
  );
};

function BlogNavbar({
  categories,
  activeSlug
}) {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("div", { className: "h-24 md:h-28", "aria-hidden": "true" }),
    /* @__PURE__ */ jsxs("nav", { className: "flex flex-wrap gap-4 mb-10 max-w-6xl mx-auto px-4", children: [
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "/blog",
          className: `text-sm px-4 py-2 rounded-full transition ${!activeSlug ? "bg-black text-white" : "bg-gray-100 hover:bg-black hover:text-white"}`,
          children: "All Posts"
        }
      ),
      categories.map((cat) => /* @__PURE__ */ jsx(
        "a",
        {
          href: `/blog/category/${cat.slug.current}`,
          className: `text-sm px-4 py-2 rounded-full transition ${cat.slug.current === activeSlug ? "bg-black text-white" : "bg-gray-100 hover:bg-black hover:text-white"}`,
          children: cat.title
        },
        cat.slug.current
      ))
    ] })
  ] });
}

export { BlogNavbar as B, BlogCard as a };
