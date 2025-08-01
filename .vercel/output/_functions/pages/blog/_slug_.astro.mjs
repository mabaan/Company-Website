/* empty css                                   */
import { c as createComponent, a as createAstro, r as renderComponent, b as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_CB06aCjr.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_CQ05ITMQ.mjs';
import { c as client, g as getPostDescription } from '../../chunks/getDescription_DlfpvRmk.mjs';
import { PortableText } from '@portabletext/react';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const prerender = false;
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const post = await client.fetch(
    `*[_type == "post" && slug.current == $slug][0]{
    title,
    publishedAt,
    "imageUrl": mainImage.asset->url,
    "author": author->name,
    body
  }`,
    { slug }
  );
  if (!post) throw new Error("Post not found");
  const description = getPostDescription(post.body);
  return renderTemplate`${renderComponent($$result, "Layout", $$BaseLayout, { "title": `${post.title} | GC Blog`, "description": description, "ogImage": post.imageUrl || "/logo.png" }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="h-24 md:h-28" aria-hidden="true"></div> <article class="max-w-3xl mx-auto px-6 py-16"> <!-- Title & Meta --> <h1 class="text-4xl font-bold mb-2 text-[#0054a4]">${post.title}</h1> <p class="text-sm text-gray-600 mb-6">
by ${post.author} </p> <!-- Optional Cover Image --> ${post.imageUrl && renderTemplate`<img${addAttribute(post.imageUrl, "src")}${addAttribute(post.title, "alt")} class="w-full rounded-lg mb-8 object-cover max-h-[400px]" width="1280" height="720" loading="eager" fetchpriority="high" decoding="async">`} <!-- Full blog content --> <div class="prose prose-lg max-w-none"> ${renderComponent($$result2, "PortableText", PortableText, { "value": post.body })} </div> <!-- Back button --> <div class="mt-12"> <a href="/blog" class="inline-block px-4 py-2 bg-[#0054a4] text-white rounded hover:bg-[#003e84] transition">
← Back to All Blogs
</a> </div> </article> ` })}`;
}, "/home/runner/work/Company-Website/Company-Website/src/pages/blog/[slug].astro", void 0);

const $$file = "/home/runner/work/Company-Website/Company-Website/src/pages/blog/[slug].astro";
const $$url = "/blog/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
