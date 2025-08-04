/* empty css                                */
import { c as createComponent, a as createAstro, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CB06aCjr.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_p7KyTFt9.mjs';
import { c as createContact } from '../chunks/airtable_BFbnGfKN.mjs';
import { c as contactAcknowledgement, a as contactNotification, s as sendMail } from '../chunks/mailgunClient_DdzYW0hS.mjs';
/* empty css                                   */
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
      await createContact(data);
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
  return renderTemplate`${renderComponent($$result, "Layout", $$BaseLayout, { "title": "Contact | GC International", "description": "Get in touch with GC International via our contact form.", "ogTitle": "Contact | GC International", "ogDescription": "Reach out to GC International", "ogUrl": Astro2.url.href, "data-astro-cid-uw5kdbxl": true }, { "default": async ($$result2) => renderTemplate(_a || (_a = __template(["  ", '<section class="min-h-screen bg-gradient-to-br from-[#f3f6f9] to-[#eaf1fa] pt-32 pb-8 px-2 text-gray-800" data-astro-cid-uw5kdbxl> <div class="max-w-6xl mx-auto rounded-3xl shadow-2xl ring-1 ring-[#dde5ee]/60 flex flex-col md:grid md:grid-cols-2 gap-0 overflow-hidden bg-white/80 backdrop-blur-md" data-astro-cid-uw5kdbxl> <!-- LEFT: Company info --> <div class="relative flex flex-col h-full p-6 sm:p-10 bg-gradient-to-b from-[#ffffff99] to-[#f2f7fb]" data-astro-cid-uw5kdbxl> <div class="hidden md:block absolute right-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-[#e3e8ee] to-transparent z-10" data-astro-cid-uw5kdbxl></div> <div class="flex flex-col items-center text-center space-y-10 md:space-y-16 z-20" data-astro-cid-uw5kdbxl> <h1 class="text-3xl md:text-5xl font-extrabold text-[#0054a4] tracking-tight drop-shadow-sm mt-4" data-astro-cid-uw5kdbxl>\nContact Us\n</h1> <img src="https://res.cloudinary.com/dxrwnc5g4/image/upload/v1753901041/gcintle/resume/GC_Logo.png" alt="GC International Logo" class="w-40 md:w-72 drop-shadow-lg rounded-xl" data-astro-cid-uw5kdbxl> <p class="text-gray-600 text-base md:text-lg max-w-xs md:max-w-sm font-medium" data-astro-cid-uw5kdbxl>\nWe would love to hear from you and welcome your questions, business inquiries, or partnership proposals.<br data-astro-cid-uw5kdbxl>\nPlease fill out the form below and a member of our team will respond as soon as possible.\n</p> </div> <div class="flex-1" data-astro-cid-uw5kdbxl></div> <div class="mt-8 md:mt-10 flex justify-center z-20" data-astro-cid-uw5kdbxl> <div class="text-gray-700 text-center text-sm leading-relaxed space-y-1 w-full max-w-xs" data-astro-cid-uw5kdbxl> <div class="text-[#0054a4] font-bold mb-1" data-astro-cid-uw5kdbxl>Head Office \u2013 Dubai</div> <div data-astro-cid-uw5kdbxl>GC International FZE</div> <div data-astro-cid-uw5kdbxl>Dubai Airport Freezone</div> <div data-astro-cid-uw5kdbxl>Office 520, Building 5EA,</div> <div data-astro-cid-uw5kdbxl>P.O. Box 293777</div> <div data-astro-cid-uw5kdbxl>Dubai, United Arab Emirates</div> <div class="font-medium mt-1" data-astro-cid-uw5kdbxl>Tel: <a href="tel:+97142566760" class="hover:underline text-[#0054a4]" data-astro-cid-uw5kdbxl>+971 4 256 6760</a></div> <div class="mt-2" data-astro-cid-uw5kdbxl> <a href="https://maps.google.com/?q=Dubai+Airport+Freezone+Building+5EA+Dubai" target="_blank" rel="noopener" class="text-[#e41f26] font-semibold underline underline-offset-4 hover:text-[#003968] transition" data-astro-cid-uw5kdbxl>View on Google Maps</a> </div> </div> </div> </div> <!-- RIGHT: Contact Form column, bg-[#f2f7fb] on mobile, blue on md+ screens --> <div class="flex flex-col justify-center items-center p-0 py-8 md:py-10 bg-[#f2f7fb] md:bg-[#003b71] relative min-h-[500px] w-full" data-astro-cid-uw5kdbxl> <form id="contactForm" method="POST" class="grid gap-7 md:gap-6 bg-white/95 border border-[#e6eaf3] rounded-2xl shadow-lg px-4 py-7 md:px-10 md:py-10 w-full max-w-md" novalidate data-astro-cid-uw5kdbxl> <!-- Name --> <div class="grid gap-2" data-astro-cid-uw5kdbxl> <label for="name" class="font-semibold text-[#003b71]" data-astro-cid-uw5kdbxl>Name</label> <input id="name" name="name" type="text" placeholder="Your full name" required class="input-field" data-astro-cid-uw5kdbxl> </div> <!-- Company --> <div class="grid gap-2" data-astro-cid-uw5kdbxl> <label for="company" class="font-semibold text-[#003b71]" data-astro-cid-uw5kdbxl>Company</label> <input id="company" name="company" type="text" placeholder="Company name" required class="input-field" data-astro-cid-uw5kdbxl> </div> <!-- Email --> <div class="grid gap-2" data-astro-cid-uw5kdbxl> <label for="email" class="font-semibold text-[#003b71]" data-astro-cid-uw5kdbxl>Email</label> <input id="email" name="email" type="email" placeholder="you@example.com" required class="input-field" data-astro-cid-uw5kdbxl> </div> <!-- Phone --> <div class="grid gap-2" data-astro-cid-uw5kdbxl> <label for="phone" class="font-semibold text-[#003b71]" data-astro-cid-uw5kdbxl>Phone</label> <input id="phone" name="phone" type="tel" placeholder="+971 50 123 4567" required class="input-field" data-astro-cid-uw5kdbxl> </div> <!-- Message + Counter --> <div class="grid gap-2 relative" data-astro-cid-uw5kdbxl> <label for="message" class="font-semibold text-[#003b71]" data-astro-cid-uw5kdbxl>Message</label> <textarea id="message" name="message" rows="5" placeholder="Type your message here..." required maxlength="500" class="input-field resize-none" data-astro-cid-uw5kdbxl></textarea> <div id="charCount" class="absolute bottom-2 right-3 text-xs text-gray-500" data-astro-cid-uw5kdbxl>\n0 / 500\n</div> </div> <!-- Submit --> <button type="submit" class="bg-[#e41f26] hover:bg-[#ba1721] active:scale-95 text-white px-6 py-3 rounded-xl font-bold tracking-wide transition-all duration-200 shadow-md hover:shadow-lg" data-astro-cid-uw5kdbxl>\nSend Message\n</button> </form> <!-- Toast notification --> <div id="toast" class="hidden fixed bottom-5 right-5 bg-green-600 text-white py-2 px-4 rounded shadow-lg text-base z-50" data-astro-cid-uw5kdbxl></div> </div> </div>  </section> <script type="module">\n    const form = document.querySelector("#contactForm");\n    const toast = document.querySelector("#toast");\n    const msgField = document.querySelector("#message");\n    const charCount = document.querySelector("#charCount");\n\n    msgField.addEventListener("input", () => {\n      const len = msgField.value.length;\n      charCount.textContent = `${len} / 500`;\n    });\n\n    form.addEventListener("submit", async (e) => {\n      e.preventDefault();\n      let valid = true;\n\n      form.querySelectorAll("[required]").forEach((field) => {\n        if (!field.value.trim()) {\n          field.classList.add("border-red-500", "ring-red-500", "ring-1");\n          valid = false;\n        } else {\n          field.classList.remove("border-red-500", "ring-red-500", "ring-1");\n        }\n      });\n\n      if (valid) {\n        const data = new FormData(form);\n        const res = await fetch(form.action || window.location.pathname, {\n          method: "POST",\n          body: data,\n        });\n\n        if (res.ok) {\n          toast.textContent = "Message sent successfully!";\n          toast.classList.remove("hidden");\n          setTimeout(() => toast.classList.add("hidden"), 3000);\n          form.reset();\n          charCount.textContent = "0 / 500";\n        }\n      }\n    });\n  <\/script> '], ["  ", '<section class="min-h-screen bg-gradient-to-br from-[#f3f6f9] to-[#eaf1fa] pt-32 pb-8 px-2 text-gray-800" data-astro-cid-uw5kdbxl> <div class="max-w-6xl mx-auto rounded-3xl shadow-2xl ring-1 ring-[#dde5ee]/60 flex flex-col md:grid md:grid-cols-2 gap-0 overflow-hidden bg-white/80 backdrop-blur-md" data-astro-cid-uw5kdbxl> <!-- LEFT: Company info --> <div class="relative flex flex-col h-full p-6 sm:p-10 bg-gradient-to-b from-[#ffffff99] to-[#f2f7fb]" data-astro-cid-uw5kdbxl> <div class="hidden md:block absolute right-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-[#e3e8ee] to-transparent z-10" data-astro-cid-uw5kdbxl></div> <div class="flex flex-col items-center text-center space-y-10 md:space-y-16 z-20" data-astro-cid-uw5kdbxl> <h1 class="text-3xl md:text-5xl font-extrabold text-[#0054a4] tracking-tight drop-shadow-sm mt-4" data-astro-cid-uw5kdbxl>\nContact Us\n</h1> <img src="https://res.cloudinary.com/dxrwnc5g4/image/upload/v1753901041/gcintle/resume/GC_Logo.png" alt="GC International Logo" class="w-40 md:w-72 drop-shadow-lg rounded-xl" data-astro-cid-uw5kdbxl> <p class="text-gray-600 text-base md:text-lg max-w-xs md:max-w-sm font-medium" data-astro-cid-uw5kdbxl>\nWe would love to hear from you and welcome your questions, business inquiries, or partnership proposals.<br data-astro-cid-uw5kdbxl>\nPlease fill out the form below and a member of our team will respond as soon as possible.\n</p> </div> <div class="flex-1" data-astro-cid-uw5kdbxl></div> <div class="mt-8 md:mt-10 flex justify-center z-20" data-astro-cid-uw5kdbxl> <div class="text-gray-700 text-center text-sm leading-relaxed space-y-1 w-full max-w-xs" data-astro-cid-uw5kdbxl> <div class="text-[#0054a4] font-bold mb-1" data-astro-cid-uw5kdbxl>Head Office \u2013 Dubai</div> <div data-astro-cid-uw5kdbxl>GC International FZE</div> <div data-astro-cid-uw5kdbxl>Dubai Airport Freezone</div> <div data-astro-cid-uw5kdbxl>Office 520, Building 5EA,</div> <div data-astro-cid-uw5kdbxl>P.O. Box 293777</div> <div data-astro-cid-uw5kdbxl>Dubai, United Arab Emirates</div> <div class="font-medium mt-1" data-astro-cid-uw5kdbxl>Tel: <a href="tel:+97142566760" class="hover:underline text-[#0054a4]" data-astro-cid-uw5kdbxl>+971 4 256 6760</a></div> <div class="mt-2" data-astro-cid-uw5kdbxl> <a href="https://maps.google.com/?q=Dubai+Airport+Freezone+Building+5EA+Dubai" target="_blank" rel="noopener" class="text-[#e41f26] font-semibold underline underline-offset-4 hover:text-[#003968] transition" data-astro-cid-uw5kdbxl>View on Google Maps</a> </div> </div> </div> </div> <!-- RIGHT: Contact Form column, bg-[#f2f7fb] on mobile, blue on md+ screens --> <div class="flex flex-col justify-center items-center p-0 py-8 md:py-10 bg-[#f2f7fb] md:bg-[#003b71] relative min-h-[500px] w-full" data-astro-cid-uw5kdbxl> <form id="contactForm" method="POST" class="grid gap-7 md:gap-6 bg-white/95 border border-[#e6eaf3] rounded-2xl shadow-lg px-4 py-7 md:px-10 md:py-10 w-full max-w-md" novalidate data-astro-cid-uw5kdbxl> <!-- Name --> <div class="grid gap-2" data-astro-cid-uw5kdbxl> <label for="name" class="font-semibold text-[#003b71]" data-astro-cid-uw5kdbxl>Name</label> <input id="name" name="name" type="text" placeholder="Your full name" required class="input-field" data-astro-cid-uw5kdbxl> </div> <!-- Company --> <div class="grid gap-2" data-astro-cid-uw5kdbxl> <label for="company" class="font-semibold text-[#003b71]" data-astro-cid-uw5kdbxl>Company</label> <input id="company" name="company" type="text" placeholder="Company name" required class="input-field" data-astro-cid-uw5kdbxl> </div> <!-- Email --> <div class="grid gap-2" data-astro-cid-uw5kdbxl> <label for="email" class="font-semibold text-[#003b71]" data-astro-cid-uw5kdbxl>Email</label> <input id="email" name="email" type="email" placeholder="you@example.com" required class="input-field" data-astro-cid-uw5kdbxl> </div> <!-- Phone --> <div class="grid gap-2" data-astro-cid-uw5kdbxl> <label for="phone" class="font-semibold text-[#003b71]" data-astro-cid-uw5kdbxl>Phone</label> <input id="phone" name="phone" type="tel" placeholder="+971 50 123 4567" required class="input-field" data-astro-cid-uw5kdbxl> </div> <!-- Message + Counter --> <div class="grid gap-2 relative" data-astro-cid-uw5kdbxl> <label for="message" class="font-semibold text-[#003b71]" data-astro-cid-uw5kdbxl>Message</label> <textarea id="message" name="message" rows="5" placeholder="Type your message here..." required maxlength="500" class="input-field resize-none" data-astro-cid-uw5kdbxl></textarea> <div id="charCount" class="absolute bottom-2 right-3 text-xs text-gray-500" data-astro-cid-uw5kdbxl>\n0 / 500\n</div> </div> <!-- Submit --> <button type="submit" class="bg-[#e41f26] hover:bg-[#ba1721] active:scale-95 text-white px-6 py-3 rounded-xl font-bold tracking-wide transition-all duration-200 shadow-md hover:shadow-lg" data-astro-cid-uw5kdbxl>\nSend Message\n</button> </form> <!-- Toast notification --> <div id="toast" class="hidden fixed bottom-5 right-5 bg-green-600 text-white py-2 px-4 rounded shadow-lg text-base z-50" data-astro-cid-uw5kdbxl></div> </div> </div>  </section> <script type="module">\n    const form = document.querySelector("#contactForm");\n    const toast = document.querySelector("#toast");\n    const msgField = document.querySelector("#message");\n    const charCount = document.querySelector("#charCount");\n\n    msgField.addEventListener("input", () => {\n      const len = msgField.value.length;\n      charCount.textContent = \\`\\${len} / 500\\`;\n    });\n\n    form.addEventListener("submit", async (e) => {\n      e.preventDefault();\n      let valid = true;\n\n      form.querySelectorAll("[required]").forEach((field) => {\n        if (!field.value.trim()) {\n          field.classList.add("border-red-500", "ring-red-500", "ring-1");\n          valid = false;\n        } else {\n          field.classList.remove("border-red-500", "ring-red-500", "ring-1");\n        }\n      });\n\n      if (valid) {\n        const data = new FormData(form);\n        const res = await fetch(form.action || window.location.pathname, {\n          method: "POST",\n          body: data,\n        });\n\n        if (res.ok) {\n          toast.textContent = "Message sent successfully!";\n          toast.classList.remove("hidden");\n          setTimeout(() => toast.classList.add("hidden"), 3000);\n          form.reset();\n          charCount.textContent = "0 / 500";\n        }\n      }\n    });\n  <\/script> '])), maybeRenderHead()) })}`;
}, "/Users/haiderraza/Desktop/GitHub/Company-Website/src/pages/contact.astro", void 0);

const $$file = "/Users/haiderraza/Desktop/GitHub/Company-Website/src/pages/contact.astro";
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
