import React, { useState, useEffect } from "react";

interface TestimonialProps {
  quote: string;
  name: string;
  title: string;
  image: string;
}

const Testimonial: React.FC<TestimonialProps> = ({
  quote,
  name,
  title,
  image,
}) => {
  return (
    <div
      className="bg-white p-6 rounded-lg shadow-sm"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        minHeight: "387px",
      }}
    >
      <p className="text-gray-700 mb-4">{quote}</p>
      <div className="flex items-center">
        <img
          src={image}
          alt={name}
          className="w-12 h-12 rounded-full mr-4"
          style={{ marginBottom: "3px" }}
        />
        <div>
          <h4 className="font-medium text-gray-900">{name}</h4>
          <p className="text-gray-600 text-sm">{title}</p>
        </div>
      </div>
    </div>
  );
};

export const TestimonialSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );
  const [isAnimating, setIsAnimating] = useState(false);

  // Add event listener for window resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);
  const testimonials = [
    {
      quote:
        "Implementing Froth TestOps was a turning point for the testing process in our company. It provided us with the needed structure and governance which were missing before as we were expanding our business. All the necessary testing plans, defect management, and so much more... are covered very excellently during the entire application lifecycle. Thanks to Froth TestOps, our testers have pulled together and become much more efficient and coordinated.",
      name: "Abdul Hakeem",
      title: "Senior Test Manager",
      image: "/testimonials/one.png",
    },
    {
      quote:
        "Thank you DCF for your Froth Desk. You are the best! I have no words about how grateful i am. The automation of our help-desk operations has been dramatically improved by its features and the ease of its interface. From now on, i consider Froth Desk to be a must-have tool for my operation and customer service team.",
      name: "Umar",
      title: "Project Coordinator",
      image: "/testimonials/two.png",
    },
    {
      quote:
        "Generally, i don't comment, but this time i did because i loved DCF! This platform's interface is highly customizable and provided my company with excellent support throughout the implementation process.",
      name: "Aaliyah",
      title: "Head of Marketing",
      image: "/testimonials/three.png",
    },
    {
      quote:
        "We were so so so... impressed with the work of the infrastructure team at DCF. They helped us move our systems to the cloud effortlessly, with no downtime or disruption. Their team was very professional. Thank you DCF!",
      name: "Zayna",
      title: "Infrastructure Setup and Expertise",
      image: "/testimonials/four.png",
    },
    {
      quote:
        "Froth CRM was the real game changer for us. It changes the way we lead and deal our tracking. Due to this, we get the accurate forecasting, manage the sales funnel, and at the same time enjoy all the customer interactions. Also, thanks to the reminders and notifications our sales team can maintain their work plan smoothly. Truly impressed!",
      name: "Usman",
      title: "Lead Developer",
      image: "/testimonials/five.png",
    },
    {
      quote:
        "Thank you so much DCF. They have provided our management team with skilled technical resources for several projects under very tight deadlines. They took the time to understand our requirements and identified resources that best matched our needs.",
      name: "Imran",
      title: "Technical Architect",
      image: "/testimonials/six.png",
    },
  ];

  // Handle navigation with animation
  const goToNext = () => {
    if (isAnimating) return;

    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      setIsAnimating(false);
    }, 300); // Match this with CSS transition duration
  };

  const goToPrev = () => {
    if (isAnimating) return;

    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex(
        (prevIndex) =>
          (prevIndex - 1 + testimonials.length) % testimonials.length
      );
      setIsAnimating(false);
    }, 300); // Match this with CSS transition duration
  };

  return (
    <section>
      <div className="container mx-auto px-4 bg-gray-50 py-10">
        <h2
          className="font-bold lg:mx-0 mx-2 text-center mb-4 [font-family:'Gotham-Bold',Helvetica]"
          style={{ fontSize: windowWidth < 768 ? "24px" : "50px" }}
        >
          What Our Client Say About Us
        </h2>
        <div className="flex justify-center">
          <p className="md:text-center lg:mx-0 md:mx-6 text-gray-600 lg:max-w-6xl mx-auto mb-12 [font-family:'Gotham-Book',Helvetica]  text-justify">
            Discover how our comprehensive IT infrastructure solutions, expert
            consulting, and dedicated outsourcing services have empowered
            organizations to optimize operations, enhance efficiency, and drive
            sustainable growth.{" "}
          </p>
        </div>
        <div
          className="relative mx-auto"
          style={{ maxWidth: "100%", overflow: "hidden" }}
        >
          <div className="flex justify-center md:text-left text-justify items-stretch gap-4 px-4">
            {/* Previous Testimonial - smaller and slightly transparent */}
            <div
              className="hidden md:block"
              style={{ width: "30%", opacity: 0.7, transform: "scale(0.9)" }}
            >
              <Testimonial
                key={`prev-${
                  (currentIndex - 1 + testimonials.length) % testimonials.length
                }`}
                quote={
                  testimonials[
                    (currentIndex - 1 + testimonials.length) %
                      testimonials.length
                  ].quote
                }
                name={
                  testimonials[
                    (currentIndex - 1 + testimonials.length) %
                      testimonials.length
                  ].name
                }
                title={
                  testimonials[
                    (currentIndex - 1 + testimonials.length) %
                      testimonials.length
                  ].title
                }
                image={
                  testimonials[
                    (currentIndex - 1 + testimonials.length) %
                      testimonials.length
                  ].image
                }
              />
            </div>

            {/* Current Testimonial - full size and opacity */}
            <div
              className={`transition-all duration-300 ease-in-out ${
                isAnimating
                  ? "opacity-0 transform translate-x-10"
                  : "opacity-100 transform translate-x-0"
              }`}
              style={{
                width: windowWidth < 768 ? "100%" : "40%",
                transform: `${isAnimating ? "scale(0.95)" : "scale(1)"}`,
                transition: "all 0.3s ease-in-out",
              }}
            >
              <Testimonial
                key={`current-${currentIndex}`}
                quote={testimonials[currentIndex].quote}
                name={testimonials[currentIndex].name}
                title={testimonials[currentIndex].title}
                image={testimonials[currentIndex].image}
              />
            </div>

            {/* Next Testimonial - smaller and slightly transparent */}
            <div
              className="hidden md:block"
              style={{ width: "30%", opacity: 0.7, transform: "scale(0.9)" }}
            >
              <Testimonial
                key={`next-${(currentIndex + 1) % testimonials.length}`}
                quote={
                  testimonials[(currentIndex + 1) % testimonials.length].quote
                }
                name={
                  testimonials[(currentIndex + 1) % testimonials.length].name
                }
                title={
                  testimonials[(currentIndex + 1) % testimonials.length].title
                }
                image={
                  testimonials[(currentIndex + 1) % testimonials.length].image
                }
              />
            </div>
          </div>
        </div>

        {/* Navigation buttons */}
        <div className="flex justify-center mt-10 space-x-8">
          <button
            onClick={goToPrev}
            className="w-12 h-12 border border-black rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
            aria-label="Previous testimonial"
            disabled={isAnimating}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 19L8 12L15 5"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            onClick={goToNext}
            className="w-12 h-12 border border-black rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
            aria-label="Next testimonial"
            disabled={isAnimating}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 5L16 12L9 19"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* Page indicator */}
        <div className="flex justify-center mt-4">
          <div className="text-gray-600">
            {currentIndex + 1} of {testimonials.length}
          </div>
        </div>
      </div>
    </section>
  );
};
