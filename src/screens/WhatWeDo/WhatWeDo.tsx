import { Card, CardContent } from "../../components/ui/card";
import NavigationHeader from "../../components/ui/navigation";
import { Footer } from "../HomePage/sections/Footer/Footer";
import { ClientsAndCustomersSection } from "./sections/ClientsAndCustomersSection";
import { CompanyOverviewSection } from "./sections/CompanyOverviewSection/CompanyOverviewSection";
import { UniqueValuePropositionSection } from "./sections/UniqueValuePropositionSection";

export const WhatWeDo = (): JSX.Element => {
  // Value proposition cards data
  const valuePropositionCards = [
    {
      image: "/whatwedo/one.png",
      text: (

        <div className="[font-family:'Gotham-Book',Helvetica] font-normal text-white text-[12px] sm:text-base leading-[16px] sm:leading-[22.4px]">
          <span className="[font-family:'Gotham-Book',Helvetica] font-normal text-white text-[12px] sm:text-base leading-[16px] sm:leading-[22.4px]">
            Proven Track Record In{" "}
          </span>
          <span className="[font-family:'Gotham-Medium',Helvetica] font-medium">
            Complex ICT Projects
          </span>
        </div>
      ),
    },
    {
      image: "/whatwedo/two.png",
      text: (
        <div className="[font-family:'Gotham-Book',Helvetica] font-normal text-white text-[12px] sm:text-base leading-[16px] sm:leading-[22.4px]">
          <span className="[font-family:'Gotham-Book',Helvetica] font-normal text-white text-[12px] sm:text-base leading-[16px] sm:leading-[22.4px]">
            Expert Engineering Team {" "}
          </span>
          <span className="[font-family:'Gotham-Medium',Helvetica] font-medium">
            With Deep Integration Experience
          </span>
        </div>
      ),
    },
    {
      image: "/whatwedo/three.png",
      text: (
        <div className="[font-family:'Gotham-Book',Helvetica] font-normal text-white text-[12px] sm:text-base leading-[16px] sm:leading-[22.4px]">
          <span className="[font-family:'Gotham-Book',Helvetica] font-normal text-white text-[12px] sm:text-base leading-[16px] sm:leading-[22.4px]">
            Exceptional Customer <br /> {" "}
          </span>
          <span className="[font-family:'Gotham-Medium',Helvetica] font-medium">
            Satisfaction And Retention
          </span>
        </div>
      ),
    },
    {
      image: "/whatwedo/four.png",
      text: (
        <div className="[font-family:'Gotham-Book',Helvetica] font-normal text-white text-[12px] sm:text-base leading-[16px] sm:leading-[22.4px]">
          <span className="[font-family:'Gotham-Book',Helvetica] font-normal text-white text-[12px] sm:text-base leading-[16px] sm:leading-[22.4px]">
            Scalable Service Model <br /> {" "}
          </span>
          <span className="[font-family:'Gotham-Medium',Helvetica] font-medium">
            For Regional Expansion
          </span>
        </div>
      ),
    },
  ];

  const valuePropositionCardsMobile = [
    {
      image: "/whatwedo/mobile/1.png",
      text: (

        <div className="[font-family:'Gotham-Book',Helvetica] font-normal text-white text-base sm:text-lg leading-[22px] sm:leading-[26px]">
          <span className="[font-family:'Gotham-Book',Helvetica] font-normal">
            Proven track record in{" "}
          </span>
          <span className="[font-family:'Gotham-Medium',Helvetica] font-medium block">
            complex ICT projects
          </span>
        </div>
      ),
    },
    {
      image: "/whatwedo/mobile/2.png",
      text: (
        <div className="[font-family:'Gotham-Book',Helvetica] font-normal text-white text-base sm:text-lg leading-[22px] sm:leading-[26px]">
          <span className="[font-family:'Gotham-Book',Helvetica] font-normal">
            Expert engineering team {" "}
          </span>
          <span className="[font-family:'Gotham-Medium',Helvetica] font-medium">
            with deep integration experience
          </span>
        </div>
      ),
    },
    {
      image: "/whatwedo/mobile/3.png",
      text: (
        <div className="[font-family:'Gotham-Book',Helvetica] font-normal text-white text-base sm:text-lg leading-[22px] sm:leading-[26px]">
          <span className="[font-family:'Gotham-Book',Helvetica] font-normal">
            Exceptional customer <br /> {" "}
          </span>
          <span className="[font-family:'Gotham-Medium',Helvetica] font-medium">
            satisfaction and retention
          </span>
        </div>
      ),
    },
    {
      image: "/whatwedo/mobile/4.png",
      text: (
        <div className="[font-family:'Gotham-Book',Helvetica] font-normal text-white text-base sm:text-lg leading-[22px] sm:leading-[26px]">
          <span className="[font-family:'Gotham-Book',Helvetica] font-normal">
            Scalable service model <br /> {" "}
          </span>
          <span className="[font-family:'Gotham-Medium',Helvetica] font-medium">
            for regional expansion
          </span>
        </div>
      ),
    },
  ];

  return (
    <>
      <NavigationHeader />
      <div className="bg-white flex flex-row justify-center w-full">
        <div className="bg-white overflow-hidden w-full  relative">
          {/* Company Overview Section */}
          <section className="w-full px-8 sm:px-0 mb-[40px] sm:mb-[100px]">
            <CompanyOverviewSection />
          </section>

          {/* Unique Value Proposition Section */}
          <section className="hidden md:block w-full relative bg-[#bfbfbf] bg-opacity-30 mb-[40px] sm:mb-[100px]">
            <div className="w-full max-w-[1162px] mx-auto py-8 sm:py-12 px-8 sm:px-0">
              <h2 className="[font-family:'Gotham-Bold',Helvetica] font-bold text-black text-2xl xs:text-3xl sm:text-4xl md:text-6xl leading-tight md:leading-[65.5px] mb-6 sm:mb-12">
                Unique Value Proposition
              </h2>

              <div className="grid grid-cols-2 gap-3 sm:flex sm:flex-row sm:gap-[22px] mt-6 sm:mt-[60px]">
                {valuePropositionCards.map((card, index) => (
                  <Card
                    key={index}
                    className="w-[165px] h-[262px] sm:w-[274px] sm:h-[400px]  border-none overflow-hidden hover:opacity-80 transition-opacity duration-200"
                    style={{
                      background: "linear-gradient(180deg, rgba(0, 0, 0, 0) -9.51%, #000000 100%)",
                    }}
                  >
                    <CardContent
                      className="p-0 h-full relative"
                      style={{
                        backgroundImage: `url(${card.image})`,
                        backgroundSize: '100% 100%',
                      }}
                    >
                      <div className="[font-family:'Gotham-Book'] absolute bottom-3 left-3 xs:bottom-6 xs:left-6 text-xs xs:text-sm sm:text-base text-white drop-shadow-md">
                        {card.text}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          <section className="block md:hidden w-full relative bg-[#bfbfbf] bg-opacity-30 mb-[40px] sm:mb-[100px]">
            <div className="w-full max-w-[1162px] mx-auto py-8 sm:py-12 px-8 sm:px-0">
              <h2 className="[font-family:'Gotham-Bold',Helvetica] font-bold text-black text-2xl xs:text-3xl sm:text-4xl md:text-6xl leading-tight md:leading-[65.5px] mb-6 sm:mb-12">
                Unique Value Proposition
              </h2>

              <div className="grid grid-cols-1 gap-6 sm:flex sm:flex-row sm:gap-[22px] mt-6 sm:mt-[60px]">
                {valuePropositionCardsMobile.map((card, index) => (
                  <Card
                    key={index}
                    className="w-full h-[262px] sm:w-[274px] sm:h-[400px] border-none overflow-hidden hover:opacity-80 transition-opacity duration-200"
                    style={{
                      background: "linear-gradient(180deg, rgba(0, 0, 0, 0) -9.51%, #000000 100%)",
                    }}
                  >
                    <CardContent
                      className="p-0 h-full relative"
                      style={{
                        backgroundImage: `url(${card.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                      }}
                    >
                      <div className="[font-family:'Gotham-Book'] absolute bottom-6 xs:bottom-6  text-base sm:text-lg text-white drop-shadow-md" style={{width:'100%',textAlign:'center'}}>
                        {card.text}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>


          <section className="px-8 sm:px-0 md:text-left text-justify">
            <UniqueValuePropositionSection />
          </section>


          <section className="w-full px-8 sm:px-0" style={{ marginTop: '62px' }}>
            <section className="w-full max-w-[1162px] mx-auto">
              <p className="[font-family:'Gotham-Medium',Helvetica] font-medium text-[#202225cc] text-[14px] sm:text-base leading-[20px] sm:leading-[22.4px] md:text-left text-justify">
                At Digital Compatibility, we blend passion, expertise, and
                innovation to offer exceptional services that stand the test of time
                with a consideration of below:
              </p>
              <ClientsAndCustomersSection />
            </section>
          </section>
          {/* Clients And Customers Section */}
        </div>
      </div>
      <Footer />
    </>
  );
};
