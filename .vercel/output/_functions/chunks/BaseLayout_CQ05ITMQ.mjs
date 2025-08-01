import { c as createComponent, a as createAstro, b as renderTemplate, e as renderScript, r as renderComponent, f as renderSlot, g as renderHead, d as addAttribute } from './astro/server_CB06aCjr.mjs';
import 'kleur/colors';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
/* empty css                        */

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [path, setPath] = useState("");
  useEffect(() => {
    if (typeof window !== "undefined") {
      setPath(window.location.pathname);
    }
  }, []);
  const links = [
    { label: "Home", href: "/" },
    { label: "Company", href: "/company" },
    { label: "GC Network Map", href: "/network" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
    { label: "Blog", href: "/blog" }
  ];
  return /* @__PURE__ */ jsxs("nav", { className: "fixed top-0 left-0 w-full z-50", children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "bg-gradient-to-r from-[#e3f2fd] to-[#bbdefb] \n                   backdrop-blur-md shadow-md\n                   px-4 sm:px-6 lg:px-8\n                   md:max-w-screen-lg md:mx-auto md:mt-4 md:rounded-xl",
        children: /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center py-4 relative", children: [
          /* @__PURE__ */ jsxs("a", { href: "/", className: "flex items-center gap-8", children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                src: "https://res.cloudinary.com/dxrwnc5g4/image/upload/v1753901040/gcintle/resume/GC_Transparent_Logo.png",
                alt: "GC Logo",
                className: "h-10 w-auto"
              }
            ),
            /* @__PURE__ */ jsx("span", { className: "text-blue-900 text-xl font-bold tracking-wide hidden sm:inline", children: "GC International" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "md:hidden absolute left-1/2 transform -translate-x-1/2", children: /* @__PURE__ */ jsx(
            "span",
            {
              className: "font-extrabold text-lg tracking-tight",
              style: {
                letterSpacing: "0.02em",
                fontFamily: "inherit",
                whiteSpace: "nowrap",
                color: "#1e3a8a"
              },
              children: "GC International"
            }
          ) }),
          /* @__PURE__ */ jsx("ul", { className: "hidden md:flex gap-8 font-medium text-[#1e3a8a]", children: links.map((link) => {
            const isActive = path && (path === link.href || link.href !== "/" && path.startsWith(link.href));
            return /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
              "a",
              {
                href: link.href,
                className: `no-underline hover:no-underline hover:text-blue-600 transition duration-200 ${isActive ? "text-blue-600 font-semibold" : ""}`,
                children: link.label
              }
            ) }, link.href);
          }) }),
          /* @__PURE__ */ jsx(
            "button",
            {
              className: "md:hidden text-blue-900 text-2xl focus:outline-none",
              onClick: () => setIsOpen(!isOpen),
              "aria-label": "Toggle menu",
              "aria-controls": "mobile-menu",
              "aria-expanded": isOpen,
              children: "☰"
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ jsxs(
      "div",
      {
        className: `
    fixed top-0 left-0 w-full h-screen z-50
    bg-[#bbdefb]/95
    backdrop-blur-sm text-white
    transform transition-transform duration-300 ease-in-out
    ${isOpen ? "translate-y-0" : "-translate-y-full"}
  `,
        children: [
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => setIsOpen(false),
              className: "absolute top-6 right-6 text-3xl text-white",
              "aria-label": "Close menu",
              children: "✕"
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "absolute top-6 left-1/2 transform -translate-x-1/2", children: /* @__PURE__ */ jsx(
            "span",
            {
              className: "font-extrabold text-2xl tracking-tight",
              style: {
                letterSpacing: "0.02em",
                fontFamily: "inherit",
                whiteSpace: "nowrap",
                color: "#1e3a8a"
              },
              children: "GC International"
            }
          ) }),
          /* @__PURE__ */ jsx("div", { className: "flex flex-col gap-6 items-center justify-center h-full text-xl font-semibold tracking-wide", children: links.map((link) => {
            const isActive = path && (path === link.href || link.href !== "/" && path.startsWith(link.href));
            return /* @__PURE__ */ jsx(
              "a",
              {
                href: link.href,
                className: `no-underline hover:no-underline transition ${isActive ? "text-white font-bold" : ""}`,
                onClick: () => setIsOpen(false),
                children: link.label
              },
              link.href
            );
          }) })
        ]
      }
    )
  ] });
}

