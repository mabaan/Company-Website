import 'dotenv/config';
import formData from 'form-data';
import Mailgun from 'mailgun.js';

// ---------------------------------------------------------------------------
//  Mailgun setup
//  dotenv loads the following environment variables used throughout the app:
//    - MG_KEY_ID       : Mailgun key ID (not used directly but loaded for debug)
//    - MG_API_KEY      : Secret API key used for authentication
//    - MG_DOMAIN       : Your Mailgun sending domain
//    - MAIL_FROM       : Default "from" address for outgoing emails
//    - MAIL_HR, MAIL_CONTACT : HR and contact addresses used by pages
// ---------------------------------------------------------------------------
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

// ---------------------------------------------------------------------------
// sendMail
//  Re-usable helper for sending a message. The function will default the
//  "from" header to MAIL_FROM if not provided and throws if MG_DOMAIN is unset.
// ---------------------------------------------------------------------------
export async function sendMail(opts: MailOptions) {
  if (!process.env.MG_DOMAIN) throw new Error('MG_DOMAIN is missing');
  const from = opts.from ?? process.env.MAIL_FROM!;
  const result = await mgClient.messages.create(process.env.MG_DOMAIN, {
    ...opts,
    from,
  });
  return result;
}
