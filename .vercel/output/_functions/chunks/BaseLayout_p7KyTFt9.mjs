import { c as createComponent, a as createAstro, r as renderComponent, e as renderScript, b as renderTemplate, f as renderSlot, g as renderHead, d as addAttribute } from './astro/server_CB06aCjr.mjs';
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
    { label: "Network Map", href: "/network" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
    { label: "Blog", href: "/blog" }
  ];
  return /* @__PURE__ */ jsxs("nav", { className: "fixed top-0 left-0 w-full z-50", children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "bg-gradient-to-r from-[#e3f2fd] to-[#bbdefb]\n                   backdrop-blur-md shadow-md\n                   px-4 sm:px-6 lg:px-8\n                   md:max-w-screen-lg md:mx-auto md:mt-4 md:rounded-xl",
        children: /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center py-4 relative", children: [
          /* @__PURE__ */ jsxs(
            "a",
            {
              href: "/",
              className: "flex items-center gap-4 no-underline hover:no-underline",
              children: [
                /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: "https://res.cloudinary.com/dxrwnc5g4/image/upload/v1753901040/gcintle/resume/GC_Transparent_Logo.png",
                    alt: "GC Logo",
                    className: "h-10 w-auto"
                  }
                ),
                /* @__PURE__ */ jsxs("span", { className: "text-xl font-bold tracking-wide hidden md:inline", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-blue-900", children: "GC " }),
                  /* @__PURE__ */ jsx("span", { className: "text-[#e41f26]", children: "International" })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "a",
            {
              href: "/",
              className: "absolute left-1/2 transform -translate-x-1/2 md:hidden font-extrabold text-lg tracking-tight whitespace-nowrap leading-none no-underline hover:no-underline",
              style: { zIndex: 10 },
              children: [
                /* @__PURE__ */ jsx("span", { className: "text-blue-900", children: "GC " }),
                /* @__PURE__ */ jsx("span", { className: "text-[#e41f26]", children: "International" })
              ]
            }
          ),
          /* @__PURE__ */ jsx("ul", { className: "hidden md:flex gap-8 text-[#1e3a8a]", children: links.map((link) => {
            const isActive = path && (path === link.href || link.href !== "/" && path.startsWith(link.href));
            return /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
              "a",
              {
                href: link.href,
                className: `no-underline hover:no-underline hover:text-blue-600 transition duration-200 ${isActive ? "text-[#e41f26] font-extrabold" : "font-semibold"}`,
                children: link.label
              }
            ) }, link.href);
          }) }),
          /* @__PURE__ */ jsx(
            "button",
            {
              className: "md:hidden text-blue-900 text-2xl focus:outline-none",
              onClick: () => setIsOpen(true),
              "aria-label": "Open menu",
              "aria-controls": "mobile-menu",
              "aria-expanded": isOpen,
              children: "☰"
            }
          )
        ] })
      }
    ),
    isOpen && /* @__PURE__ */ jsx(
      "div",
      {
        className: "fixed inset-0 bg-black bg-opacity-40 z-[98]",
        onClick: () => setIsOpen(false)
      }
    ),
    /* @__PURE__ */ jsxs(
      "div",
      {
        className: `fixed top-0 left-0 h-full w-[80vw] max-w-xs z-[99]
        bg-[#222533] shadow-2xl transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        flex flex-col`,
        style: { minWidth: 280 },
        children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between px-5 py-5 border-b border-[#333]", children: [
            /* @__PURE__ */ jsxs(
              "a",
              {
                href: "/",
                className: "flex items-center gap-12 no-underline hover:no-underline",
                onClick: () => setIsOpen(false),
                children: [
                  /* @__PURE__ */ jsx(
                    "img",
                    {
                      src: "https://res.cloudinary.com/dxrwnc5g4/image/upload/v1753901040/gcintle/resume/GC_Transparent_Logo.png",
                      alt: "GC Logo",
                      className: "h-7 w-auto"
                    }
                  ),
                  /* @__PURE__ */ jsxs("span", { className: "font-extrabold text-lg tracking-tight whitespace-nowrap leading-none text-white", children: [
                    /* @__PURE__ */ jsx("span", { style: { color: "#3686d3" }, children: "GC " }),
                    /* @__PURE__ */ jsx("span", { className: "text-[#e41f26]", children: "International" })
                  ] })
                ]
              }
            ),
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: () => setIsOpen(false),
                className: "text-2xl text-[#90caf9] hover:text-[#e41f26] transition",
                "aria-label": "Close menu",
                children: "✕"
              }
            )
          ] }),
          /* @__PURE__ */ jsx("div", { className: "flex-1 flex flex-col gap-2 py-6 px-7 overflow-y-auto", children: links.map((link) => {
            const isActive = path && (path === link.href || link.href !== "/" && path.startsWith(link.href));
            return /* @__PURE__ */ jsx(
              "a",
              {
                href: link.href,
                className: `no-underline block rounded-lg px-3 py-3 text-base font-semibold
                  transition ${isActive ? "text-[#e41f26] bg-[#272b36] font-extrabold" : "text-white hover:bg-[#272b36] hover:text-[#e41f26]"}`,
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
      /* @__PURE__ */ jsxs("h2", { className: "text-lg font-semibold text-[#0D47A1] mb-3 flex items-center gap-2", children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: "https://res.cloudinary.com/dxrwnc5g4/image/upload/v1754140895/gcintle/resume/location.svg",
            alt: "",
            className: "inline h-5 w-5"
          }
        ),
        "GC International FZCO"
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mb-2", children: [
        /* @__PURE__ */ jsx("p", { children: "Office 5EA, Building 520, PO Box 293777" }),
        /* @__PURE__ */ jsx("p", { children: "Dubai Airport Freezone, Dubai, U.A.E" })
      ] }),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "https://www.google.com/maps/place/Dubai+Airport+Freezone/@25.2487425,55.3669749,17z",
          target: "_blank",
          rel: "noopener noreferrer",
          className: "font-medium text-[#e41f26] text-base leading-tight underline transition-all duration-150 hover:font-bold focus:font-bold",
          style: { display: "inline-block", marginTop: "4px" },
          children: "View on Google Maps"
        }
      ),
      /* @__PURE__ */ jsx("p", { className: "mt-4 text-slate-500 italic", children: "Connecting Vision to Reality." })
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsxs("h2", { className: "text-lg font-semibold text-[#0D47A1] mb-3 flex items-center gap-2", children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: "https://res.cloudinary.com/dxrwnc5g4/image/upload/v1754140895/gcintle/resume/contact.svg",
            alt: "",
            className: "inline h-5 w-5"
          }
        ),
        "Contact"
      ] }),
      /* @__PURE__ */ jsxs("p", { className: "mb-1", children: [
        "Tel: ",
        /* @__PURE__ */ jsx("span", { className: "font-medium", children: "+971 4 2566760" })
      ] }),
      /* @__PURE__ */ jsxs("p", { className: "mb-1", children: [
        "Fax: ",
        /* @__PURE__ */ jsx("span", { className: "font-medium", children: "+971 4 2566761" })
      ] }),
      /* @__PURE__ */ jsxs("p", { className: "mt-1", children: [
        "Email:",
        " ",
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "mailto:contact@gcintle.com",
            className: "text-[#e41f26] font-medium underline transition-all duration-150 hover:font-bold focus:font-bold",
            children: "contact@gcintle.com"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsxs("h2", { className: "text-lg font-semibold text-[#0D47A1] mb-3 flex items-center gap-2", children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: "https://res.cloudinary.com/dxrwnc5g4/image/upload/v1754140895/gcintle/resume/about.svg",
            alt: "",
            className: "inline h-5 w-5"
          }
        ),
        "About"
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mb-2", children: "We supply pipeline products with a seamless flow of innovation and reliability." }),
      /* @__PURE__ */ jsxs("p", { className: "text-slate-500 mt-4 text-sm", children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " GC International. All rights reserved."
      ] })
    ] })
  ] }) });
}

