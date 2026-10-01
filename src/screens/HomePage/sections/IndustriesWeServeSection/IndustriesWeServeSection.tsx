import { Card, CardContent } from "../../../../components/ui/card";

// Define industry data for mapping
const industries = [
  {
    name: "Healthcare",
    icon: "/industries/icons/health-and-safety@2x.png",
  },
  {
    name: "E-Commerce",
    icon: "/industries/icons/shopping-cart@2x.png",
  },
  {
    name: "Education",
    icon: "/industries/icons/school@2x.png",
  },
  {
    name: "Finance",
    icon: "/industries/icons/finance@2x.png",
  },
  {
    name: "Government",
    icon: "/industries/icons/govt@2x.png",
  },
  {
    name: "Entertainment & Media",
    icon: "/industries/icons/animated-images.svg",
  },
];

export const IndustriesWeServeSection = (): JSX.Element => {
  return (
    <div className="lg:mb-24 mb-16">
      <section className="w-full max-w-[1440px] mx-auto sm:14 md:16 px-4 sm:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-stretch gap-8">
          <div className="md:w-1/3 w-full flex flex-col justify-center items-start md:mb-0">
            <h2 className="text-[24px] md:text-[50px] font-bold text-left leading-tight [font-family:'Gotham-Bold']">
              Industries <br className="hidden sm:block" />
              We <br className="hidden sm:block" />
              Serve
            </h2>
          </div>

          <div className="md:w-2/3 w-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <Card
                key={index}
                className="bg-gray-100 hover:bg-gray-200 transition-colors duration-300 rounded-xl shadow-sm border-0"
              >
                <CardContent className="flex flex-col items-center justify-center py-8 px-4 max-h-[158px]">
                  <img
                    src={industry.icon}
                    alt={industry.name}
                    className="w-10 h-10 mb-4 object-contain"
                    style={{ filter: "grayscale(100%) brightness(0)" }}
                  />
                  <h3 className="font-normal text-center leading-tight [font-family:'Gotham-Book'] text-[10px] md:text-[20px]">
                    {industry.name}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
