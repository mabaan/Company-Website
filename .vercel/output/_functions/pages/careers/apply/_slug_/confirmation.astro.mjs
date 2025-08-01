/* empty css                                         */
import { c as createComponent, a as createAstro, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../../../../chunks/astro/server_CB06aCjr.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../../../../chunks/BaseLayout_CQ05ITMQ.mjs';
import { g as getJobs } from '../../../../chunks/jobs_BL4BB5IO.mjs';
import 'dotenv/config';
import { v2 } from 'cloudinary';
import streamifier from 'streamifier';
import { g as getBase, A as APPLICATIONS_TABLE } from '../../../../chunks/airtable_DvsIYbMW.mjs';
import { b as applicantConfirmation, h as hrNotification, s as sendMail } from '../../../../chunks/mailgunClient_CgU5Q6hU.mjs';
import { P as ProgressBar } from '../../../../chunks/ProgressBar_kiEKIBLt.mjs';
export { renderers } from '../../../../renderers.mjs';

v2.config(process.env.CLOUDINARY_URL);
async function uploadResumeToCloudinary(file, jobId, applicationId) {
  if (file.type !== "application/pdf") {
    throw new Error(`Invalid file type: ${file.type}. Only PDF is allowed.`);
  }
  const folderPath = `gcintle/resume/${jobId}`;
  const publicId = `${applicationId}`;
  return new Promise((resolve, reject) => {
    const uploadStream = v2.uploader.upload_stream(
      {
        folder: folderPath,
        public_id: publicId,
        resource_type: "raw",
        format: "pdf",
        overwrite: false
      },
      (error, result) => {
        if (error || !result?.secure_url) {
          console.error("Cloudinary upload_stream error:", error);
          return reject(error ?? new Error("Missing Cloudinary URL"));
        }
        console.log("Cloudinary upload result:", result);
        resolve(result.secure_url);
      }
    );
    file.arrayBuffer().then(
      (buf) => streamifier.createReadStream(Buffer.from(buf)).pipe(uploadStream)
    ).catch((err) => {
      console.error("Cloudinary stream error:", err);
      reject(err);
    });
  });
}

const $$Astro = createAstro();
const prerender = false;
const server = true;
const $$Confirmation = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Confirmation;
  console.log("--- Handling job application confirmation ---");
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
  if (!job) throw new Error("Job not found");
  console.log("\u2705 Job loaded:", job);
  let formData;
  try {
    formData = await Astro2.request.formData();
  } catch {
    console.warn("\u26A0\uFE0F FormData fetch failed");
    formData = new FormData();
  }
  const get = (field) => formData.get(field)?.toString().trim() ?? "";
  const dob = get("dob");
  const gender = get("gender");
  const experience = parseFloat(get("experience"));
  if (!dob || isNaN(Date.parse(dob))) throw new Error("\u274C Invalid DOB");
  if (!["Male", "Female"].includes(gender)) throw new Error("\u274C Invalid gender");
  if (isNaN(experience)) throw new Error("\u274C Invalid experience");
  let resumeFile = formData.get("resume");
  let resumeUrl = get("resumeUrl");
  const resumeBase64 = get("resumeBase64");
  const resumeMime = get("resumeMime");
  const resumeName = get("resumeName") || "resume.pdf";
  if (!resumeFile && resumeBase64) {
    const buf = Buffer.from(resumeBase64, "base64");
    resumeFile = new File([buf], resumeName, { type: resumeMime || "application/pdf" });
  }
  console.log("\u{1F4E5} Form parsed. Resume file present:", !!resumeFile);
  console.log("--- Creating Airtable application record ---");
  const baseInstance = getBase();
  if (!baseInstance) {
    console.error("\u274C Airtable not available during build");
    throw new Error("Service unavailable - please try again later");
  }
  const [newRecord] = await baseInstance(APPLICATIONS_TABLE).create([
    {
      fields: {
        "First Name": get("firstName"),
        "Last Name": get("lastName"),
        Email: get("email"),
        "Country Code": get("countryCode"),
        "Phone Number": get("phone"),
        Nationality: get("nationality"),
        Gender: gender,
        DOB: dob,
        "Visa Status": get("visa"),
        Experience: experience,
        LinkedIn: get("linkedin"),
        About: get("about"),
        "Job Applied For": [job.id]
        // ✅ Correct Airtable record ID
        // "Submitted at": new Date().toISOString(), // Optional: Computed field
      }
    }
  ]);
  const applicationId = newRecord.fields["Application ID"];
  const applicationRecordId = newRecord.id;
  if (!applicationId) {
    console.error("\u274C Missing Application ID from Airtable");
    throw new Error("Application ID missing");
  }
  console.log("\u2705 Created application record:", {
    id: applicationRecordId,
    appId: applicationId
  });
  if (!resumeUrl && resumeFile && resumeFile.size > 0) {
    const jobId = job.jobId;
    if (!jobId) {
      console.error("\u274C Job ID is missing from job record");
      throw new Error("Job ID required for Cloudinary upload");
    }
    console.log("\u{1F4E4} Uploading resume to Cloudinary...");
    resumeUrl = await uploadResumeToCloudinary(
      resumeFile,
      jobId,
      typeof applicationId === "string" || typeof applicationId === "number" ? applicationId : applicationId?.toString?.() ?? ""
    );
    console.log("\u2705 Resume uploaded:", resumeUrl);
  }
  const applicantPayload = applicantConfirmation({
    firstName: get("firstName"),
    role: job.title
  });
  const hrPayload = hrNotification({
    applicationId: typeof applicationId === "string" || typeof applicationId === "number" ? applicationId : applicationId?.toString?.() ?? "",
    jobId: job.jobId,
    firstName: get("firstName"),
    lastName: get("lastName"),
    email: get("email"),
    countryCode: get("countryCode"),
    phone: get("phone"),
    nationality: get("nationality"),
    gender,
    dob,
    visa: get("visa"),
    experience,
    linkedin: get("linkedin"),
    about: get("about"),
    resumeUrl,
    role: job.title
  });
  try {
    console.log("\u{1F4E7} Sending confirmation to applicant");
    await sendMail({
      to: formData.get("email"),
      subject: applicantPayload.subject,
      html: applicantPayload.html
    });
    console.log("\u2705 Applicant email sent");
  } catch (err) {
    console.error("Failed to send applicant email:", err);
  }
  try {
    console.log("\u{1F4E7} Notifying HR at", process.env.MAIL_HR);
    await sendMail({
      to: process.env.MAIL_HR,
      bcc: process.env.MAIL_CONTACT,
      subject: hrPayload.subject,
      html: hrPayload.html
    });
    console.log("\u2705 HR notification sent");
  } catch (err) {
    console.error("Failed to send HR notification:", err);
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$BaseLayout, { "title": `Application Submitted | ${job.title}`, "description": `Your application for ${job.title} has been submitted.`, "ogTitle": `Application Submitted | ${job.title}`, "ogDescription": `Thank you for applying to GC International.`, "ogUrl": Astro2.url.href }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "ProgressBar", ProgressBar, { "currentStep": "confirmation", "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/runner/work/Company-Website/Company-Website/src/components/ProgressBar.tsx", "client:component-export": "default" })} ${maybeRenderHead()}<section class="pt-32 pb-12 px-4 max-w-2xl mx-auto text-center"> <h1 class="text-3xl font-bold mb-4">Application Submitted</h1> <p class="text-lg mb-4">
Thank you for applying to <strong>${job.title}</strong> at GC International.
</p> <p class="text-gray-600 mb-6">
We’ve received your application and will get back to you shortly.
</p> <a href="/careers" class="inline-block bg-[#0054a4] hover:bg-blue-700 text-white px-6 py-2 rounded text-sm font-medium">
View Other Openings
</a> </section> ` })}`;
}, "/home/runner/work/Company-Website/Company-Website/src/pages/careers/apply/[slug]/confirmation.astro", void 0);

const $$file = "/home/runner/work/Company-Website/Company-Website/src/pages/careers/apply/[slug]/confirmation.astro";
const $$url = "/careers/apply/[slug]/confirmation";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Confirmation,
  file: $$file,
  prerender,
  server,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
