export interface ApplicantData {
  firstName: string;
  lastName:  string;
  email:     string;
  countryCode: string;
  phone:     string;
  gender:    string;
  nationality: string;
  dob:       string;
  visa:      string;
  experience: string;
  linkedin?: string;
  about:     string;
  resumeUrl: string;   // public URL to the uploaded resume
  role:      string;
}

export function applicantConfirmation({ firstName, role }: { firstName: string; role: string }) {
  return {
    subject: `Your application for ${role} at GC International`,
    html: `
      <!DOCTYPE html>
      <html lang="en">
      <head><meta charset="UTF-8" /><title>Application Received</title></head>
      <body style="margin:0;padding:0;font-family:Arial,sans-serif;background:#f5f5f5;">
        <table width="100%" cellpadding="0" cellspacing="0" border="0" style="padding:20px 0;">
          <tr><td align="center">
            <table width="600" cellpadding="0" cellspacing="0" border="0" style="background:#fff;border-radius:8px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.1);">
              <tr><td align="center" style="padding:20px;"><img src="https://res.cloudinary.com/dxrwnc5g4/image/upload/v1753543466/GC_Logo_axkvdz.png" width="160" alt="GC International Logo" /></td></tr>
              <tr><td style="padding:0 40px;"><h1 style="font-size:24px;color:#333;margin:0;">Dear ${firstName},</h1></td></tr>
              <tr><td style="padding:0 40px;">
                <p style="font-size:16px;color:#555;line-height:1.5;">
                Thank you for applying for the <strong style="color:#0054a4;">${role}</strong> role at GC International. We have received your CV and our HR team will review your application.
                </p>
                <p style="font-size:16px;color:#555;line-height:1.5;">
                Good luck!
                </p>
              </td></tr>
              <tr><td align="center" style="padding:30px 40px;">
                <a href="https://gcintle.com" style="background:#0054a4;color:#fff;padding:12px 24px;border-radius:4px;text-decoration:none;">Visit Our Website</a>
              </td></tr>
              <tr><td style="padding:20px 40px;font-size:12px;color:#999;text-align:center;">
                <p style="margin:0;">GC International FZCO, Dubai Airport Freezone, UAE</p>
                <p style="margin:4px 0 0;">&copy; ${new Date().getFullYear()} GC International. All rights reserved.</p>
              </td></tr>
            </table>
          </td></tr>
        </table>
      </body>
      </html>
    `,
  };
}

export function hrNotification(data: ApplicantData) {
  return {
    subject: `New Application: ${data.firstName} ${data.lastName} for ${data.role}`,
    html: `
      <!DOCTYPE html>
      <html lang="en">
      <head><meta charset="UTF-8" /><title>New Application Received</title></head>
      <body style="margin:0;padding:0;font-family:Arial,sans-serif;background:#f0f2f5;">
        <table width="100%" cellpadding="0" cellspacing="0" border="0" style="padding:20px 0;">
          <tr><td align="center">
            <table width="600" cellpadding="0" cellspacing="0" border="0" style="background:#ffffff;border-radius:8px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.1);">
              <!-- Logo -->
              <tr><td align="center" style="padding:20px;"><img src="https://res.cloudinary.com/dxrwnc5g4/image/upload/v1753543466/GC_Logo_axkvdz.png" width="160" alt="GC International Logo" /></td></tr>

              <!-- Header -->
              <tr><td style="padding:0 40px;">
                <h2 align="center" style="margin:0;font-size:20px;color:#333;">New Application Received</h2>
                <p style="margin:4px 0 0;font-size:14px;color:#666;">
                  <strong>${data.firstName} ${data.lastName}</strong> applied for the <strong>${data.role}</strong> role.
                </p> <br
              </td></tr>
              
              <!-- Applicant Details -->
              <tr><td style="padding:20px 40px;">
                <table width="100%" cellpadding="4" cellspacing="0" border="0" style="font-size:14px;color:#444;">
                  <tr><td><strong>Email:</strong></td><td>${data.email}</td></tr>
                  <tr><td><strong>Phone:</strong></td><td>${data.countryCode} ${data.phone}</td></tr>
                  <tr><td><strong>Gender:</strong></td><td>${data.gender}</td></tr>
                  <tr><td><strong>Nationality:</strong></td><td>${data.nationality}</td></tr>
                  <tr><td><strong>DOB:</strong></td><td>${data.dob}</td></tr>
                  <tr><td><strong>Visa Status:</strong></td><td>${data.visa}</td></tr>
                  <tr><td><strong>Experience:</strong></td><td>${data.experience} years</td></tr>
                  ${data.linkedin ? `<tr><td><strong>LinkedIn:</strong></td><td><a href="${data.linkedin}">${data.linkedin}</a></td></tr>` : ""}
                  <tr><td valign="top"><strong>About:</strong></td><td style="line-height:1.4;">${data.about}</td></tr>
                </table>
              </td></tr>
              
              <!-- Resume Link -->
              <tr><td style="padding:0 40px 30px;">
                <p style="font-size:14px;color:#555;">
                  <strong>Resume:</strong> <a href="${data.resumeUrl}" style="color:#0054a4;text-decoration:none;">Download CV</a>
                </p>
              </td></tr>
              
              <!-- Footer -->
              <tr><td style="padding:20px 40px 30px;font-size:12px;color:#999;text-align:center;">
                GC International FZCO, Dubai Airport Freezone, UAE
              </td></tr>
            </table>
          </td></tr>
        </table>
      </body>
      </html>
    `,
  };
}
