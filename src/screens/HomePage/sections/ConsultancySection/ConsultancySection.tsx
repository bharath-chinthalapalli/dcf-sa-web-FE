import { Key } from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const ConsultancySection = (): JSX.Element => {
  const serviceCards = [
    {
      id: 1,
      title: "Cybersecurity",
      description:
        "We provide end-to-end security services including ISO 27001 compliance, ISMS implementation, risk assessment, penetration testing, and vulnerability assessment—helping organizations strengthen their security posture and safeguard critical information assets.",
      bgColor: "bg-[#121621]",
      image: "/consultancyimage/one.png", // Placeholder for image83
      blurEffects: [
        { color: "bg-[#2d2324]", position: "top-[436px] left-[719px]" },
        { color: "bg-[#69431f]", position: "top-0 left-0" },
        { color: "bg-[#56fafc]", position: "top-[457px] left-[18px]" },
        { color: "bg-[#46525e]", position: "top-[268px] left-[343px]" },
      ],
    },
    {
      id: 2,
      title: "IT Infrastructure",
      description:
        "Our expertise spans IT strategic planning, technology architecture, service-oriented architecture, service management, implementation, optimization, and long-term support—enabling organizations to maximize their technology investment.",
      bgColor: "bg-[#2a3551]",
      image: "/consultancyimage/two.png", // Placeholder for image84
      blurEffects: [
        { color: "bg-[#2d2324]", position: "top-[436px] left-[719px]" },
        { color: "bg-[#8f653d]", position: "top-0 left-0" },
        { color: "bg-[#9b56fc]", position: "top-[457px] left-[18px]" },
        { color: "bg-[#475e75]", position: "top-[268px] left-[343px]" },
      ],
    },
    {
      id: 3,
      title: "Business\nConsultancy",
      description:
        "We offer comprehensive consultancy services across business process optimization, operational excellence, change management, and strategic planning—delivering tailored solutions that drive sustainable growth and competitive advantage.",
      bgColor: "bg-[#152733]",
      image: "/consultancyimage/three.jpg", // Placeholder for image86
      blurEffects: [
        { color: "bg-[#23262d]", position: "top-[436px] left-[719px]" },
        { color: "bg-[#1f5269]", position: "top-0 left-0" },
        { color: "bg-[#0c5221]", position: "top-[457px] left-[18px]" },
        { color: "bg-[#46525e]", position: "top-[268px] left-[343px]" },
      ],
    },
    {
      id: 4,
      title: "Outsourcing",
      description:
        "We provide strategic IT and business process outsourcing solutions that enhance operational efficiency, reduce costs, and enable organizations to focus on core competencies—delivering measurable results through expert resource management.",
      bgColor: "bg-[#0f2d5d]",
      image: "/consultancyimage/four.png", // Placeholder for image85
      blurEffects: [
        { color: "bg-[#23272d]", position: "top-[436px] left-[719px]" },
        { color: "bg-[#3d748f]", position: "top-0 left-0" },
        { color: "bg-[#0a4796]", position: "top-[457px] left-[18px]" },
        { color: "bg-[#475e75]", position: "top-[268px] left-[343px]" },
      ],
    },
  ];
  const ServiceCardsMobileData = [
    {
      id: 1,
      title: "Cyber Security",
      description:
        "We provide end-to-end security services including ISO 27001 compliance, ISMS implementation, risk assessment, penetration testing, and vulnerability assessment—helping organizations strengthen their security posture and safeguard critical information assets.",
      bgColor: "bg-[#121621]",
      image: "/consultancyimage/mobile/CyberSecurityExpanded.png", // Placeholder for image83
      imagecollpased: "/consultancyimage/mobile/CyberSecurityDefault.png", // Placeholder for image83
      blurEffects: [
        { color: "bg-[#2d2324]", position: "top-[436px] left-[719px]" },
        { color: "bg-[#69431f]", position: "top-0 left-0" },
        { color: "bg-[#56fafc]", position: "top-[457px] left-[18px]" },
        { color: "bg-[#46525e]", position: "top-[268px] left-[343px]" },
      ],
    },
    {
      id: 2,
      title: "It Infrastructure",
      description:
        "Our expertise spans IT strategic planning, technology architecture, service-oriented architecture, service management, implementation, optimization, and long-term support—enabling organizations to maximize their technology investment.",
      bgColor: "bg-[#2a3551]",
      image: "/consultancyimage/mobile/ITInfrastructureExpanded.png", // Placeholder for image84
      imagecollpased: "/consultancyimage/mobile/ITInfrastructureDefault.png", // Placeholder for image83
      blurEffects: [
        { color: "bg-[#2d2324]", position: "top-[436px] left-[719px]" },
        { color: "bg-[#8f653d]", position: "top-0 left-0" },
        { color: "bg-[#9b56fc]", position: "top-[457px] left-[18px]" },
        { color: "bg-[#475e75]", position: "top-[268px] left-[343px]" },
      ],
    },
    {
      id: 3,
      title: "Business\nConsultancy",
      description:
        "We offer comprehensive consultancy services across business process optimization, operational excellence, change management, and strategic planning—delivering tailored solutions that drive sustainable growth and competitive advantage.",
      bgColor: "bg-[#152733]",
      image: "/consultancyimage/mobile/BusinessConsultancyExpanded.jpg", // Placeholder for image86
      imagecollpased: "/consultancyimage/mobile/BusinessConsultancyDefault.jpg", // Placeholder for image83
      blurEffects: [
        { color: "bg-[#23262d]", position: "top-[436px] left-[719px]" },
        { color: "bg-[#1f5269]", position: "top-0 left-0" },
        { color: "bg-[#0c5221]", position: "top-[457px] left-[18px]" },
        { color: "bg-[#46525e]", position: "top-[268px] left-[343px]" },
      ],
    },
    {
      id: 4,
      title: "Outsourcing",
      description:
        "We provide strategic IT and business process outsourcing solutions that enhance operational efficiency, reduce costs, and enable organizations to focus on core competencies—delivering measurable results through expert resource management.",
      bgColor: "bg-[#0f2d5d]",
      image: "/consultancyimage/mobile/OutsourcingExpanded.png", // Placeholder for image85
      imagecollpased: "/consultancyimage/mobile/OutsourcingDefault.png", // Placeholder for image83
      blurEffects: [
        { color: "bg-[#23272d]", position: "top-[436px] left-[719px]" },
        { color: "bg-[#3d748f]", position: "top-0 left-0" },
        { color: "bg-[#0a4796]", position: "top-[457px] left-[18px]" },
        { color: "bg-[#475e75]", position: "top-[268px] left-[343px]" },
      ],
    },
  ];
  const topRow = serviceCards.slice(0, 2);
  const bottomRow = serviceCards.slice(2, 4);
  const ServiceCard = ({ card }: { card: any }) => {
    return (
      <Card
        className={`group ${card.bgColor}  hover:w-[1800px] h-[293px] transition-all duration-500 rounded-[10px] overflow-hidden relative cursor-pointer`}
        style={{ minHeight: 0, maxWidth: "100%" }}
      >
        <CardContent className="p-0 h-full">
          {/* Blur effects */}
          <div className="relative w-[979px] h-[717px] mt-[-212px] mb-[-212px]">
            {card.blurEffects.map(
              (
                effect: { color: any; position: any },
                index: Key | null | undefined
              ) => (
                <div
                  key={index}
                  className={`${effect.color} absolute w-[260px] h-[260px] ${effect.position} rounded-[130px] blur-[40.12px] opacity-20`}
                />
              )
            )}
          </div>

          {/* Content */}
          <div className="flex flex-col w-[320px] group-hover:w-[400px] items-start gap-8 absolute top-8 left-8 transition-all duration-500">
            <div className="relative w-[260px] z-10 mt-[-1px] [font-family:'Gotham-Bold',Helvetica] font-bold text-white text-2xl tracking-[0] leading-[30px] whitespace-pre-line">
              {card.title}
            </div>
            <p className="relative w-full z-10 [font-family:'Gotham-Book',Helvetica] font-normal text-[#ffffffbf] text-base tracking-[0] leading-[22.4px] overflow-hidden group-hover:overflow-visible max-h-[66px] group-hover:max-h-none transition-all duration-500">
              {card.description}
            </p>
          </div>

          {/* Image */}
          <img
            className="absolute h-[293px] top-0 right-0 object-cover pointer-events-none select-none transition-all duration-500 group-hover:right-[-40px]"
            alt={`${card.title} illustration`}
            src={card.image}
          />
        </CardContent>
      </Card>
    );
  };
  const ServiceCardMobile = ({ card }: { card: any }) => {
    return (
      <div className="group relative">
        {/* Default background image (collapsed state) */}
        <div
          className="absolute inset-0 bg-cover bg-no-repeat transition-opacity duration-500 opacity-100 group-hover:opacity-0 rounded-[10px]"
          style={{ backgroundImage: `url(${card.imagecollpased})` }}
        ></div>
        {/* Hover background image (expanded state) */}
        <div
          className="absolute inset-0 bg-cover bg-no-repeat transition-opacity duration-500 opacity-0 group-hover:opacity-100 rounded-[10px]"
          style={{ backgroundImage: `url(${card.image})` }}
        ></div>
        <Card
          className={`h-[200px] group-hover:h-[450px] transition-all duration-500 rounded-[10px] overflow-hidden relative cursor-pointer bg-transparent`}
          style={{
            minHeight: 0,
            maxWidth: "100%",
          }}
        >
          <CardContent className="p-0 h-full">
            {/* Content */}
            <div
              className="flex flex-col  items-start gap-4  transition-all duration-500"
              style={{ padding: "1rem" }}
            >
              <div
                className="relative w-[260px] mt-[-1px] [font-family:'Gotham-Bold',Helvetica] font-bold text-white text-2xl tracking-[0] leading-[30px]"
                style={{ fontSize: "16px" }}
              >
                {card.title}
              </div>
              <p
                className="relative w-full [font-family:'Gotham-Book',Helvetica] font-normal text-[#ffffffbf] text-base tracking-[0] leading-[22.4px] overflow-hidden group-hover:overflow-visible max-h-[44px] group-hover:max-h-[300px] transition-all duration-500 line-clamp-2 group-hover:line-clamp-none"
                style={{ fontSize: "14px" }}
              >
                {card.description}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  };

  return (
    <div className="lg:mb-24 mb-16" id="consultancy-section">
      <section className="w-full max-w-[1440px] mx-auto sm:14 md:16  sm:px-8">
        <div className="max-w-[1440px] mx-auto 4 sm:8 md:12 lg:24">
          <div
            className="flex flex-col md:flex-row gap-8 md:gap-16"
            style={{ marginBottom: "60px" }}
          >
            {/* Left Content */}
            <div className="flex-1">
              <div className="flex flex-col items-start justify-center h-full">
                <h2 className="text-2xl md:text-[50px] font-bold text-black mb-6 md:mb-12 [font-family:'Gotham-Bold',Helvetica]">
                  Consultancy
                </h2>

                <p
                  className="text-base sm:text-lg text-[#7D7D7D] leading-relaxed md:leading-[30px] mb-6 md:mb-12 [font-family:'Gotham-Book'] md:text-left text-justify"
                 
                >
                  At DCF, our expertise in the ITIL framework and ITIL-compliant
                  systems allows us to deliver turnkey IT management solutions
                  aligned with global best practices. Leveraging the TOGAF
                  framework, we also provide infrastructure audits and readiness
                  assessments to help clients strengthen their IT maturity and
                  operational efficiency.
                </p>

                <div className="relative w-[180px] h-11">
                  <div className="flex border-2 border-[#991b1b] bg-white text-[#991b1b] w-[180px] h-11 items-center justify-center gap-2.5 px-[52px] py-3 relative rounded-[32px] border border-solid border-kpmg-com-prime">
                    <div
                      className="relative w-fit mt-[-2.00px] ml-[-3.00px] mr-[-3.00px] [font-family:'Gotham-Bold',Helvetica] font-bold text-kpmg-com-prime text-xl text-right tracking-[0] leading-[21.8px] whitespace-nowrap cursor-pointer"
                      onClick={() => {
                        const isMobile = window.innerWidth <= 768;
                        const targetId = isMobile
                          ? "consultancy-section-picture"
                          : "consultancy-section-picture-desk";

                        const element = document.getElementById(targetId);
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

            {/* Right Content */}
            <div className="flex-1 relative hidden md:block">
              <div className="relative h-[530px]">
                {/* Background shapes */}
                <div className="absolute left-[84px] top-0">
                  <img
                    src="/vector-13.svg"
                    alt="Background shape"
                    className="w-[400px] h-[500px]"
                  />
                </div>

                {/* Main image */}
                <div className="absolute left-[202px] top-[120px]">
                  <img
                    src="/mask-group.png"
                    alt="Consultancy illustration"
                    className="w-[300px] h-[250px] object-cover"
                  />
                </div>

                {/* Foreground shape */}
                <div className="absolute left-[361px] top-2">
                  <img
                    src="/vector-10.svg"
                    alt="Foreground shape"
                    className="w-[270px] h-[485px]"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Service Cards Grid */}
          {/* Hide on mobile (default), show on medium and up */}
          <div
            className="w-full max-w-[1440px] mx-auto hidden md:block"
            id="consultancy-section-picture-desk"
          >
            <div className="flex flex-col gap-3.5">
              {/* Top row */}
              <div className="flex gap-3.5 w-full">
                {topRow.map((card) => (
                  <ServiceCard key={card.id} card={card} />
                ))}
              </div>

              {/* Bottom row */}
              <div className="flex gap-3.5 w-full">
                {bottomRow.map((card) => (
                  <ServiceCard key={card.id} card={card} />
                ))}
              </div>
            </div>
          </div>
          {/* Mobile view */}
          <div
            className="w-full max-w-[1440px] mx-auto md:hidden"
            id="consultancy-section-picture"
          >
            <div className="grid grid-cols-1 gap-3.5">
              {ServiceCardsMobileData.map((card) => (
                <ServiceCardMobile key={card.id} card={card} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
