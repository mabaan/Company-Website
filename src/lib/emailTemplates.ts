// src/lib/emailTemplates.ts

export interface ApplicantData {
  applicationId: string | number;
  jobId:         string | number;
  firstName:     string;
  lastName:      string;
  email:         string;
  countryCode:   string;
  phone:         string;
  nationality:   string;
  gender:        string;
  dob:           string;
  visa:          string;
  experience:    number;
  linkedin?:     string;
  about?:        string;
  resumeUrl?:    string;
  role:          string;    // this is your Job Title
}

export interface ContactData {
  name:        string;
  company:     string;
  email:       string;
  phone:       string;
  message:     string;
  submittedAt: string;
}

// ───────────────────────────────────────────────────────────────────────────────
// Applicant confirmation after submitting a job application
// ───────────────────────────────────────────────────────────────────────────────
export function applicantConfirmation({
  firstName,
  role,
}: {
  firstName: string;
  role:      string;
}) {
  return {
    subject: `Your application for “${role}” has been received`,
    html: `
      <!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"/><title>Application Received</title></head>
      <body style="margin:0;padding:0;font-family:Arial,sans-serif;background:#f5f5f5;">
        <table width="100%" cellpadding="0" cellspacing="0" border="0" style="padding:20px 0;">
          <tr><td align="center">
            <table width="600" cellpadding="0" cellspacing="0" border="0"
                   style="background:#fff;border-radius:8px;overflow:hidden;
                          box-shadow:0 2px 8px rgba(0,0,0,0.1);">
              <tr><td align="center" style="padding:20px;">
                <img src="https://res.cloudinary.com/dxrwnc5g4/image/upload/v1753543466/GC_Logo_axkvdz.png"
                     width="160" alt="GC International Logo"/>
              </td></tr>
              <tr><td style="padding:0 40px;">
                <h1 style="font-size:24px;color:#333;margin:0;">
                  Hello ${firstName},
                </h1>
                <p style="font-size:16px;color:#555;line-height:1.5;margin-top:12px;">
                  Thanks for applying for the <strong style="color:#0054a4;">${role}</strong> role at GC International.
                  We’ve received your CV and our HR team will be in reviewing your application shortly.
                </p>
                <p style="font-size:16px;color:#555;line-height:1.5;margin-top:12px;">
                  Good Luck!
                </p>
              </td></tr>
              <tr><td align="center" style="padding:30px 40px;">
                <a href="https://gcintle.com"
                   style="background:#0054a4;color:#fff;padding:12px 24px;
                          border-radius:4px;text-decoration:none;">
                  Visit Our Website
                </a>
              </td></tr>
              <tr><td style="padding:20px 40px;font-size:12px;color:#999;text-align:center;">
                <p style="margin:0;">
                  GC International FZCO, Dubai Airport Freezone, UAE
                </p>
                <p style="margin-top:4px;">
                  &copy; ${new Date().getFullYear()} GC International. All rights reserved.
                </p>
              </td></tr>
            </table>
          </td></tr>
        </table>
      </body></html>
    `,
  };
}

// ───────────────────────────────────────────────────────────────────────────────
// HR notification of a new job application
// ───────────────────────────────────────────────────────────────────────────────
export function hrNotification(data: ApplicantData) {
  return {
    subject: `[#${data.applicationId}] App for Job #${data.jobId}: ${data.firstName} ${data.lastName}`,
    html: `
      <!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"/><title>New Application</title></head>
      <body style="margin:0;padding:0;font-family:Arial,sans-serif;background:#f0f2f5;">
        <table width="100%" cellpadding="0" cellspacing="0" border="0" style="padding:20px 0;">
          <tr><td align="center">
            <table width="600" cellpadding="0" cellspacing="0" border="0"
                   style="background:#fff;border-radius:8px;overflow:hidden;
                          box-shadow:0 2px 8px rgba(0,0,0,0.1);">
              <tr><td align="center" style="padding:20px;">
                <img src="https://res.cloudinary.com/dxrwnc5g4/image/upload/v1753543466/GC_Logo_axkvdz.png"
                     width="160" alt="GC International Logo"/>
              </td></tr>
              <tr><td style="padding:0 40px;">
                <h2 style="margin:0;font-size:20px;color:#333;text-align:center;">
                  New Application Received
                </h2>
                <p style="margin:8px 0 0;font-size:14px;color:#666;text-align:center;">
                  Application <strong>#${data.applicationId}</strong> for Job <strong>#${data.jobId}</strong>:
                  <strong>${data.firstName} ${data.lastName}</strong>
                </p>
              </td></tr>
              <tr><td style="padding:20px 40px;">
                <table width="100%" cellpadding="4" cellspacing="0" border="0"
                       style="font-size:14px;color:#444;">
                  <tr><td><strong>Email</strong></td><td>${data.email}</td></tr>
                  <tr><td><strong>Phone</strong></td>
                      <td>${data.countryCode} ${data.phone}</td></tr>
                  <tr><td><strong>Gender</strong></td><td>${data.gender}</td></tr>
                  <tr><td><strong>Nationality</strong></td><td>${data.nationality}</td></tr>
                  <tr><td><strong>DOB</strong></td><td>${data.dob}</td></tr>
                  <tr><td><strong>Visa Status</strong></td><td>${data.visa}</td></tr>
                  <tr><td><strong>Experience</strong></td>
                      <td>${data.experience} years</td></tr>
                  ${
                    data.linkedin
                      ? `<tr><td><strong>LinkedIn</strong></td>
                           <td><a href="${data.linkedin}" style="color:#0054a4;">${data.linkedin}</a></td></tr>`
                      : ``
                  }
                  <tr><td valign="top"><strong>About</strong></td>
                      <td style="line-height:1.4;">${data.about || "—"}</td></tr>
                </table>
              </td></tr>
              <tr><td style="padding:0 40px 30px;">
                <p style="font-size:14px;color:#555;">
                  <strong>Resume URL:</strong>
                  ${data.resumeUrl
                    ? `<a href="${data.resumeUrl}" style="color:#0054a4;">Download CV</a>`
                    : "—"}
                </p>
              </td></tr>
              <tr><td style="padding:20px 40px 30px;font-size:12px;color:#999;text-align:center;">
                GC International FZCO, Dubai Airport Freezone, UAE
              </td></tr>
            </table>
          </td></tr>
        </table>
      </body></html>
    `,
  };
}

