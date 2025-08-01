/* empty css                                         */
import { c as createComponent, a as createAstro, r as renderComponent, b as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../../../../chunks/astro/server_CB06aCjr.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../../../../chunks/BaseLayout_CQ05ITMQ.mjs';
import { g as getJobs } from '../../../../chunks/jobs_BL4BB5IO.mjs';
import { P as ProgressBar } from '../../../../chunks/ProgressBar_kiEKIBLt.mjs';
export { renderers } from '../../../../renderers.mjs';

const $$Astro = createAstro();
const prerender = false;
const $$Review = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Review;
  const { slug } = Astro2.params;
  let job = null;
  try {
    const jobs = await getJobs();
    job = jobs.find((j) => j.slug === slug);
  } catch (error) {
    console.warn("Failed to fetch jobs:", error);
    job = {
      id: "fallback",
      jobId: 0,
      title: slug?.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase()) || "Position",
      slug: slug || "",
      department: "Various",
      location: "Dubai, UAE",
      employmentType: "Full-time",
      posted: "2025-01-01",
      description: "Position details will be provided during the application process.",
      responsibilities: [],
      qualifications: []
    };
  }
  if (!job) throw new Error(`Job not found for slug: ${slug}`);
  const values = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    countryCode: "",
    gender: "",
    nationality: "",
    dob: "",
    visa: "",
    experience: "",
    linkedin: "",
    about: "",
    resumeBase64: "",
    resumeMime: "",
    resumeName: ""
  };
  if (Astro2.request.method === "POST") {
    const fd = await Astro2.request.formData();
    const getF = (f) => fd.get(f)?.toString() ?? "";
    for (const key of Object.keys(values)) {
      if (key.startsWith("resume")) continue;
      values[key] = getF(key);
    }
    const file = fd.get("resume");
    if (file && file.size > 0) {
      const buf = Buffer.from(await file.arrayBuffer());
      values.resumeBase64 = buf.toString("base64");
      values.resumeMime = file.type;
      values.resumeName = file.name;
    }
  } else {
    const url = new URL(Astro2.url.href);
    const getQ = (f) => url.searchParams.get(f) ?? "";
    for (const key of Object.keys(values)) {
      values[key] = getQ(key);
    }
  }
  const resumeUrl = values.resumeBase64 && values.resumeMime ? `data:${values.resumeMime};base64,${values.resumeBase64}` : "";
  const isPdf = values.resumeMime === "application/pdf";
  return renderTemplate`${renderComponent($$result, "Layout", $$BaseLayout, { "title": `Review | ${job.title} | GC Careers`, "description": `Review your application for ${job.title}.`, "ogTitle": `Review | ${job.title}`, "ogDescription": `Review your application for ${job.title}.`, "ogUrl": Astro2.url.href }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "ProgressBar", ProgressBar, { "currentStep": "review", "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/runner/work/Company-Website/Company-Website/src/components/ProgressBar.tsx", "client:component-export": "default" })} ${maybeRenderHead()}<section class="pt-24 md:pt-32 pb-12 px-4 bg-gray-50 min-h-screen"> <div class="max-w-4xl mx-auto"> <div class="text-center mb-8 md:mb-10"> <h1 class="text-3xl md:text-4xl font-bold text-gray-800">Review Your Application</h1> <p class="text-base md:text-lg text-gray-600 mt-2">
You are applying for the position of <span class="font-semibold text-blue-600">${job.title}</span>.
</p> <p class="mt-4 text-sm text-gray-500">Please review your details carefully before submitting.</p> </div> <div class="bg-white rounded-xl shadow-lg overflow-hidden"> <div class="p-6 md:p-8"> <h2 class="text-xl md:text-2xl font-semibold text-gray-700 border-b pb-4">Personal Information</h2> <dl class="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5 text-base"> <div> <dt class="text-sm font-medium text-gray-500">First Name</dt> <dd class="mt-1 text-gray-900">${values.firstName}</dd> </div> <div> <dt class="text-sm font-medium text-gray-500">Last Name</dt> <dd class="mt-1 text-gray-900">${values.lastName}</dd> </div> <div> <dt class="text-sm font-medium text-gray-500">Email Address</dt> <dd class="mt-1 text-gray-900">${values.email}</dd> </div> <div> <dt class="text-sm font-medium text-gray-500">Phone Number</dt> <dd class="mt-1 text-gray-900">${values.countryCode} ${values.phone}</dd> </div> <div> <dt class="text-sm font-medium text-gray-500">Gender</dt> <dd class="mt-1 text-gray-900">${values.gender}</dd> </div> <div> <dt class="text-sm font-medium text-gray-500">Nationality</dt> <dd class="mt-1 text-gray-900">${values.nationality}</dd> </div> <div> <dt class="text-sm font-medium text-gray-500">Date of Birth</dt> <dd class="mt-1 text-gray-900">${values.dob}</dd> </div> <div> <dt class="text-sm font-medium text-gray-500">Visa Status</dt> <dd class="mt-1 text-gray-900">${values.visa}</dd> </div> </dl> <h2 class="text-xl md:text-2xl font-semibold text-gray-700 border-b pb-4 mt-10">Professional Information</h2> <dl class="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5 text-base"> <div> <dt class="text-sm font-medium text-gray-500">Years of Experience</dt> <dd class="mt-1 text-gray-900">${values.experience}</dd> </div> <div> <dt class="text-sm font-medium text-gray-500">LinkedIn Profile</dt> <dd class="mt-1 text-gray-900 truncate"> <a${addAttribute(values.linkedin, "href")} target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">${values.linkedin}</a> </dd> </div> <div class="sm:col-span-2"> <dt class="text-sm font-medium text-gray-500">About</dt> <dd class="mt-1 text-gray-900 whitespace-pre-wrap">${values.about}</dd> </div> ${values.resumeName && renderTemplate`<div class="sm:col-span-2"> <dt class="text-sm font-medium text-gray-500">Resume</dt> <dd class="mt-1 text-gray-900">${values.resumeName}</dd> </div>`} </dl> </div> ${values.resumeName && renderTemplate`<div class="bg-gray-50 px-6 md:px-8 py-6"> <h2 class="text-xl md:text-2xl font-semibold text-gray-700">Resume Preview</h2> <div class="mt-4"> ${isPdf ? renderTemplate`<div class="border border-gray-200 rounded-lg shadow-sm overflow-hidden"> <iframe${addAttribute(resumeUrl, "src")} class="w-full h-[500px] md:h-[700px]" title="Resume Preview"></iframe> </div>` : renderTemplate`<div class="border border-gray-200 p-5 rounded-lg bg-white text-center sm:text-left"> <p class="font-medium text-lg text-gray-800">${values.resumeName}</p> <p class="text-sm text-gray-600 mt-1">
Preview is only available for PDF files.
</p> <a${addAttribute(resumeUrl, "href")}${addAttribute(values.resumeName, "download")} class="inline-flex items-center gap-2 mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-semibold transition-colors"> <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"> <path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path> </svg>
Download and View
</a> </div>`} </div> </div>`} <div class="p-6 md:p-8 bg-white border-t"> <form method="POST" enctype="multipart/form-data"${addAttribute(`/careers/apply/${slug}/confirmation`, "action")}> <!-- Hidden form values --> <input type="hidden" name="firstName"${addAttribute(values.firstName, "value")}> <input type="hidden" name="lastName"${addAttribute(values.lastName, "value")}> <input type="hidden" name="email"${addAttribute(values.email, "value")}> <input type="hidden" name="phone"${addAttribute(values.phone, "value")}> <input type="hidden" name="countryCode"${addAttribute(values.countryCode, "value")}> <input type="hidden" name="gender"${addAttribute(values.gender, "value")}> <input type="hidden" name="nationality"${addAttribute(values.nationality, "value")}> <input type="hidden" name="dob"${addAttribute(values.dob, "value")}> <input type="hidden" name="visa"${addAttribute(values.visa, "value")}> <input type="hidden" name="experience"${addAttribute(values.experience, "value")}> <input type="hidden" name="linkedin"${addAttribute(values.linkedin, "value")}> <input type="hidden" name="about"${addAttribute(values.about, "value")}> <input type="hidden" name="resumeBase64"${addAttribute(values.resumeBase64, "value")}> <input type="hidden" name="resumeMime"${addAttribute(values.resumeMime, "value")}> <input type="hidden" name="resumeName"${addAttribute(values.resumeName, "value")}> <div class="flex flex-col-reverse sm:flex-row-reverse sm:items-center gap-4"> <button type="submit" class="w-full sm:w-auto inline-flex justify-center items-center px-8 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-transform transform hover:scale-105">
Submit Application
</button> <a${addAttribute(`/careers/apply/${slug}`, "href")} class="w-full sm:w-auto inline-flex justify-center items-center px-8 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[#ed1c24] hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors">
Go Back & Edit
</a> </div> </form> </div> </div> </div> </section> ` })}`;
}, "/home/runner/work/Company-Website/Company-Website/src/pages/careers/apply/[slug]/review.astro", void 0);

const $$file = "/home/runner/work/Company-Website/Company-Website/src/pages/careers/apply/[slug]/review.astro";
const $$url = "/careers/apply/[slug]/review";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Review,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
