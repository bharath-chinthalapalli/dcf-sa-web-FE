import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const AboutSection = (): JSX.Element => {
  const fullText = `Digital compatibility, headquartered in riyadh, is a leading
  provider of end-to-end ICT solutions and consultancy services across
  various sectors in saudi arabia. The company offers expert support
  in IT system integration and infrastructure environment setup,
  serving clients of all sizes. With a strong focus on client needs,
  digital compatibility ensures SLA compliance and world-class service
  delivery. Its experienced engineers manage complex ICT challenges,
  while the company continuously enhances quality, efficiency, and
  innovation. In our company we are committed to delivering a high
  level of safety and security across all sectors, including
  government, private, and non-profit organizations. At DCF company,
  we take great care in protecting our client's sensitive information
  and do not share any information with other clients. Customer
  service is the core of its operations, enabling clients to focus on
  their core business while leaving the complexities of ICT to a
  trusted partner.`;

  const [isMobile, setIsMobile] = useState(false);
  const [showFull, setShowFull] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const displayedText =
    isMobile && !showFull ? fullText.slice(0, 200) + "..." : fullText;

  return (
    <div className="md:mx-8 lg:mx-20 lg:mb-24 mb-16">
      <section className="bg-gray-50 py-10 md:px-0 lg:px-4">
        <div className="mx-4">
          <h2
            className="font-bold [font-family:'Gotham-Bold'] text-2xl sm:text-4xl md:text-6xl leading-tight md:leading-[65.5px] text-black mb-4 md:mb-6"
            style={{ margin: 0 }}
          >
            About Company 
          </h2>

          <p className="[font-family:'Gotham-Book'] md:text-lg leading-[30px] text-[#7d7d7d] md:text-left text-justify mt-10">
            {displayedText}
            {isMobile && (
              <span
                className="text-[#991b1b] cursor-pointer ml-1"
                onClick={() => setShowFull(!showFull)}
              >
                {showFull ? "Show less" : "Show more"}
              </span>
            )}
          </p>

          <div className="flex mt-6 md:mt-10">
            <div className="relative w-[180px] h-11">
              <Link to={"/about-us"}>
                <div className="flex border-2 border-[#991b1b] bg-white text-[#991b1b] w-[180px] h-11 items-center justify-center gap-2.5 px-[52px] py-3 relative rounded-[32px] border border-solid border-kpmg-com-prime">
                  <div className="relative w-fit mt-[-2.00px] ml-[-3.00px] mr-[-3.00px] [font-family:'Gotham-Bold',Helvetica] font-bold text-kpmg-com-prime text-xl text-right tracking-[0] leading-[21.8px] whitespace-nowrap cursor-pointer">
                    Read all
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
