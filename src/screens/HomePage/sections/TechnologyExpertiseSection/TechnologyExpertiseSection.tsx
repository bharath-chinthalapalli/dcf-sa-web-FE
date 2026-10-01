import { useEffect, useRef } from "react";
import { logos } from "./LogoData";

// const logos = [
//   {
//     alt: "EMC logo",
//     src: "/image-88.png",
//     className: "h-8 sm:h-10 md:h-12 w-[115px] object-contain",
//   },
//   {
//     alt: "Microsoft logo",
//     src: "/image-89.png",
//     className: "h-8 sm:h-10 md:h-[52px] w-[204px] object-contain",
//   },
//   {
//     alt: "Cisco logo",
//     src: "/image-90.png",
//     className: "h-8 sm:h-10 md:h-[49px] w-[84px] object-contain",
//   },
//   {
//     alt: "Ipswitch WhatsUp Gold logo",
//     src: "/toppng-com-ipswitch-whatsup-gold-logo-2885x551-2-1.png",
//     className: "h-7 sm:h-8 md:h-9 w-[190px] object-contain",
//   },
//   {
//     alt: "Symantec logo",
//     src: "/image-92-1.png",
//     className: "h-8 sm:h-10 md:h-[52px] w-[190px] object-contain",
//   },
//   {
//     alt: "HP",
//     src: "/technologyexperties/hp.png",
//     className: "h-8 sm:h-10 md:h-[52px] w-[190px] object-contain",
//   },
//   {
//     alt: "Adobe",
//     src: "/technologyexperties/adobe.png",
//     className: "h-8 sm:h-10 md:h-[52px] w-[190px] object-contain",
//   },
//   {
//     alt: "Dell",
//     src: "/technologyexperties/dell.png",
//     className: "h-8 sm:h-10 md:h-[52px] w-[190px] object-contain",
//   },
//   {
//     alt: "Winrar",
//     src: "/technologyexperties/winrar.png",
//     className: "h-8 sm:h-10 md:h-[52px] w-[190px] object-contain",
//   },
//   {
//     alt: "IT",
//     src: "/technologyexperties/it.png",
//     className: "h-8 sm:h-10 md:h-[52px] w-[190px] object-contain",
//   },
// ];

export const TechnologyExpertiseSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const speed = 80; // pixels per second

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let start: number | null = null;
    let pos = 0;
    let animationId: number;
    const contentWidth = container.scrollWidth / 2;

    const animate = (timestamp: number) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      pos = -(elapsed / 1000) * speed;

      if (Math.abs(pos) >= contentWidth) {
        start = timestamp;
        pos = 0;
      }

      container.style.transform = `translateX(${pos}px)`;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <section className="py-10 sm:py-14 md:py-16 bg-white">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8">
        <div className="overflow-hidden w-full bg-white">
          <h2 className="text-2xl md:text-[50px] font-bold text-black mb-8 md:mb-[60px] [font-family:'Gotham-Bold',Helvetica]">
            Technology Expertise
          </h2>
          <div className="flex w-max will-change-transform" ref={containerRef}>
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center shrink-0 mx-6 w-[100px] h-[60px]"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="object-contain w-full h-full"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