function Footer() {
  return /* @__PURE__ */ jsx("footer", { className: "bg-[#dfdfdf] text-slate-700 px-6 py-12 border-t border-slate-300", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-sm", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("h2", { className: "text-lg font-semibold text-[#0D47A1] mb-3", children: "GC International FZCO" }),
      /* @__PURE__ */ jsx("p", { className: "mb-1", children: "Office 5EA, Building 520, PO Box 293777" }),
      /* @__PURE__ */ jsx("p", { className: "mb-1", children: "Dubai Airport Freezone, Dubai, U.A.E" }),
      /* @__PURE__ */ jsx("p", { className: "mt-4 text-slate-500 italic", children: "Connecting Vision to Reality." })
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("h2", { className: "text-lg font-semibold text-[#0D47A1] mb-3", children: "Contact" }),
      /* @__PURE__ */ jsx("p", { className: "mb-1", children: "Tel: +971 4 2566760" }),
      /* @__PURE__ */ jsx("p", { className: "mb-1", children: "Fax: +971 4 2566761" }),
      /* @__PURE__ */ jsxs("p", { className: "mt-1", children: [
        "Email:",
        " ",
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "mailto:contact@gcintle.com",
            className: "text-[#ED1C24] hover:underline font-medium",
            children: "contact@gcintle.com"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("h2", { className: "text-lg font-semibold text-[#0D47A1] mb-3", children: "About" }),
      /* @__PURE__ */ jsx("p", { className: "mb-2", children: "We supply pipeline products with a seamless flow of innovation and reliability." }),
      /* @__PURE__ */ jsxs("p", { className: "text-slate-500 mt-4 text-sm", children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " GC International. All rights reserved."
      ] })
    ] })
  ] }) });
}

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const {
    title = "GC International",
    description = "",
    ogTitle = `${title} | GC International`,
    ogDescription = description,
    ogImage = "/logo.png",
    ogUrl = Astro2.url?.href || ""
  } = Astro2.props;
  return renderTemplate(_a || (_a = __template([`<html lang="en" data-astro-cid-37fxchfa> <head><!-- Google Analytics --><script async src="https://www.googletagmanager.com/gtag/js?id=G-WL2XB7DZCZ"><\/script><script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){ dataLayer.push(arguments); }
      gtag('js', new Date());
      gtag('config', 'G-WL2XB7DZCZ');
    <\/script><!-- Meta --><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><!-- SEO / Open Graph --><title>`, "</title>", '<meta property="og:title"', ">", '<meta property="og:image"', '><meta property="og:url"', `><meta name="theme-color" content="#ffffff"><!-- Font Optimization --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><!-- Preload & non-blocking load --><link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;600;700&display=swap"><link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;600;700&display=swap" rel="stylesheet" media="print" onload="this.media='all'">`, '</head> <body class="bg-white text-gray-800 font-sans scroll-smooth" data-astro-cid-37fxchfa> ', ' <div class="flex flex-col min-h-screen" data-astro-cid-37fxchfa> <main class="flex-grow" data-astro-cid-37fxchfa> ', " </main> ", " </div> <!-- \u2705 Animations -->  ", " </body> </html>"])), ogTitle, description && renderTemplate`<meta name="description"${addAttribute(description, "content")}>`, addAttribute(ogTitle, "content"), ogDescription && renderTemplate`<meta property="og:description"${addAttribute(ogDescription, "content")}>`, addAttribute(ogImage, "content"), addAttribute(ogUrl, "content"), renderHead(), renderComponent($$result, "Navbar", Navbar, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/runner/work/Company-Website/Company-Website/src/components/navbar", "client:component-export": "default", "data-astro-cid-37fxchfa": true }), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", Footer, { "data-astro-cid-37fxchfa": true }), renderScript($$result, "/home/runner/work/Company-Website/Company-Website/src/layouts/BaseLayout.astro?astro&type=script&index=0&lang.ts"));
}, "/home/runner/work/Company-Website/Company-Website/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $ };
