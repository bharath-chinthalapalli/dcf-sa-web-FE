import { ConsultancySection } from "./sections/ConsultancySection";
import { HeroSection } from "./sections/HeroSection";
import { Footer } from "./sections/Footer/Footer";
import { LeadershipTeamSection } from "./sections/LeadershipTeamSection";
import { OurServicesSection } from "./sections/OurServicesSection";
import { TechnologyExpertiseSection } from "./sections/TechnologyExpertiseSection";
import { IndustriesWeServeSection } from "./sections/IndustriesWeServeSection/IndustriesWeServeSection";
import { TestimonialSection } from "./sections/TestimonialSection";
import { NavigationHeader } from "../../components/ui/navigation";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { AboutSection } from "./sections/AboutSection/AboutSection";
// import { AboutSection2 } from "./sections/AboutSection/AboutSection2";

export const HomePage = (): JSX.Element => {
  const location = useLocation();

  // Effect to handle scrolling to consultancy section when navigating from other pages
  useEffect(() => {
    // Check if we should scroll to consultancy section based on location state
    if (location.state && location.state.scrollToConsultancy) {
      setTimeout(() => {
        // Determine which section to scroll to based on screen size
        const isMobile = window.innerWidth < 768; // md breakpoint in Tailwind is 768px
        const sectionId = isMobile
          ? "mobile-consultancy-section"
          : "consultancy-section";
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 100); // Small delay to ensure the component is fully rendered
    }
  }, [location]);

  return (
    <div className="bg-white flex flex-row justify-center w-full [font-family:'Gotham-Book']">
      <div className="bg-white overflow-hidden w-full relative">
        {/* Header with Navigation */}

        <NavigationHeader />
        {/* Main Content Sections */}
        <main className="w-full px-[32px] md:px-0">
          {/* Hero Section */}

          <HeroSection />

          {/* About Section */}
          {/* <AboutSection /> */}

          {/* About Section */}
          <AboutSection />
          {/* <AboutSection /> */}

          {/* Our Services Section */}

          <OurServicesSection />

          {/* Consultancy Section */}

          <ConsultancySection />

          {/* Leadership Team Section */}

          {/* <LeadershipTeamSection /> */}

          {/* Technology Expertise Section */}

          <IndustriesWeServeSection />

          {/* Testimonial Section */}
          <TestimonialSection />

          <TechnologyExpertiseSection />

          {/* Industries We Serve Section */}
        </main>
        <Footer />
      </div>
    </div>
  );
};
