// Component for displaying value propositions
import { Card, CardContent } from "../../../../components/ui/card";

// Define the value proposition data for mapping
const valuePropositions = [
  {
    title: "Customer-Focused",
    description:"Your needs are our priority, and we're committed to providing a top-tier customer experience.",
    iconSrc: "/whatwedo/uniquevalueproposition/one.png",
    iconAlt: "Vector",
  },
  {
    title: "Passionate Excellence",
    description:"We are dedicated to perfecting our craft and delivering outstanding results.",
    iconSrc: "/whatwedo/uniquevalueproposition/two.png",
    iconAlt: "Group",
  },
  {
    title: "Proven Success",
    description:"With a strong track record, we've built a reputation for reliability and achievement.",
    iconSrc: "/whatwedo/uniquevalueproposition/three.png",
    iconAlt: "Vector",
  },
  {
    title: "Expertise",
    description:"Our technical know-how has driven success for clients across various industries.",
    iconSrc: "/whatwedo/uniquevalueproposition/four.png",
    iconAlt: "Vector",
    complexIcon: true,
  },
  {
    title: "Future-Ready Solutions:",
    description: "We ensure our services are adaptable and future-proof.",
    iconSrc: "/whatwedo/uniquevalueproposition/five.png",
    iconAlt: "Vector",
  },
  {
    title: "Innovative and Driven",
    description:"We are relentless in our pursuit of innovation and excellence.",
    iconSrc: "/whatwedo/uniquevalueproposition/six.png",
    iconAlt: "Vector",
  },
];

export const UniqueValuePropositionSection = (): JSX.Element => {
  return (
    <section className="w-full max-w-[1162px] mx-auto  sm:px-0">
      <h2 className="[font-family:'Gotham-Bold',Helvetica] font-bold text-black text-2xl xs:text-3xl sm:text-4xl md:text-6xl mb-6 sm:mb-[80px]">
        Clients and Customers
      </h2>

      <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-5 sm:gap-[40px]">
        {valuePropositions.map((prop, index) => (
          <Card key={index} className="border-none shadow-none h-full">
            <CardContent className="p-0">
              <img
                className="w-auto h-8 xs:h-9 sm:h-[50px] mb-2 xs:mb-3 sm:mb-4"
                alt={prop.iconAlt}
                src={prop.iconSrc}
              />

              <div className="max-w-[370px] flex flex-col">
                <span className="[font-family:'Gotham-Book'] font-medium text-[#9b1c1c] text-xs xs:text-sm sm:text-base leading-[18px] xs:leading-[22.4px]">
                  {prop.title}
                </span>
                <span className="[font-family:'Gotham-Book'] text-[#202225cc] text-[10px] xs:text-xs sm:text-base leading-[16px] xs:leading-[22px] sm:leading-[28.8px]">
                  {prop.description}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
