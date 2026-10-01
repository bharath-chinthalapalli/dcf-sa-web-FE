import { Card, CardContent } from "../../../../components/ui/card";

// Define the values data for mapping
const valuesData = [
  {
    title: "Customer-Centricity",
    iconSrc: "/corevalues/1.png",
    iconHoverSrc: "/corevalues/1-1.png",
    iconAlt: "Group",
    description: "Your success is our priority—we're dedicated to meeting your unique business needs.",
  },
  {
    title: "Integrity",
    iconSrc: "/corevalues/2.png",
    iconHoverSrc: "/corevalues/2-1.png",
    iconAlt: "Gavel",
    description: "Transparent, ethical practices in everything we do."
  },
  {
    title: "Excellence",
    iconSrc: "/corevalues/3.png",
    iconHoverSrc: "/corevalues/3-1.png",
    iconAlt: "Star shine",
    description: "Consistently delivering high-quality results that exceed expectations."
  },
  {
    title: "Agility",
    iconSrc: "/corevalues/4.png",
    iconHoverSrc: "/corevalues/4-1.png",
    iconAlt: "Group",
    description: "Adapting swiftly to change with flexible, tailored solutions."
  },
];

export const AboutUsSection = (): JSX.Element => {
  return (
    <>

      <section className="w-full sm:px-8">
        <h2 className="[font-family:'Gotham-Bold',Helvetica] font-bold text-black text-[24px] md:text-[50px] tracking-[0] leading-[1.1] whitespace-nowrap">
          Core Values
        </h2>
      </section>
      <section className="w-full mt-[35px] relative mb-[40px] md:mb-[100px] sm:px-8">
        <section className="grid grid-cols-1 md:grid-cols-2">
          {/* Left side image */}
          <div className="hidden md:block">
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <img
                className="h-[500px] top-px left-[34px] absolute"
                alt="Vector graphic"
                src="/whoarewe/vector-14.png"
              />
              <img
                className="w-full h-72 object-cover absolute left-[176px] top-[107px]"
                alt="Mask group"
                src="/whoarewe/img/mask-group-1@2x.png"
                style={{
                  width: 273,
                  height: 262,
                }}
              />
              <img
                className="w-[274px] h-[500px] top-px left-[85px] relative"
                alt="Vector graphic"
                src="/whoarewe/vector-15.png"
              />
            </div>

          </div>

          {/* Right side values cards */}
          <div className="grid grid-cols-1 gap-6  md:flex md:flex-col" style={{ gap: '1.5rem' }}>
            {valuesData.map((value, index) => (
              <Card
                key={index}
                className="rounded-lg shadow-sm transition-all duration-300 group bg-white hover:bg-[#A32422]"
              >
                <CardContent className="p-0">
                  <div className="flex items-center p-4">
                    <div className="w-16 h-16  rounded flex items-center justify-center mr-5">
                      {(
                        <div className="relative w-[52px] h-[52px] flex items-center justify-center">
                          <img
                            className="w-[52px] h-[52px] absolute group-hover:opacity-0 transition-opacity duration-300"
                            alt={value.iconAlt}
                            src={value.iconSrc}
                          />
                          <img
                            className="w-[52px] h-[52px] absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            alt={value.iconAlt}
                            src={value.iconHoverSrc}
                          />
                        </div>
                      )}
                    </div>
                    <div className="flex flex-col">
                      <div
                        className="[font-family:'Gotham-Book',Helvetica] font-normal text-black text-xl leading-[30px] transition-colors duration-300 group-hover:text-white"
                      >
                        {value.title}
                      </div>
                      <div
                        className="opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-40 group-hover:mt-2 text-base leading-snug text-white transition-all duration-300 overflow-hidden"
                        style={{ fontFamily: 'Gotham-Book, Helvetica' }}
                      >
                        {value.description}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </section>
    </>

  );
};
