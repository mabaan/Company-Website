import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "../styles/gear-scroll.css";

const GearSVG = "/gear.svg";

type GearScrollProps = {
  direction?: "cw" | "ccw";
};

const GearScroll = ({ direction = "cw" }: GearScrollProps) => {
  const topRef = useRef<HTMLImageElement>(null);
  const bottomRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!topRef.current || !bottomRef.current) return;

    gsap.to(topRef.current, {
      rotation: direction === "cw" ? 320 : -320,
      scrollTrigger: {
        trigger: topRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    gsap.to(bottomRef.current, {
      rotation: direction === "cw" ? -320 : 320,
      scrollTrigger: {
        trigger: bottomRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  }, [direction]);

  return (
    <div className="gear-container">
      <img
        ref={topRef}
        src={GearSVG}
        alt="Top Gear"
        loading="lazy"
        className="gear gear-top"
      />
      <img
        ref={bottomRef}
        src={GearSVG}
        alt="Bottom Gear"
        loading="lazy"
        className="gear gear-bottom"
      />
    </div>
  );
};

export default GearScroll;
