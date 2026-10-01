import { ArrowRightIcon } from "lucide-react";
import { Card, CardContent } from "../../components/ui/card";
import NavigationHeader from "../../components/ui/navigation";
import { Footer } from "../HomePage/sections/Footer/Footer";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";

export interface CaseStudyContent {
  pageTitle: string;
  mainTitle: string;
  subtitle: string | React.ReactNode;
  description: string;
  topImage: string;
  securityServices: Array<{
    id: number;
    image: string;
    title: string;
    description: string;
  }>;
  whatMakesTitle: string;
  sectionBgImage: string;
  sectionBgImageMobile: string;
  ctaTitle: string | React.ReactNode;
  ctaDescription: string;
  serviceCards: Array<{
    id: number;
    title: string;
    serviceDescription: string;
    image: string;
    isService: boolean;
    row: number;
    description: string;
    link: string;
  }>;
}

export const CaseStudyPage = ({ content }: { content: CaseStudyContent }): JSX.Element => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [content]);
  return (
    <>
      <NavigationHeader />
      <div className="relative w-full max-w-[1440px] mx-auto bg-white overflow-hidden" id="caseStudyPage">
        <section className="relative pt-[30px] px-[32px]  sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 justify-start md:justify-between justify-items-start md:justify-items-end">
            <div>
              <h1 className="mt-[5px] [font-family:'Gotham-Bold',Helvetica] font-bold text-black text-[24px] md:text-[54px] tracking-[0] leading-[1.2] md:leading-[65.5px]">
                {content.mainTitle}
              </h1>
              <h1 className="[font-family:'Gotham-Bold',Helvetica] font-bold text-black text-[14px] md:text-2xl tracking-[0] leading-[1.3] md:leading-[33.6px]">
                {content.subtitle}
              </h1>
              <p className="mt-6 [font-family:'Gotham-Book',Helvetica] font-normal text-[#7d7d7d] text-[14px] md:text-base tracking-[0] leading-[1.4] md:leading-[25.6px]">
                {content.description}
              </p>
            </div>
            <img
              className="hidden md:block w-[272px] h-[207px] top-[-8px] right-[140px]"
              alt="Vector"
              src={content.topImage}
            />
          </div>
        </section>
        <section className="w-full  mx-auto py-8 px-[32px]  sm:px-8">
          <h2 className="mb-8 [font-family:'Gotham-Bold',Helvetica] font-bold text-black text-[24px] md:text-[40px] leading-[1.3] md:leading-[56px]">
            {content.whatMakesTitle}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {content.securityServices.map((service) => (
              <Card
                key={service.id}
                className="overflow-hidden border-none shadow-[0px_4px_4px_#52525233]"
              >
                <div className="relative">
                  <img
                    className="w-full h-[242px] object-cover"
                    alt={`${service.title} illustration`}
                    src={service.image}
                  />
                </div>
                <CardContent className="p-3 bg-white">
                  <h3
                    className={`[font-family:'Gotham-Bold',Helvetica] font-bold text-black text-[14px] md:text-xl leading-[1.3] md:leading-5 ${service.id === 3 ? "mb-2" : "mb-4 whitespace-nowrap"}`}
                  >
                    {service.title}
                    {service.id === 3 && <br />}
                    {service.id === 3 && "Every Level"}
                  </h3>
                  <p className="[font-family:'Gotham-Book',Helvetica] font-normal text-[#7d7d7d] text-[14px] md:text-base leading-[1.4] md:leading-[22.4px]">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
        <section className="w-full bg-black bg-blend-overlay py-10 relative overflow-hidden" >
          <div
            className="absolute inset-0 opacity-70 z-0"
            style={{
              backgroundImage: `url(${window.innerWidth <= 768 ? content.sectionBgImageMobile : content.sectionBgImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl text-center md:text-left">
              <h2 className="text-[16px] md:text-2xl font-bold text-white leading-[1.3] md:leading-[33.6px] mb-6 [font-family:'Gotham-Bold',Helvetica]">
                {content.ctaTitle}
              </h2>

              <p className="text-[14px] md:text-base font-normal text-white leading-[1.4] md:leading-[22.4px] max-w-lg [font-family:'Gotham-Book',Helvetica]">
                {content.ctaDescription}
              </p>
            </div>
          </div>
        </section>
        <section className="py-16 px-[32px]  sm:px-8">
          <h2 className="[font-family:'Gotham-Bold',Helvetica] font-bold text-black text-2xl tracking-[0] leading-6 mb-[40px]">
            Related content
          </h2>
          <div className="flex" style={{ gap: "24px" }}>
            {content.serviceCards.map((card) => (
              <Card
                key={card.id}
                className="relative w-[173px] h-[270px] rounded-[17px] overflow-hidden border-none group"
              >
                {/* Card background image */}
                <img
                  src={card.image}
                  alt={card.title}
                  className="absolute inset-0 w-full h-full object-cover rounded-[17px]"
                />

                {/* Hover overlay (red with hard-light) */}
                <div
                  className="absolute inset-0 rounded-[17px] opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none"
                  style={{ background: '#9B1C1C', mixBlendMode: 'hard-light' }}
                ></div>

                {/* Gradient for case studies */}
                {!card.isService && (
                  <div className="absolute inset-0 bg-[#eaeaea] rounded-[17px] opacity-40 z-10" />
                )}

                {/* Card content container */}
                <CardContent className="relative h-full flex flex-col  p-4 z-10">
                  {/* Title - always visible */}

                  {/* Description - only visible on hover */}
                  <div className="absolute top-[16px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="[font-family:'Gotham-Book'] text-lg leading-4 text-white group-hover:block w-[134px]" style={{ fontSize: '12px' }}>
                      {card.description}
                    </p>
                  </div>

                  {card.isService && (
                    <p className="[font-family:'Gotham-Book',Helvetica] font-normal text-white text-2xl  group-hover:hidden" style={{ fontSize: '12px', lineHeight: '20px' }}>
                      {card.serviceDescription}
                    </p>
                  )}
                  <div className="self-end mt-auto">
                    <NavLink to={card.link} className="w-[33px] h-[33px] rounded-full border-[0.42px] border-white bg-transparent p-0 flex items-center justify-center" style={{ cursor: 'default' }}>
                      <ArrowRightIcon className="h-[13px] w-[13px] text-white block"/>
                    </NavLink>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};
