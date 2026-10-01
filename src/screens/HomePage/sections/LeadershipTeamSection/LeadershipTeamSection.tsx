import { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";

const teamMembers = [
  {
    name: "Carolyn Willms",
    title: "Global Accountability Officer",
    image: "/mask-group-3.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not...",
  },
  {
    name: "John Doe",
    title: "Chief Technology Officer",
    image: "/mask-group-4.png",
    description:
      "John is a seasoned CTO with 20+ years of experience leading technology teams and delivering innovative solutions for global clients.",
  },
  {
    name: "Jane Smith",
    title: "Head of Product",
    image: "/mask-group-5.png",
    description:
      "Jane brings a wealth of experience in product management and digital transformation, driving results across multiple industries.",
  },
];

export const LeadershipTeamSection = (): JSX.Element => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = teamMembers.length;

  const getIndex = (idx: number) => (idx + total) % total;

  const prevIndex = getIndex(currentIndex - 1);
  const nextIndex = getIndex(currentIndex + 1);

  const handlePrev = () => setCurrentIndex(prev => getIndex(prev - 1));
  const handleNext = () => setCurrentIndex(prev => getIndex(prev + 1));

  return (
    <div className="mb-[40px] lg:pb-32">
      <section className="w-full max-w-[1440px] mx-auto sm:14 md:16 px-4 sm:px-8">
        <div className="max-w-[1440px] mx-auto 4 sm:8 md:12 lg:24">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8 md:gap-16 mb-8 md:mb-16">
            {/* Section Title */}
            <h2 className="[font-family:'Gotham-Bold'] mb-4 md:mb-0 text-[24px] md:text-[50px]">
              Leadership Team
            </h2>

            {/* Quote */}
            <div className="max-w-full md:max-w-[610px] flex gap-4 md:gap-8" style={{ marginTop: "21px" }}>
              <div className="w-[32px] md:w-[49px] h-[24px] md:h-[37px] flex">
                <div className="w-[14px] md:w-[21px] h-[24px] md:h-[37px] bg-[url(/group.png)] bg-cover" />
                <div className="w-[14px] md:w-[21px] h-[24px] md:h-[37px] ml-[6px] bg-[url(/group-1.png)] bg-cover" />
              </div>
              <p className="text-base text-black leading-[30px]" style={{ fontSize: '18px' }}>
                Our team is led by seasoned digital consultants with deep industry expertise.
                Backed by a dynamic group of product managers, developers, designers, and strategists,
                we are united by a shared commitment to crafting impactful digital solutions that drive
                real business value.
              </p>
            </div>
          </div>

          {/* Team Member Carousel */}
          <div className="hidden md:flex items-center justify-between gap-4">
            {/* Previous Member */}
            <div className="w-[194px] h-[291px] relative">
              <img
                src={teamMembers[prevIndex].image}
                alt={`Previous team member: ${teamMembers[prevIndex].name}`}
                className="w-full h-full object-cover"
                style={{ filter: 'grayscale(100%)' }}
              />
              <div className="absolute left-0 top-0 w-2 h-full bg-[#1B1B1B]" />
            </div>

            {/* Current Member */}
            <div className="flex-1 flex gap-6">
              <div className="relative">
                <div className="w-[15px] h-[486px] absolute left-0 top-0 bg-[#9B1C1C]" />
                <img
                  src={teamMembers[currentIndex].image}
                  alt={teamMembers[currentIndex].name}
                  className="w-[333px] h-[487px] object-cover ml-[6px]"
                />
              </div>

              <div className="flex flex-col justify-end max-w-[340px]">
                <p className="text-base text-black leading-[26.7px] mb-6 [font-family:'Gotham-Book']">
                  {teamMembers[currentIndex].description}
                </p>

                <h3 className="text-[38.8px] font-bold text-black leading-normal mb-1 [font-family:'Gotham-Bold']">
                  {teamMembers[currentIndex].name}
                </h3>
                <p className="text-[13.6px] text-black leading-normal [font-family:'Gotham-Book']">
                  {teamMembers[currentIndex].title}
                </p>
              </div>
            </div>

            {/* Next Member */}
            <div className="w-[194px] h-[291px] relative">
              <img
                src={teamMembers[nextIndex].image}
                alt={`Next team member: ${teamMembers[nextIndex].name}`}
                className="w-full h-full object-cover"
                style={{ filter: 'grayscale(100%)' }}
              />
              <div className="absolute left-0 top-0 w-2 h-full bg-[#1B1B1B]" />
            </div>
          </div>

          <div className="md:hidden items-center justify-between gap-4">
            {/* Previous Member */}
            <div className="w-[194px] h-[291px] relative">
              <img
                src={teamMembers[prevIndex].image}
                alt={`Previous team member: ${teamMembers[prevIndex].name}`}
                className="w-full h-full object-cover"
                style={{ filter: 'grayscale(100%)' }}
              />
              <div className="absolute left-0 top-0 w-2 h-full bg-[#1B1B1B]" />
            </div>

            {/* Current Member */}
            <div className="flex-1 flex gap-6">
              <div className="relative">
                <div className="w-[15px] h-[486px] absolute left-0 top-0 bg-[#9B1C1C]" />
                <img
                  src={teamMembers[currentIndex].image}
                  alt={teamMembers[currentIndex].name}
                  className="w-[333px] h-[487px] object-cover ml-[6px]"
                />
              </div>

              <div className="flex flex-col justify-end max-w-[340px]">
                <p className="text-base text-black leading-[26.7px] mb-6 [font-family:'Gotham-Book']">
                  {teamMembers[currentIndex].description}
                </p>

                <h3 className="text-[38.8px] font-bold text-black leading-normal mb-1 [font-family:'Gotham-Bold']">
                  {teamMembers[currentIndex].name}
                </h3>
                <p className="text-[13.6px] text-black leading-normal [font-family:'Gotham-Book']">
                  {teamMembers[currentIndex].title}
                </p>
              </div>
            </div>

            {/* Next Member */}
            <div className="w-[194px] h-[291px] relative">
              <img
                src={teamMembers[nextIndex].image}
                alt={`Next team member: ${teamMembers[nextIndex].name}`}
                className="w-full h-full object-cover"
                style={{ filter: 'grayscale(100%)' }}
              />
              <div className="absolute left-0 top-0 w-2 h-full bg-[#1B1B1B]" />
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-between mt-8">
            <div
              className="flex w-[140px] h-12 items-center justify-center gap-4 px-[23.26px] py-[15.5px] bg-[#E1E1E1] rounded-[121px] cursor-pointer"
              onClick={handlePrev}
            >
              <ArrowLeftIcon
                className="!relative !w-[15.5px] !h-[15.5px]"
                color="black"
              />
              <div className="relative w-fit mt-[-2.47px] mb-[-0.53px] [font-family:'Manrope',Helvetica] font-semibold text-black text-base tracking-[0] leading-5 whitespace-nowrap">
                Previous
              </div>

            </div>

            <div
              className="flex w-[140px] h-12 items-center justify-center gap-4 px-[23.26px] py-[15.5px] bg-[#9b1c1c] rounded-[121px] cursor-pointer"
              onClick={handleNext}
            >
              <div className="relative w-fit mt-[-2.47px] mb-[-0.53px] [font-family:'Manrope',Helvetica] font-semibold text-white text-base tracking-[0] leading-5 whitespace-nowrap">
                Next
              </div>
              <ArrowRightIcon
                className="!relative !w-[15.5px] !h-[15.5px]"
                color="white"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};