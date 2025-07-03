import { useEffect } from "react";
import { getAnime } from "../lib/getAnime";

export function useScrollAnime(selector: string) {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);

    const observer = new IntersectionObserver(
      async (entries) => {
        const anime = await getAnime();

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;

            anime({
              targets: el,
              opacity: [0, 1],
              translateY: [24, 0],
              duration: 600,
              easing: "easeOutQuad",
            });

            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [selector]);
}
