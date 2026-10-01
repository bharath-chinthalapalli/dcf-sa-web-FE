import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import { Card, CardContent } from "../../../../components/ui/card";
import { useNavigate } from "react-router-dom";

// Define service card data for mapping
const serviceCards = [
  {
    id: 1,
    title: "Outsourcing Service\nConsultancy",
    description:
      "Access to top-tier expertise, ensuring operational efficiency. Also, takes care of the work force requirements of its clients by providing resident engineers and professionals who are experts in the required field.",
    image: "/temp/one.webp",
    isService: true,
    row: 1,
    serviceDescription: "",
  },
  {
    id: 2,
    title: "Case Study 1",
    description:
      "In the highly advanced world of today, a problem-free operation and a good reputation of your organization depend on the digital security of the organization. That's why digital compatibility provides a wide range of security services customized for securing your information and shielding your business from cybersecurity attacks.",
    image: "/mask-group-6.png",
    isService: false,
    row: 1,
    serviceDescription: "Building Scalable Platform With IT Security.",
  },
  {
    id: 3,
    title: "Procurement\nServices",
    description:
      "DCF relies on a strong supplier base which enables it to  provide procurement services from a wide range of OEM and service providers, ensuring  customer have a very friendly yet best fit for his needs, that includes: Hardware (HP, Dell, Cisco) Software (MS,EMC, Whatsup)",
    image: "/temp/two.png",
    isService: true,
    row: 1,
    serviceDescription: "",
  },
  {
    id: 4,
    title: "Case Study 2",
    description:
      "The modern business environment can be difficult to navigate. The dedicated consultants of digital compatibility offer crucial assistance and support which enable you to identify prospects and maximize your business performance.",
    image: "/mask-group-9.png",
    isService: false,
    row: 2,
    serviceDescription:
      "Unlock Untapped Potential With Digital Compatibility Consulting Services.",
  },
  {
    id: 5,
    title: "SW\nDevelopment",
    description:
      "Custom-built solutions tailored to meet your business needs. Such as licensing and implementation: we license and implement well-known software for all purposes and needs such as (CRM, ERP, HRM, SAP, DMS) from tier one vendors like (Microsoft, Oracle, VMWare, EMC, Cisco) at competitive cost, installed and implemented by our certified engineers.",
    image: "/temp/three.png",
    isService: true,
    row: 2,
    serviceDescription: "",
  },
  {
    id: 6,
    title: "Case Study 3",
    description:
      "In every user based industry, a premium user experience is important. Digital compatibility's skilled engineers build innovative software applications with intuitive interfaces and user-centric design principles for you",
    image: "/mask-group-10.png",
    isService: false,
    row: 2,
    serviceDescription:
      "Craft Advanced Software With Digital Compatibility Software Engineering Expertise.",
  },
];

export const OurServicesSection = (): JSX.Element => {
  const navigate = useNavigate();

  const handleViewMore = (id: number) => {
    if (id === 2) {
      navigate(`/casestudy/caseStudyItContent`);
    } else if (id === 4) {
      navigate(`/casestudy/caseStudyItContent2`);
    } else if (id === 6) {
      navigate(`/casestudy/caseStudyItContent1`);
    }
  };

  return (
    <div className="lg:mb-24 mb-16">
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
                Our Services
              </h2>
              <h3 className="font-bold [font-family:'Gotham-Bold',Helvetica] text-xs sm:text-2xl md:text-[24px] leading-snug md:leading-[30px] text-[#7d7d7d]">
                Client-centric Service Delivery
              </h3>
            </div>

            <div className="max-w-[990px]">
              <p className="[font-family:'Gotham-Book'] md:text-lg leading-[30px] text-[#7d7d7d] md:text-left text-justify">
                As a leading ICT service provider, we are committed to truly
                understanding our client's business goals and delivering
                solutions that drive value. Our leadership is built on proactive
                client engagement, unwavering sla adherence, and a culture of
                service excellence. We don't just support our clients—we empower
                them to focus on growth, while we take ownership of the
                complexities behind their ICT operations.
              </p>

              <div className="flex md:justify-center mt-6 md:mt-8">
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

        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
          id="ourservice-section"
          style={{ justifyItems: "center" }}
        >
          {serviceCards.map((card) => (
            <Card
              key={card.id}
              className="relative lg:h-[548px] h-auto w-full sm:w-[342px] md:w-full rounded-[17px] overflow-hidden border-none group"
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
                style={{ background: "#9B1C1C", mixBlendMode: "hard-light" }}
              ></div>

              {/* Gradient for case studies */}
              {!card.isService && (
                <div className="absolute inset-0 bg-[#eaeaea] rounded-[17px] opacity-40 z-10" />
              )}

              {/* Card content container */}
              <CardContent className="relative h-full flex flex-col  p-6 z-10">
                {/* Title - always visible */}
                {card.isService && (
                  <h4
                    className="[font-family:'Gotham-Bold',Helvetica] text-xl leading-5 text-white whitespace-pre-line"
                    style={{ lineHeight: "24px", marginBottom: "15px" }}
                  >
                    {card.title}
                  </h4>
                )}

                {/* Description - only visible on hover */}

                {!card.isService && (
                  <p
                    className="[font-family:'Gotham-Book',Helvetica] font-normal text-white tracking-[0px] leading-[33.6px] group-hover:hidden"
                    style={{
                      fontSize: "30px",
                      lineHeight: "120%",
                      paddingTop: "10px",
                    }}
                  >
                    {card.serviceDescription}
                  </p>
                )}

                <div className="mt-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="[font-family:'Gotham-Book',Helvetica] text-lg leading-[30px] text-white group-hover:block md:text-left text-justify">
                    {card.description}
                  </p>
                </div>
                {/* Arrow button - always visible */}
                <div className="self-end mt-auto">
                  <button
                    className="w-[33px] h-[33px] rounded-full border-[0.42px] border-white bg-transparent p-0 flex items-center justify-center"
                    style={{ cursor: "default" }}
                  >
                    {/* Right arrow by default */}
                    <ArrowRightIcon className="h-[13px] w-[13px] text-white block group-hover:hidden" />
                    {/* Left arrow on hover */}
                    {/* {card.isService ? (
                      <ArrowLeftIcon className="h-[13px] w-[13px] text-white hidden group-hover:block" />
                    ) : (
                      <ArrowLeftIcon className="h-[13px] w-[13px] text-white hidden group-hover:block" />
                    )} */}

                    <ArrowLeftIcon className="h-[13px] w-[13px] text-white hidden group-hover:block" />
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};
