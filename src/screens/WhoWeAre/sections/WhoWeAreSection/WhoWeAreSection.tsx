import { Card, CardContent } from "../../../../components/ui/card";

export const WhoWeAreSection = (): JSX.Element => {
  // Data for the feature cards
  const featureCards = [
    {
      id: 1,
      icon: "/whoarewe/imageone.png",
      iconAlt: "Vector",
      iconWidth: "64px",
      iconHeight: "64px",
      text: "Your success is our priority—we're dedicated to meeting your unique business needs.",
    },
    {
      id: 2,
      icon: "/whoarewe/imagetwo.png",
      iconAlt: "Vector",
      iconWidth: "64px",
      iconHeight: "64px",
      text: "Transparent, ethical practices in everything we do.",
    },
    {
      id: 3,
      icon: "/whoarewe/imagethree.png",
      iconAlt: "Vector",
      iconWidth: "64px",
      iconHeight: "64px",
      text: "Consistently delivering high-quality results that exceed expectations.",
    },
    {
      id: 4,
      icon: "/whoarewe/imagefour.png",
      iconAlt: "Group",
      iconWidth: "64px",
      iconHeight: "64px",
      text: "Adapting swiftly to change with flexible, tailored solutions.",
    },
  ];
  const formatText = (text: string) => {
    // For mobile, keep the line breaks
    const mobileText = text;

    // For web, replace line breaks with spaces
    const webText = text.replace(/\n/g, ' ');

    return { mobileText, webText };
  };
  return (
    <section className="max-w-[1440px] sm:px-8">
      <h2 className="text-[24px] md:text-[50px] font-bold leading-tight md:leading-[54px] text-black [font-family:'Gotham-Bold',Helvetica]">
        Growth Strategy
      </h2>
      <div className="w-full max-w-[1440px] py-6 sm:py-10 sm:px-0 mb-[80px] sm:mb-[100px]">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 justify-items-center">
          {featureCards.map((card) => (
            <Card
              key={card.id}
              className="w-full max-w-[370px] h-[200px] sm:h-[180px] bg-[#ececec] rounded-lg border-none hover:bg-gray-200 flex"
            >
              <CardContent className="p-3 sm:p-7 flex flex-col items-start gap-4 sm:gap-4 w-full h-full">
                <img
                  className="w-auto h-10 sm:h-[68px]"
                  style={{ width: 'auto', maxWidth: card.iconWidth }}
                  alt={card.iconAlt}
                  src={card.icon}
                />
                <div className="w-full [font-family:'Gotham-Book'] font-normal text-[10px] sm:text-[11px] text-black tracking-[0] leading-4 sm:leading-3" style={{ lineHeight: '1.2rem' }}>
                  {/* Mobile text with line breaks */}
                  <span className="block sm:hidden">
                    {card.text}
                  </span>
                  {/* Web text without line breaks */}
                  <span className="hidden sm:block">
                    {formatText(card.text).webText}
                  </span>
                </div>

              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>

  );
};
