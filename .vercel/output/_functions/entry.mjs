import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_BQJFWD83.mjs';
import { manifest } from './manifest_DGMn5AfE.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/blog/category/_slug_.astro.mjs');
const _page3 = () => import('./pages/blog/_slug_.astro.mjs');
const _page4 = () => import('./pages/blog.astro.mjs');
const _page5 = () => import('./pages/careers/apply/_slug_/confirmation.astro.mjs');
const _page6 = () => import('./pages/careers/apply/_slug_/review.astro.mjs');
const _page7 = () => import('./pages/careers/apply/_slug_.astro.mjs');
const _page8 = () => import('./pages/careers/_slug_.astro.mjs');
const _page9 = () => import('./pages/careers.astro.mjs');
const _page10 = () => import('./pages/company.astro.mjs');
const _page11 = () => import('./pages/contact.astro.mjs');
const _page12 = () => import('./pages/network.astro.mjs');
const _page13 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/blog/category/[slug].astro", _page2],
    ["src/pages/blog/[slug].astro", _page3],
    ["src/pages/blog.astro", _page4],
    ["src/pages/careers/apply/[slug]/confirmation.astro", _page5],
    ["src/pages/careers/apply/[slug]/review.astro", _page6],
    ["src/pages/careers/apply/[slug]/index.astro", _page7],
    ["src/pages/careers/[slug]/index.astro", _page8],
    ["src/pages/careers/index.astro", _page9],
    ["src/pages/company.astro", _page10],
    ["src/pages/contact.astro", _page11],
    ["src/pages/network.astro", _page12],
    ["src/pages/index.astro", _page13]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "4bbf1f69-f0dc-4ba1-94ff-5038140ce72d",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
