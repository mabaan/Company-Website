import React, { useEffect, useRef } from "react";

declare global {
  interface Window {
    recaptchaRef?: { getToken: () => Promise<string> };
    grecaptcha: any;
  }
}

export default function RecaptchaCheckbox() {
  const widgetIdRef = useRef<number | null>(null);

  useEffect(() => {
    if (window.grecaptcha) {
      console.log("reCAPTCHA already loaded");
      init();
    } else {
      console.log("Loading reCAPTCHA script");
      const script = document.createElement("script");
      script.src = "https://www.google.com/recaptcha/api.js?render=explicit";
      script.async = true;
      script.onload = () => {
        console.log("reCAPTCHA script loaded");
        init();
      };
      document.body.appendChild(script);
    }

    function init() {
      console.log("Initializing reCAPTCHA");
      widgetIdRef.current = window.grecaptcha.render("recaptcha-container", {
        sitekey: import.meta.env.RECAPTCHA_SITE_KEY,
        theme: "light",
      });
      console.log("reCAPTCHA widget rendered", widgetIdRef.current);

      window.recaptchaRef = {
        getToken: () => {
          return new Promise<string>((resolve) => {
            const id = widgetIdRef.current!;
            console.log("Executing reCAPTCHA token request");
            window.grecaptcha.execute(id);
            const check = () => {
              const token = window.grecaptcha.getResponse(id);
              if (token) {
                console.log("reCAPTCHA token retrieved");
                resolve(token);
              } else {
                setTimeout(check, 300);
              }
            };
            check();
          });
        },
      };
    }
  }, []);

  return <div id="recaptcha-container"></div>;
}
