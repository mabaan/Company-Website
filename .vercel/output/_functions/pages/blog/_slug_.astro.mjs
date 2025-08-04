/* empty css                                   */
import { c as createComponent, a as createAstro, r as renderComponent, b as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_CB06aCjr.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_p7KyTFt9.mjs';
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
  return renderTemplate`${renderComponent($$result, "Layout", $$BaseLayout, { "title": `${post.title} | GC Blog`, "description": description, "ogImage": post.imageUrl || "https://res.cloudinary.com/dxrwnc5g4/image/upload/v1753901040/gcintle/resume/logo.png" }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="h-24 md:h-28" aria-hidden="true"></div> <article class="max-w-3xl mx-auto px-2 sm:px-6 py-8 sm:py-14 rounded-2xl bg-white/90 shadow-xl border border-[#e3e8ee] mt-8"> ${post.imageUrl && renderTemplate`<div class="w-full rounded-2xl mb-10 overflow-hidden shadow"> <img${addAttribute(post.imageUrl, "src")}${addAttribute(post.title, "alt")} class="w-full object-cover h-44 md:h-72" width="1280" height="480" loading="eager" fetchpriority="high" decoding="async"> </div>`} <h1 class="text-4xl font-bold mb-1 text-[#003b71] leading-tight">${post.title}</h1> <div class="flex items-center gap-3 text-sm text-gray-600 mb-6"> <span>by <span class="font-semibold text-[#e41f26]">${post.author}</span></span> <span>•</span> <span>${post.publishedAt && new Date(post.publishedAt).toLocaleDateString(void 0, { year: "numeric", month: "long", day: "numeric" })}</span> </div> <hr class="border-t border-[#e3e8ee] mb-8"> <div class="prose prose-lg max-w-none"> ${renderComponent($$result2, "PortableText", PortableText, { "value": post.body })} </div> <div class="mt-12"> <a href="/blog" class="inline-block px-6 py-2 bg-[#0054a4] text-white rounded-full hover:bg-[#003e84] font-medium text-base shadow transition">
Back to All Blogs
</a> </div> </article> ` })}`;
}, "/Users/haiderraza/Desktop/GitHub/Company-Website/src/pages/blog/[slug].astro", void 0);

const $$file = "/Users/haiderraza/Desktop/GitHub/Company-Website/src/pages/blog/[slug].astro";
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
