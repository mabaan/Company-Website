// src/pages/careers/apply/[slug]/review.ts
import type { APIRoute } from "astro";
import { getJobs } from "../../../lib/jobs";

export const POST: APIRoute = async ({ request, params }) => {
  const jobs = await getJobs();
  const job = jobs.find((j) => j.slug === params.slug);
  if (!job) return new Response("Job not found", { status: 404 });

  const formData = await request.formData();
  const data = Object.fromEntries(formData.entries());
  const encoded = encodeURIComponent(JSON.stringify(data));

  return new Response(null, {
    status: 303,
    headers: {
      Location: `/careers/${params.slug}/review?data=${encoded}`,
    },
  });
};
