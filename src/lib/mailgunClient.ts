// src/lib/mailgunClient.ts

import "dotenv/config";
import formData from "form-data";
import Mailgun from "mailgun.js";

const mg = new Mailgun(formData).client({
  username: "api",
  key:      process.env.MG_API_KEY!,    // your private API key
});

/**
 * Simplified sendMail wrapper.
 * We cast to any to satisfy Mailgun's required 'template' property.
 */
export async function sendMail(options: {
  from:    string;
  to:      string[];
  subject: string;
  html:    string;
}) {
  return mg.messages.create(
    process.env.MG_DOMAIN!, 
    options as any
  );
}