// ───────────────────────────────────────────────────────────────────────────────
// Contact form acknowledgement to user
// ───────────────────────────────────────────────────────────────────────────────
export function contactAcknowledgement({ name }: { name: string }) {
  return {
    subject: `Thank you for contacting GC International`,
    html: `
      <!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"/><title>We’ve Received Your Message</title></head>
      <body style="margin:0;padding:0;font-family:Arial,sans-serif;background:#f5f5f5;">
        <table width="100%" cellpadding="0" cellspacing="0" border="0" style="padding:20px 0;">
          <tr><td align="center">
            <table width="600" cellpadding="0" cellspacing="0" border="0"
                   style="background:#fff;border-radius:8px;overflow:hidden;
                          box-shadow:0 2px 8px rgba(0,0,0,0.1);">
              <tr><td align="center" style="padding:20px;">
                <img src="https://res.cloudinary.com/dxrwnc5g4/image/upload/v1753543466/GC_Logo_axkvdz.png"
                     width="160" alt="GC International Logo"/>
              </td></tr>
              <tr><td style="padding:0 40px;">
                <h1 style="font-size:24px;color:#333;margin:0;">
                  Hello ${name},
                </h1>
                <p style="font-size:16px;color:#555;line-height:1.5;margin-top:12px;">
                  Thank you for reaching out. We’ve received your message and will respond within 1–2 business days.
                </p>
              </td></tr>
              <tr><td align="center" style="padding:30px 40px;">
                <a href="https://gcintle.com"
                   style="background:#0054a4;color:#fff;padding:12px 24px;
                          border-radius:4px;text-decoration:none;">
                  Visit Our Website
                </a>
              </td></tr>
              <tr><td style="padding:20px 40px;font-size:12px;color:#999;text-align:center;">
                &copy; ${new Date().getFullYear()} GC International FZCO. All rights reserved.
              </td></tr>
            </table>
          </td></tr>
        </table>
      </body></html>
    `,
  };
}

// ───────────────────────────────────────────────────────────────────────────────
// Notification to internal team of new contact form submission
// ───────────────────────────────────────────────────────────────────────────────
export function contactNotification(data: ContactData) {
  return {
    subject: `New Inquiry from ${data.name}`,
    html: `
      <!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"/><title>New Contact Inquiry</title></head>
      <body style="margin:0;padding:0;font-family:Arial,sans-serif;background:#f0f2f5;">
        <table width="100%" cellpadding="0" cellspacing="0" border="0" style="padding:20px 0;">
          <tr><td align="center">
            <table width="600" cellpadding="0" cellspacing="0" border="0"
                   style="background:#fff;border-radius:8px;overflow:hidden;
                          box-shadow:0 2px 8px rgba(0,0,0,0.1);">
              <tr><td align="center" style="padding:20px;">
                <img src="https://res.cloudinary.com/dxrwnc5g4/image/upload/v1753543466/GC_Logo_axkvdz.png"
                     width="160" alt="GC International Logo"/>
              </td></tr>
              <tr><td style="padding:0 40px;">
                <h2 style="margin:0;font-size:20px;color:#333;text-align:center;">
                  New Contact Inquiry Received
                </h2>
                <p style="margin:8px 0 0;font-size:14px;color:#666;text-align:center;">
                  <strong>${data.name}</strong> from <strong>${data.company}</strong>
                  submitted a new message on ${data.submittedAt}.
                </p>
              </td></tr>
              <tr><td style="padding:20px 40px;">
                <table width="100%" cellpadding="4" cellspacing="0" border="0"
                       style="font-size:14px;color:#444;">
                  <tr><td><strong>Email</strong></td><td>${data.email}</td></tr>
                  <tr><td><strong>Phone</strong></td><td>${data.phone}</td></tr>
                  <tr><td valign="top"><strong>Message</strong></td>
                      <td style="line-height:1.4;">${data.message}</td></tr>
                </table>
              </td></tr>
              <tr><td style="padding:20px 40px;font-size:12px;color:#999;text-align:center;">
                &copy; ${new Date().getFullYear()} GC International FZCO. All rights reserved.
              </td></tr>
            </table>
          </td></tr>
        </table>
      </body></html>
    `,
  };
}
