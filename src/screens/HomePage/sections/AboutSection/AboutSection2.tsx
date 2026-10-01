import React from "react";

export const AboutSection2 = (): JSX.Element => {
  // Render the inline style tag for fadeIn animation

  return (
    <>
      <div className="lg:mb-24 mb-16 md:hidden block">
        <section className="w-full max-w-[1440px] mx-auto sm:14 md:16  sm:px-8">
          <div
            className="mb-8 sm:mb-12 md:mb-14"
            style={{ marginBottom: "60px" }}
          >
            <div className="flex flex-col md:flex-row gap-4 md:gap-12">
              <div
                className="max-w-full md:max-w-[400px]"
                style={{ gap: "24px" }}
              >
                <h2
                  className="font-bold [font-family:'Gotham-Bold'] text-2xl sm:text-4xl md:text-6xl leading-tight md:leading-[65.5px] text-black mb-4 md:mb-6"
                  style={{ margin: 0 }}
                >
                  About Company 
                </h2>
                {/* <h3 className="font-bold [font-family:'Gotham-Bold',Helvetica] text-xs sm:text-2xl md:text-[24px] leading-snug md:leading-[30px] text-[#7d7d7d]">
                  Client-centric Service Delivery
                </h3> */}
              </div>

              <div className="max-w-[990px]">
                <p className="[font-family:'Gotham-Book'] md:text-lg leading-[30px] text-[#7d7d7d] md:text-left text-justify">
                  Digital compatibility, headquartered in Riyadh, is a leading
                  provider of end-to-end ICT solutions and consultancy services
                  across various sectors in Saudi Arabia. The company offers
                  expert support in IT system integration and infrastructure
                  environment setup, serving clients of all sizes. With a strong
                  focus on client needs, Digital Compatibility ensures SLA
                  compliance and world-class service delivery. Its experienced
                  engineers manage complex ICT challenges, while the company
                  continuously enhances quality, efficiency, and innovation. In
                  our company we are committed to delivering a high level of
                  safety and security across all sectors, including government,
                  private, and non-profit organizations. At DCF Company, we take
                  great care in protecting our clients' sensitive information
                  and do not share any information with other clients. Customer
                  service is the core of its operations, enabling clients to
                  focus on their core business while leaving the complexities of
                  ICT to a trusted partner.
                </p>

                <div className="flex justify-center mt-6 md:mt-8">
                  <div className="relative w-[180px] h-11">
                    <div className="flex border-2 border-[#991b1b] bg-white text-[#991b1b] w-[180px] h-11 items-center justify-center gap-2.5 px-[52px] py-3 relative rounded-[32px] border border-solid border-kpmg-com-prime">
                      <div
                        className="relative w-fit mt-[-2.00px] ml-[-3.00px] mr-[-3.00px] [font-family:'Gotham-Bold',Helvetica] font-bold text-kpmg-com-prime text-xl text-right tracking-[0] leading-[21.8px] whitespace-nowrap cursor-pointer"
                        onClick={() => {
                          // const isMobile = window.innerWidth <= 768;
                          // const targetId = isMobile
                          //   ? "ourservice-section"
                          //   : "ourservice-section";

                          const element =
                            document.getElementById("ourservice-section");
                          if (element) {
                            element.scrollIntoView({ behavior: "smooth" });
                          }
                        }}
                      >
                        Read all
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