const $$Astro$1 = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index;
  const propsStr = JSON.stringify(Astro2.props);
  const paramsStr = JSON.stringify(Astro2.params);
  return renderTemplate`${renderComponent($$result, "vercel-speed-insights", "vercel-speed-insights", { "data-props": propsStr, "data-params": paramsStr, "data-pathname": Astro2.url.pathname })} ${renderScript($$result, "/Users/haiderraza/Desktop/GitHub/Company-Website/node_modules/@vercel/speed-insights/dist/astro/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/haiderraza/Desktop/GitHub/Company-Website/node_modules/@vercel/speed-insights/dist/astro/index.astro", void 0);

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
    ogImage = "https://res.cloudinary.com/dxrwnc5g4/image/upload/v1753901040/gcintle/resume/logo.png",
    ogUrl = Astro2.url?.href || ""
  } = Astro2.props;
  return renderTemplate(_a || (_a = __template([`<html lang="en" data-astro-cid-37fxchfa> <head><!-- Google Analytics --><script async src="https://www.googletagmanager.com/gtag/js?id=G-WL2XB7DZCZ"><\/script><script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){ dataLayer.push(arguments); }
      gtag('js', new Date());
      gtag('config', 'G-WL2XB7DZCZ');
    <\/script><!-- Meta --><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><!-- SEO / Open Graph --><title>`, "</title>", '<meta property="og:title"', ">", '<meta property="og:image"', '><meta property="og:url"', '><meta name="theme-color" content="#ffffff"><!-- Vercel Analytics -->', `<!-- Favicons --><link rel="icon" href="/favicon.ico" sizes="any"><link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png"><link rel="icon" type="image/png" sizes="192x192" href="/web-app-manifest-192x192.png"><link rel="icon" type="image/png" sizes="512x512" href="/web-app-manifest-512x512.png"><link rel="apple-touch-icon" href="/apple-touch-icon.png"><link rel="manifest" href="/site.webmanifest"><!-- Font Optimization --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><!-- Preload & non-blocking load --><link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;600;700&display=swap"><link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;600;700&display=swap" rel="stylesheet" media="print" onload="this.media='all'">`, '</head> <body class="bg-white text-gray-800 font-sans scroll-smooth" data-astro-cid-37fxchfa> ', ' <div class="flex flex-col min-h-screen" data-astro-cid-37fxchfa> <main class="flex-grow" data-astro-cid-37fxchfa> ', " </main> ", " </div> <!-- \u2705 Animations -->  ", " </body> </html>"])), ogTitle, description && renderTemplate`<meta name="description"${addAttribute(description, "content")}>`, addAttribute(ogTitle, "content"), ogDescription && renderTemplate`<meta property="og:description"${addAttribute(ogDescription, "content")}>`, addAttribute(ogImage, "content"), addAttribute(ogUrl, "content"), renderComponent($$result, "SpeedInsights", $$Index, { "data-astro-cid-37fxchfa": true }), renderHead(), renderComponent($$result, "Navbar", Navbar, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/haiderraza/Desktop/GitHub/Company-Website/src/components/navbar", "client:component-export": "default", "data-astro-cid-37fxchfa": true }), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", Footer, { "data-astro-cid-37fxchfa": true }), renderScript($$result, "/Users/haiderraza/Desktop/GitHub/Company-Website/src/layouts/BaseLayout.astro?astro&type=script&index=0&lang.ts"));
}, "/Users/haiderraza/Desktop/GitHub/Company-Website/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $ };
