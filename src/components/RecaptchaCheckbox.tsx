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
      init();
    } else {
      const script = document.createElement("script");
      script.src = "https://www.google.com/recaptcha/api.js?render=explicit";
      script.async = true;
      script.onload = init;
      document.body.appendChild(script);
    }

    function init() {
      widgetIdRef.current = window.grecaptcha.render("recaptcha-container", {
        sitekey: import.meta.env.RECAPTCHA_SITE_KEY,
        theme: "light",
      });

      window.recaptchaRef = {
        getToken: () => {
          return new Promise<string>((resolve) => {
            const id = widgetIdRef.current!;
            window.grecaptcha.execute(id);
            const check = () => {
              const token = window.grecaptcha.getResponse(id);
              if (token) {
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
