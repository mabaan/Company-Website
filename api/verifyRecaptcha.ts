import "dotenv/config";
import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    res.status(405).json({ success: false });
    return;
  }

  const token = (req.body as any)?.token;
  console.log("Verifying reCAPTCHA token", token);

  if (typeof token !== "string" || !token) {
    res.status(400).json({ success: false });
    return;
  }

  try {
    const params = new URLSearchParams();
    params.append("secret", process.env.RECAPTCHA_SECRET_KEY || "");
    params.append("response", token);

    const response = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params.toString(),
      }
    );

    const data = await response.json();
    console.log("reCAPTCHA verification result", data);
    res.status(200).json({ success: !!data.success });
  } catch (err) {
    console.error("reCAPTCHA verify error:", err);
    res.status(500).json({ success: false });
  }
}
