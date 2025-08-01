/* empty css                                      */
import { c as createComponent, a as createAstro, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../../../chunks/astro/server_CB06aCjr.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../../../chunks/BaseLayout_CQ05ITMQ.mjs';
import { B as BlogNavbar, a as BlogCard } from '../../../chunks/BlogNavbar_B-XqxPov.mjs';
import { c as client, g as getPostDescription } from '../../../chunks/getDescription_DlfpvRmk.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro();
const prerender = false;
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const posts = await client.fetch(
    `*[_type == "post" && $slug in categories[]->slug.current] | order(publishedAt desc) {
    title,
    slug,
    publishedAt,
    "imageUrl": mainImage.asset->url,
    "author": author->name,
    categories[]->{ title, slug },
    body
  }`,
    { slug }
  );
  const categories = await client.fetch(`*[_type == "category"]{ title, slug }`);
  const pageTitle = categories.find((c) => c.slug.current === slug)?.title ?? "Blog";
  const description = posts.length > 0 ? getPostDescription(posts[0].body) : "";
  return renderTemplate`${renderComponent($$result, "Layout", $$BaseLayout, { "title": `${pageTitle} | GC Blog`, "description": description }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "BlogNavbar", BlogNavbar, { "client:load": true, "categories": categories, "activeSlug": slug, "client:component-hydration": "load", "client:component-path": "src/components/BlogNavbar.tsx", "client:component-export": "default" })} ${maybeRenderHead()}<section class="w-full max-w-6xl mx-auto px-4 py-12"> ${posts.length > 0 ? renderTemplate`<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"> ${posts.map((post, i) => renderTemplate`${renderComponent($$result2, "BlogCard", BlogCard, { "post": post, "index": i })}`)} </div>` : renderTemplate`<p class="text-center text-gray-500">No posts found for this category.</p>`} </section> ` })}`;
}, "/home/runner/work/Company-Website/Company-Website/src/pages/blog/category/[slug].astro", void 0);

const $$file = "/home/runner/work/Company-Website/Company-Website/src/pages/blog/category/[slug].astro";
const $$url = "/blog/category/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
