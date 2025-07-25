// test_mg.js
import 'dotenv/config';    // ← load .env first, automatically

import formData from "form-data";
import Mailgun  from "mailgun.js";

// At this point process.env.MG_API_KEY must exist
console.log("MG_API_KEY is:", JSON.stringify(process.env.MG_API_KEY));  
// Should print: "MG_API_KEY is: \"key-XXXXXXXXXXXXXX\""

const mailgun = new Mailgun(formData);
const mgClient = mailgun.client({
  username: "api",
  key:      process.env.MG_API_KEY,   // if this is undefined, dotenv didn't load it
});

async function sendTest() {
  try {
    const res = await mgClient.messages.create(process.env.MG_DOMAIN, {
      from:    "GC International <noreply@------>",
      to:      ["you@youremail.com"],
      subject: "Test Email",
      text:    "This is a test.",
    });
    console.log(res);
  } catch (err) {
    console.error("Mailgun error:", err);
  }
}

sendTest();
