import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import { Card, CardContent } from "../../../../components/ui/card";

export const CoreValuesSection = (): JSX.Element => {
  const serviceCards = [
    {
      id: 1,
      title: "Innovation and Continuous Improvement",
      description: "We foster a culture of innovation, consistently integrating the latest technologies and best practices into our service offerings. This ensures that our clients receive forward-thinking, efficient, and competitive solutions that future-proof their operations.",
      image: "/corevalues/one.png",
      isService: true,
      row: 1,
    },
    {
      id: 2,
      title: "Operational Excellence and Technical Expertise",
      description:"Our team of expert engineers is skilled in complex system integration and network infrastructure, enabling us to provide end-to-end services with precision. We maintain high standards of quality and reliability in every project, guided by best-in-class methodologies.",
      image: "/corevalues/two.jpg",
      isService: true,
      row: 1,
    },
    {
      id: 3,
      title: "Agility and Adaptability",
      description: "In an ever-evolving digital environment, we remain agile—adapting quickly to technological advances and market shifts. This flexibility allows us to respond swiftly to client demands and industry changes with customized, scalable solutions.",
      image: "/corevalues/three.png",
      isService: true,
      row: 1,
    },
    {
      id: 4,
      title: "Integrity and Ethical Practice",
      description:"Transparency and ethical conduct are fundamental to our operations. We build trust through honest communication, responsible service delivery, and unwavering accountability.",
      image: "/corevalues/four.jpg",
      isService: true,
      row: 2,
    },
    {
      id: 5,
      title: "Regional Leadership and Expansion",
      description: "With a strong presence in Saudi Arabia, we aim to expand our footprint across the MENA region and beyond. Our vision drives us to become a leading force in digital transformation by offering cutting-edge solutions that redefine business efficiency.",
      image: "/corevalues/five.jpg",
      isService: true,
      row: 2,
    },
    {
      id: 6,
      title: "Client-Centric Service Delivery and Customer Experience",
      description:"Customer service is the foundation of our business. We deliver exceptional ICT support, enabling clients to focus on their core goals. By understanding their needs, we provide tailored solutions aligned with business objectives, backed by proactive engagement and strict SLA compliance.",
      image: "/corevalues/six.jpg",
      isService: true,
      row: 2,
    },
  ];
  return (
    <section className="max-w-[1440px] mb-[40px] md:mb-[100px] sm:px-8" >
      <div className="">
        <h2 className="text font-bold leading-[54px] text-black [font-family:'Gotham-Bold'] mb-6 text-[24px] md:text-[50px]">
          Our Strategy
        </h2>

        <p className="text-base font-normal text-black leading-[22.4px] [font-family:'Gotham-Book'] md:text-left text-justify" style={{ fontSize: 16 }}>
          At digital compatibility, our strategy is driven by a commitment to
          delivering exceptional information and communication technology (ICT)
          solutions that empower businesses to succeed in a dynamic digital
          landscape. Our strategic approach is built on the following pillars:
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3" style={{ marginTop: '30px', gap: "2rem", justifyItems: 'center' }}>
        {serviceCards.map((card) => (
          <Card
            key={card.id}
            className="relative h-[548px] w-full sm:w-[342px] md:w-full rounded-[17px] overflow-hidden border-none group"
          >
            {/* Card background image */}
            <img
              src={card.image}
              alt={card.title}
              className="absolute inset-0 w-full h-full object-cover rounded-[17px]"
                style={card.id === 6 ? { objectPosition: "100% center" } : undefined}
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
            <CardContent className="relative h-full flex flex-col  p-6 z-10">
              {/* Title - always visible */}
              {card.isService && (
                <h4 className="[font-family:'Gotham-Bold',Helvetica] text-xl leading-5 text-white whitespace-pre-line" style={{ lineHeight: '24px', marginBottom: "15px" }}>
                  {card.title}
                </h4>
              )}

              {/* Description - only visible on hover */}

              {/* {!card.isService && (
                <p className="[font-family:'Gotham-Book',Helvetica] font-normal text-white text-2xl tracking-[0px] leading-[33.6px] group-hover:hidden" style={{ fontSize: "44px", lineHeight: "120%", paddingTop: "10px" }}>
                  {card.serviceDescription}
                </p>
              )} */}

              <div className="mt-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="[font-family:'Gotham-Book',Helvetica] text-lg leading-[30px] text-white group-hover:block md:text-left text-justify">
                  {card.description}
                </p>
              </div>
              {/* Arrow button - always visible */}
              <div className="self-end mt-auto">
                <button className="w-[33px] h-[33px] rounded-full border-[0.42px] border-white bg-transparent p-0 flex items-center justify-center" style={{ cursor: 'default' }}>
                  {/* Right arrow by default */}
                  <ArrowRightIcon className="h-[13px] w-[13px] text-white block group-hover:hidden" />
                  {/* Left arrow on hover */}
                  <ArrowLeftIcon className="h-[13px] w-[13px] text-white hidden group-hover:block" />
                </button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>

  );
};
