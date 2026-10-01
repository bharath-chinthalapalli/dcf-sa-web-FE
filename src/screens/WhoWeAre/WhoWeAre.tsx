import { AboutUsSection } from "./sections/AboutUsSection";
import { CoreValuesSection } from "./sections/CoreValuesSection/CoreValuesSection";
import { GrowthStrategySection } from "./sections/GrowthStrategySection";
import { OurStrategySection } from "./sections/OurStrategySection";
import { WhoWeAreSection } from "./sections/WhoWeAreSection";
import { Footer } from "../HomePage/sections/Footer/Footer";
import NavigationHeader from "../../components/ui/navigation";
import { CardContent } from "../../components/ui/card";

export const WhoWeAre = (): JSX.Element => {
  return (
    <>
      <NavigationHeader />
      <div
        className="bg-white flex flex-row justify-center w-full"
        data-model-id="1628:6201"
      >
        <div className="bg-white w-full max-w-[1440px] relative">
          <main className="flex flex-col md:px-0">
            <div className="px-[10px] md:px-0 md:text-left text-justify">
              <OurStrategySection />
              <GrowthStrategySection />
            </div>

            <div className="grid px-6  grid-cols-1 gap-y-6 md:grid-cols-2 gap-[4px] md:gap-6 w-full mb-[40px] md:mb-[100px]">

              {/* Mission Card */}
              <CardContent
                className="
      p-0
      w-full h-auto  /* Mobile: height auto for responsiveness */
      md:w-auto md:h-[322px]  /* Desktop: fixed height */
      flex-1 group relative overflow-hidden
      rounded-[17px] /* consistent rounded corners */
    "
              >
                <div className="relative w-full h-full min-h-[280px] md:min-h-0"> {/* min height on mobile */}
                  {/* Background image */}
                  <div
                    className="absolute w-full h-full md:inset-0 md:w-full md:h-full bg-cover md:bg-center rounded-[17px]"
                    style={{
                      backgroundImage: "url(/whoarewe/mission.jpg)",
                      backgroundPosition: "80% center",
                      width: "100%",
                    }}
                  />

                  {/* Gradient overlay */}
                  <div
                    className="absolute inset-0 rounded-[17px] opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none"
                    style={{
                      background: "#9B1C1C",
                      mixBlendMode: "hard-light",
                    }}
                  ></div>

                  {/* Content */}
                  <div className="relative h-full flex flex-col w-full">
                    <h1 className="text-[16px] md:text-4xl font-bold text-white ml-[10px] mt-[13px] md:ml-[60px] md:mt-[90px] leading-[30px] [font-family:'Gotham-Bold',Helvetica] z-10 px-4 md:px-0">
                      Mission
                    </h1>
                    <div
                      className="text-white ml-[10px] text-base md:ml-[60px] mt-[13px] md:mt-[28px] md:text-2xl text-start [font-family:'Gotham-Book',Helvetica] md:px-0 opacity-0 group-hover:opacity-100 px-4 text-[14px] md:text-[16px]"
                      style={{ paddingRight: "1rem" }}
                    >
                      To deliver innovative digital solutions that help businesses. <br /> Adapt, grow, and thrive in a rapidly evolving digital world.
                    </div>
                  </div>
                </div>
              </CardContent>

              {/* Vision Card */}
              <CardContent
                className="
      p-0
      w-full h-auto /* Mobile: auto height */
      md:w-auto md:h-[322px] /* Desktop: fixed height */
      flex-1 group relative overflow-hidden
      rounded-[17px]
    "
              >
                <div className="relative w-full h-full min-h-[280px] md:min-h-0">
                  {/* Background image */}
                  <div
                    className="absolute w-full h-full md:inset-0 md:w-full md:h-full bg-cover md:bg-center rounded-[17px]"
                    style={{
                      backgroundImage: "url(/whoarewe/vision.jpg)",
                      backgroundPosition: "80% center",
                      width: "100%",
                    }}
                  />

                  {/* Gradient overlay */}
                  <div
                    className="absolute inset-0 rounded-[17px] opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none"
                    style={{
                      background: "#9B1C1C",
                      mixBlendMode: "hard-light",
                    }}
                  ></div>

                  {/* Content */}
                  <div className="relative h-full flex flex-col">
                    <h1 className="text-[16px] md:text-4xl font-bold text-white ml-[10px] mt-[13px] md:ml-[60px] md:mt-[90px] leading-[30px] [font-family:'Gotham-Bold',Helvetica] z-10 px-4 md:px-0">
                      Vision
                    </h1>
                    <div className="text-white ml-[10px] text-base md:ml-[60px] mt-[13px] md:mt-[28px] md:text-2xl text-start [font-family:'Gotham-Book',Helvetica] md:px-0 opacity-0 group-hover:opacity-100 px-4 text-[14px] md:text-[16px]">
                      To be a leading provider of reliable and cutting-edge. <br /> Digital solutions across the MENA region and beyond.
                    </div>
                  </div>
                </div>
              </CardContent>
            </div>


            <div className="px-[32px] md:px-0">
              <AboutUsSection />

              <CoreValuesSection />

              <WhoWeAreSection />
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
};
