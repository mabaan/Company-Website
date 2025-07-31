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
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Application Received</title>
        <style>
          body { margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f4f7f6; }
          .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.05); }
          .header { background-color: #0d2240; padding: 24px; text-align: center; }
          .header img { max-width: 150px; }
          .content { padding: 32px; color: #333333; }
          .content h1 { font-size: 24px; color: #0d2240; margin-top: 0; }
          .content p { font-size: 16px; line-height: 1.6; color: #555555; }
          .content strong { color: #f22d30; }
          .button-container { text-align: center; padding: 20px 0 32px; }
          .button { background-color: #f22d30; color: #ffffff !important; padding: 14px 28px; text-decoration: none; border-radius: 5px; font-weight: bold; display: inline-block; }
          .footer { background-color: #f4f7f6; padding: 24px; text-align: center; font-size: 12px; color: #888888; }
          .footer p { margin: 4px 0; }
        </style>
      </head>
      <body>
        <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #f4f7f6; padding: 20px;">
          <tr>
            <td align="center">
              <div class="container">
                <div class="header">
                  <img src="https://res.cloudinary.com/dxrwnc5g4/image/upload/v1753543466/GC_Logo_axkvdz.png" alt="GC International Logo">
                </div>
                <div class="content">
                  <h1>Hello ${firstName},</h1>
                  <p>Thank you for applying for the <strong>${role}</strong> position at GC International. We’re thrilled to see your interest in joining our team.</p>
                  <p>We have successfully received your application. Our HR team will carefully review your profile and get in touch with you if your qualifications meet our requirements.</p>
                  <p>We appreciate your patience during this process.</p>
                  <p>Best of luck!</p>
                </div>
                <div class="button-container">
                  <a href="https://gcintle.com" class="button">Visit Our Website</a>
                </div>
                <div class="footer">
                  <p>GC International FZCO, Dubai Airport Freezone, UAE</p>
                  <p>&copy; ${new Date().getFullYear()} GC International. All rights reserved.</p>
                </div>
              </div>
            </td>
          </tr>
        </table>
      </body>
      </html>
    `,
  };
}

// ───────────────────────────────────────────────────────────────────────────────
// HR notification of a new job application
// ───────────────────────────────────────────────────────────────────────────────
export function hrNotification(data: ApplicantData) {
  return {
    subject: `[#${data.applicationId}] New Application for ${data.role}: ${data.firstName} ${data.lastName}`,
    html: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Job Application</title>
        <style>
          body { margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f4f7f6; }
          .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.05); }
          .header { background-color: #0d2240; padding: 24px; color: #ffffff; text-align: center; }
          .header h1 { font-size: 24px; margin: 0; }
          .header p { font-size: 16px; margin: 4px 0 0; opacity: 0.9; }
          .content { padding: 32px; }
          .details-table { width: 100%; border-collapse: collapse; }
          .details-table th, .details-table td { text-align: left; padding: 12px; border-bottom: 1px solid #eeeeee; }
          .details-table th { color: #888888; font-weight: normal; width: 150px; }
          .details-table td { color: #333333; }
          .details-table a { color: #f22d30; text-decoration: none; }
          .details-table a:hover { text-decoration: underline; }
          .section-title { font-size: 20px; color: #0d2240; margin-top: 0; margin-bottom: 16px; border-bottom: 2px solid #f22d30; padding-bottom: 8px; }
          .about-section { margin-top: 24px; }
          .about-section p { white-space: pre-wrap; font-size: 14px; line-height: 1.6; color: #555; }
          .button-container { text-align: center; padding: 20px 0 32px; }
          .button { background-color: #f22d30; color: #ffffff !important; padding: 14px 28px; text-decoration: none; border-radius: 5px; font-weight: bold; display: inline-block; }
          .footer { background-color: #f4f7f6; padding: 24px; text-align: center; font-size: 12px; color: #888888; }
        </style>
      </head>
      <body>
        <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #f4f7f6; padding: 20px;">
          <tr>
            <td align="center">
              <div class="container">
                <div class="header">
                  <h1>New Job Application</h1>
                  <p>For the <strong>${data.role}</strong> position</p>
                </div>
                <div class="content">
                  <h2 class="section-title">Applicant Details</h2>
                  <table class="details-table">
                    <tr><th>Name</th><td>${data.firstName} ${data.lastName}</td></tr>
                    <tr><th>Email</th><td><a href="mailto:${data.email}">${data.email}</a></td></tr>
                    <tr><th>Phone</th><td>${data.countryCode} ${data.phone}</td></tr>
                    <tr><th>Nationality</th><td>${data.nationality}</td></tr>
                    <tr><th>Gender</th><td>${data.gender}</td></tr>
                    <tr><th>Date of Birth</th><td>${data.dob}</td></tr>
                    <tr><th>Visa Status</th><td>${data.visa}</td></tr>
                    <tr><th>Experience</th><td>${data.experience} years</td></tr>
                    ${data.linkedin ? `<tr><th>LinkedIn</th><td><a href="${data.linkedin}" target="_blank">View Profile</a></td></tr>` : ''}
                  </table>
                  <div class="about-section">
                    <h3 class="section-title">About</h3>
                    <p>${data.about || "Not provided."}</p>
                  </div>
                </div>
                ${data.resumeUrl ? `<div class="button-container"><a href="${data.resumeUrl}" class="button">Download Resume</a></div>` : ''}
                <div class="footer">
                  Application ID: ${data.applicationId} | Job ID: ${data.jobId}
                </div>
              </div>
            </td>
          </tr>
        </table>
      </body>
      </html>
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
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>We've Received Your Message</title>
        <style>
          body { margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f4f7f6; }
          .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.05); }
          .header { background-color: #0d2240; padding: 24px; text-align: center; }
          .header img { max-width: 150px; }
          .content { padding: 32px; color: #333333; }
          .content h1 { font-size: 24px; color: #0d2240; margin-top: 0; }
          .content p { font-size: 16px; line-height: 1.6; color: #555555; }
          .button-container { text-align: center; padding: 20px 0 32px; }
          .button { background-color: #f22d30; color: #ffffff !important; padding: 14px 28px; text-decoration: none; border-radius: 5px; font-weight: bold; display: inline-block; }
          .footer { background-color: #f4f7f6; padding: 24px; text-align: center; font-size: 12px; color: #888888; }
          .footer p { margin: 4px 0; }
        </style>
      </head>
      <body>
        <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #f4f7f6; padding: 20px;">
          <tr>
            <td align="center">
              <div class="container">
                <div class="header">
                  <img src="https://res.cloudinary.com/dxrwnc5g4/image/upload/v1753543466/GC_Logo_axkvdz.png" alt="GC International Logo">
                </div>
                <div class="content">
                  <h1>Hello ${name},</h1>
                  <p>Thank you for reaching out to GC International. We have successfully received your message.</p>
                  <p>Our team will review your inquiry and get back to you within 1-2 business days.</p>
                </div>
                <div class="button-container">
                  <a href="https://gcintle.com" class="button">Visit Our Website</a>
                </div>
                <div class="footer">
                  <p>GC International FZCO, Dubai Airport Freezone, UAE</p>
                  <p>&copy; ${new Date().getFullYear()} GC International. All rights reserved.</p>
                </div>
              </div>
            </td>
          </tr>
        </table>
      </body>
      </html>
    `,
  };
}

// ───────────────────────────────────────────────────────────────────────────────
// Notification to internal team of new contact form submission
// ───────────────────────────────────────────────────────────────────────────────
export function contactNotification(data: ContactData) {
  return {
    subject: `New Contact Form Inquiry from ${data.name}`,
    html: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Contact Inquiry</title>
        <style>
          body { margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f4f7f6; }
          .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.05); }
          .header { background-color: #0d2240; padding: 24px; color: #ffffff; text-align: center; }
          .header h1 { font-size: 24px; margin: 0; }
          .header p { font-size: 16px; margin: 4px 0 0; opacity: 0.9; }
          .content { padding: 32px; }
          .details-table { width: 100%; border-collapse: collapse; }
          .details-table th, .details-table td { text-align: left; padding: 12px; border-bottom: 1px solid #eeeeee; }
          .details-table th { color: #888888; font-weight: normal; width: 120px; }
          .details-table td { color: #333333; }
          .details-table a { color: #f22d30; text-decoration: none; }
          .details-table a:hover { text-decoration: underline; }
          .section-title { font-size: 20px; color: #0d2240; margin-top: 0; margin-bottom: 16px; border-bottom: 2px solid #f22d30; padding-bottom: 8px; }
          .message-section { margin-top: 24px; }
          .message-section p { white-space: pre-wrap; font-size: 14px; line-height: 1.6; color: #555; background-color: #f9f9f9; padding: 16px; border-radius: 5px; }
          .footer { background-color: #f4f7f6; padding: 24px; text-align: center; font-size: 12px; color: #888888; }
        </style>
      </head>
      <body>
        <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #f4f7f6; padding: 20px;">
          <tr>
            <td align="center">
              <div class="container">
                <div class="header">
                  <h1>New Contact Inquiry</h1>
                  <p>from <strong>${data.name}</strong></p>
                </div>
                <div class="content">
                  <h2 class="section-title">Contact Details</h2>
                  <table class="details-table">
                    <tr><th>Name</th><td>${data.name}</td></tr>
                    <tr><th>Company</th><td>${data.company}</td></tr>
                    <tr><th>Email</th><td><a href="mailto:${data.email}">${data.email}</a></td></tr>
                    <tr><th>Phone</th><td>${data.phone}</td></tr>
                  </table>
                  <div class="message-section">
                    <h3 class="section-title">Message</h3>
                    <p>${data.message}</p>
                  </div>
                </div>
                <div class="footer">
                  Submitted on ${data.submittedAt}
                </div>
              </div>
            </td>
          </tr>
        </table>
      </body>
      </html>
    `,
  };
}