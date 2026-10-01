import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const ClientsAndCustomersSection = (): JSX.Element => {
  // Function to handle text display based on screen size
  const formatText = (text: string) => {
    // For mobile, keep the line breaks
    const mobileText = text;
    
    // For web, replace line breaks with spaces
    const webText = text.replace(/\n/g, ' ');
    
    return { mobileText, webText };
  };
  
  // Data for the feature cards
  const featureCards = [
    {
      id: 1,
      icon: "/whatwedo/icons/vector-9.svg",
      iconAlt: "Vector",
      iconWidth: "71px",
      iconHeight: "68px",
      text: "Robust, Agile Operating\nModel",
    },
    {
      id: 2,
      icon: "/whatwedo/icons/vector-10.svg",
      iconAlt: "Vector",
      iconWidth: "62px",
      iconHeight: "68px",
      text: "Recurring Revenue With\nLow Churn",
    },
    {
      id: 3,
      icon: "/whatwedo/icons/vector-13.svg",
      iconAlt: "Vector",
      iconWidth: "61px",
      iconHeight: "68px",
      text: "Experienced Leadership\nAnd Technical Teams",
    },
    {
      id: 4,
      icon: "/whatwedo/icons/group-5@2x.png",
      iconAlt: "Group",
      iconWidth: "65.7px",
      iconHeight: "68px",
      text: "High Potential For\nScalable, Regional Growth",
    },
  ];

  return (
    <div className="w-full max-w-[1440px] py-6 sm:py-10 sm:px-0 mb-[80px] sm:mb-[100px]">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 justify-items-center">
        {featureCards.map((card) => (
          <Card
            key={card.id}
            className="w-full max-w-[370px] h-[130px] sm:h-40 bg-[#ececec] rounded-lg border-none hover:bg-gray-200 flex"
          >
            <CardContent className="p-3 sm:p-5 flex flex-col items-start gap-2 sm:gap-4 w-full h-full">
              <img
                className="w-auto h-10 sm:h-[68px]"
                style={{ width: 'auto', maxWidth: card.iconWidth }}
                alt={card.iconAlt}
                src={card.icon}
              />
              <div className="w-full [font-family:'Gotham-Book'] font-normal text-black text-sm sm:text-base tracking-[0] leading-4 sm:leading-3" style={{ lineHeight: '1.3rem' }}>
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
  );
};
