/* empty css                                */
import { c as createComponent, a as createAstro, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CB06aCjr.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_CQ05ITMQ.mjs';
import { c as createContact } from '../chunks/airtable_DvsIYbMW.mjs';
import { c as contactAcknowledgement, a as contactNotification, s as sendMail } from '../chunks/mailgunClient_CgU5Q6hU.mjs';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const prerender = false;
const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Contact;
  if (Astro2.request.method === "POST") {
    try {
      console.log("--- Handling contact form submission ---");
      const formData = await Astro2.request.formData();
      const get = (field) => formData.get(field)?.toString() || "";
      const data = {
        Name: get("name"),
        Company: get("company"),
        Email: get("email"),
        Phone: get("phone"),
        Message: get("message")
      };
      console.log("\u{1F4E8} Contact form received", data);
      await createContact(data);
      console.log("\u2705 Contact record stored");
      const contactData = {
        name: get("name"),
        company: get("company"),
        email: get("email"),
        phone: get("phone"),
        message: get("message"),
        submittedAt: (/* @__PURE__ */ new Date()).toISOString()
      };
      const contactAck = contactAcknowledgement({ name: contactData.name });
      const contactNotif = contactNotification(contactData);
      try {
        console.log("\u{1F4E7} Sending acknowledgement to", contactData.email);
        await sendMail({
          to: contactData.email,
          subject: contactAck.subject,
          html: contactAck.html
        });
        console.log("\u2705 Acknowledgement email sent");
      } catch (err) {
        console.error("Failed to send contact acknowledgement:", err);
      }
      try {
        console.log("\u{1F4E7} Notifying internal contact", process.env.MAIL_CONTACT);
        await sendMail({
          to: process.env.MAIL_CONTACT,
          subject: contactNotif.subject,
          html: contactNotif.html
        });
        console.log("\u2705 Internal notification sent");
      } catch (err) {
        console.error("Failed to send contact notification:", err);
      }
      return new Response(null, { status: 200 });
    } catch (err) {
      console.error("Failed to submit contact form:", err);
      return new Response("Submission failed", { status: 500 });
    }
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$BaseLayout, { "title": "Contact | GC International", "description": "Get in touch with GC International via our contact form.", "ogTitle": "Contact | GC International", "ogDescription": "Reach out to GC International", "ogUrl": Astro2.url.href }, { "default": async ($$result2) => renderTemplate(_a || (_a = __template(["  ", '<section class="min-h-screen bg-[#f9f9f9] pt-48 pb-20 px-4 text-gray-800"> <div class="max-w-6xl mx-auto bg-white rounded-lg shadow-md grid md:grid-cols-2 gap-12 p-10"> <!-- LEFT: heading / logo / blurb / office info --> <div class="flex flex-col h-full"> <!-- Heading, Logo & Blurb spaced out --> <div class="flex flex-col items-center text-center space-y-16"> <h1 class="text-4xl font-bold text-[#0054a4]">Contact Us</h1> <img src="/GC Logo.png" alt="GC International Logo" class="w-80"> <p class="text-gray-600 max-w-sm">\nWe would love to hear from you. Fill out the form and our team will be in touch shortly.\n</p> </div> <!-- push office info to bottom --> <div class="flex-1"></div> <!-- Centered Head Office block --> <div class="text-sm text-gray-700 leading-relaxed text-center mt-10 space-y-1"> <div><strong>Head Office \u2013 Dubai</strong></div> <div>GC International FZE</div> <div>Dubai Airport Freezone</div> <div>Office 520, Building 5EA,</div> <div>P.O. Box 293777</div> <div>Dubai, United Arab Emirates</div> <div>Tel: +971 4 2566760</div> </div> </div> <!-- RIGHT: Contact Form (unchanged) --> <div> <form id="contactForm" method="POST" class="grid gap-6" novalidate> <!-- Name --> <div class="grid gap-2"> <label for="name" class="font-medium">Name</label> <input id="name" name="name" type="text" placeholder="Your full name" required class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0054a4]"> </div> <!-- Company --> <div class="grid gap-2"> <label for="company" class="font-medium">Company</label> <input id="company" name="company" type="text" placeholder="Company name" required class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0054a4]"> </div> <!-- Email --> <div class="grid gap-2"> <label for="email" class="font-medium">Email</label> <input id="email" name="email" type="email" placeholder="you@example.com" required class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0054a4]"> </div> <!-- Phone --> <div class="grid gap-2"> <label for="phone" class="font-medium">Phone</label> <input id="phone" name="phone" type="tel" placeholder="+971 50 123 4567" required class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0054a4]"> </div> <!-- Message + Counter --> <div class="grid gap-2 relative"> <label for="message" class="font-medium">Message</label> <textarea id="message" name="message" rows="5" placeholder="Type your message here..." required maxlength="500" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0054a4]"></textarea> <div id="charCount" class="absolute bottom-2 right-3 text-xs text-gray-500">\n0 / 500\n</div> </div> <!-- Submit --> <button type="submit" class="bg-[#0054a4] hover:bg-[#004080] text-white px-6 py-3 rounded transition">\nSend Message\n</button> </form> <!-- Toast notification --> <div id="toast" class="hidden fixed bottom-5 right-5 bg-green-600 text-white py-2 px-4 rounded shadow"></div> </div> </div> </section> <script type="module">\n    const form = document.querySelector("#contactForm");\n    const toast = document.querySelector("#toast");\n    const msgField = document.querySelector("#message");\n    const charCount = document.querySelector("#charCount");\n\n    msgField.addEventListener("input", () => {\n      const len = msgField.value.length;\n      charCount.textContent = `${len} / 500`;\n    });\n\n    form.addEventListener("submit", async (e) => {\n      e.preventDefault();\n      let valid = true;\n\n      form.querySelectorAll("[required]").forEach((field) => {\n        if (!field.value.trim()) {\n          field.classList.add("border-red-500", "ring-red-500", "ring-1");\n          valid = false;\n        } else {\n          field.classList.remove("border-red-500", "ring-red-500", "ring-1");\n        }\n      });\n\n      if (valid) {\n        const data = new FormData(form);\n        const res = await fetch(form.action || window.location.pathname, {\n          method: "POST",\n          body: data,\n        });\n\n        if (res.ok) {\n          toast.textContent = "Message sent successfully!";\n          toast.classList.remove("hidden");\n          setTimeout(() => toast.classList.add("hidden"), 3000);\n          form.reset();\n          charCount.textContent = "0 / 500";\n        }\n      }\n    });\n  <\/script> '], ["  ", '<section class="min-h-screen bg-[#f9f9f9] pt-48 pb-20 px-4 text-gray-800"> <div class="max-w-6xl mx-auto bg-white rounded-lg shadow-md grid md:grid-cols-2 gap-12 p-10"> <!-- LEFT: heading / logo / blurb / office info --> <div class="flex flex-col h-full"> <!-- Heading, Logo & Blurb spaced out --> <div class="flex flex-col items-center text-center space-y-16"> <h1 class="text-4xl font-bold text-[#0054a4]">Contact Us</h1> <img src="/GC Logo.png" alt="GC International Logo" class="w-80"> <p class="text-gray-600 max-w-sm">\nWe would love to hear from you. Fill out the form and our team will be in touch shortly.\n</p> </div> <!-- push office info to bottom --> <div class="flex-1"></div> <!-- Centered Head Office block --> <div class="text-sm text-gray-700 leading-relaxed text-center mt-10 space-y-1"> <div><strong>Head Office \u2013 Dubai</strong></div> <div>GC International FZE</div> <div>Dubai Airport Freezone</div> <div>Office 520, Building 5EA,</div> <div>P.O. Box 293777</div> <div>Dubai, United Arab Emirates</div> <div>Tel: +971 4 2566760</div> </div> </div> <!-- RIGHT: Contact Form (unchanged) --> <div> <form id="contactForm" method="POST" class="grid gap-6" novalidate> <!-- Name --> <div class="grid gap-2"> <label for="name" class="font-medium">Name</label> <input id="name" name="name" type="text" placeholder="Your full name" required class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0054a4]"> </div> <!-- Company --> <div class="grid gap-2"> <label for="company" class="font-medium">Company</label> <input id="company" name="company" type="text" placeholder="Company name" required class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0054a4]"> </div> <!-- Email --> <div class="grid gap-2"> <label for="email" class="font-medium">Email</label> <input id="email" name="email" type="email" placeholder="you@example.com" required class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0054a4]"> </div> <!-- Phone --> <div class="grid gap-2"> <label for="phone" class="font-medium">Phone</label> <input id="phone" name="phone" type="tel" placeholder="+971 50 123 4567" required class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0054a4]"> </div> <!-- Message + Counter --> <div class="grid gap-2 relative"> <label for="message" class="font-medium">Message</label> <textarea id="message" name="message" rows="5" placeholder="Type your message here..." required maxlength="500" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0054a4]"></textarea> <div id="charCount" class="absolute bottom-2 right-3 text-xs text-gray-500">\n0 / 500\n</div> </div> <!-- Submit --> <button type="submit" class="bg-[#0054a4] hover:bg-[#004080] text-white px-6 py-3 rounded transition">\nSend Message\n</button> </form> <!-- Toast notification --> <div id="toast" class="hidden fixed bottom-5 right-5 bg-green-600 text-white py-2 px-4 rounded shadow"></div> </div> </div> </section> <script type="module">\n    const form = document.querySelector("#contactForm");\n    const toast = document.querySelector("#toast");\n    const msgField = document.querySelector("#message");\n    const charCount = document.querySelector("#charCount");\n\n    msgField.addEventListener("input", () => {\n      const len = msgField.value.length;\n      charCount.textContent = \\`\\${len} / 500\\`;\n    });\n\n    form.addEventListener("submit", async (e) => {\n      e.preventDefault();\n      let valid = true;\n\n      form.querySelectorAll("[required]").forEach((field) => {\n        if (!field.value.trim()) {\n          field.classList.add("border-red-500", "ring-red-500", "ring-1");\n          valid = false;\n        } else {\n          field.classList.remove("border-red-500", "ring-red-500", "ring-1");\n        }\n      });\n\n      if (valid) {\n        const data = new FormData(form);\n        const res = await fetch(form.action || window.location.pathname, {\n          method: "POST",\n          body: data,\n        });\n\n        if (res.ok) {\n          toast.textContent = "Message sent successfully!";\n          toast.classList.remove("hidden");\n          setTimeout(() => toast.classList.add("hidden"), 3000);\n          form.reset();\n          charCount.textContent = "0 / 500";\n        }\n      }\n    });\n  <\/script> '])), maybeRenderHead()) })}`;
}, "/home/runner/work/Company-Website/Company-Website/src/pages/contact.astro", void 0);

const $$file = "/home/runner/work/Company-Website/Company-Website/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
