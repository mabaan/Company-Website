import 'dotenv/config';
import formData from 'form-data';
import Mailgun from 'mailgun.js';

// Initialize Mailgun client using API key from env
const mailgun = new Mailgun(formData);
const mgClient = mailgun.client({ username: 'api', key: process.env.MG_API_KEY! });

// Options for sendMail helper
export interface MailOptions {
  from?: string;
  to: string | string[];
  cc?: string | string[];
  bcc?: string | string[];
  subject: string;
  text?: string;
  html?: string;
}

// Helper to send email via Mailgun
export async function sendMail(opts: MailOptions) {
  if (!process.env.MG_DOMAIN) throw new Error('MG_DOMAIN is missing');
  const from = opts.from ?? process.env.MAIL_FROM!;
  return mgClient.messages.create(process.env.MG_DOMAIN, { ...opts, from });
}
