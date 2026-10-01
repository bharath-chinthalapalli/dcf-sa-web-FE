import { useEffect, useState } from "react";

export const HeroSection = (): JSX.Element => {
  // Animated words for the hero section
  const words = ["Digital Solutions", "Outsourcing", "Consultancy"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  // Handle seamless scroll up
  useEffect(() => {
    let timeout: number;
    if (currentWordIndex === words.length) {
      // After transition to the duplicate, instantly reset to 0 without transition
      timeout = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentWordIndex(0);
      }, 500); // match transition duration
    } else {
      timeout = setTimeout(() => {
        setIsTransitioning(true);
        setCurrentWordIndex((prevIndex) => prevIndex + 1);
      }, 2000);
    }
    return () => clearTimeout(timeout);
  }, [currentWordIndex, words.length]);

  return (
    <div className="pt-24 mb-[40px] lg:mb-[340px]">
      <section
        className="w-full relative pb-[80px] sm:pb-[151px]"
      >
        <div className="container mx-auto relative  sm:px-0" style={{ maxWidth: '930px' }}>
          <div className="flex flex-col lg:flex-row items-center lg:items-start text-center lg:text-left">
            <div
              className="w-[153.61px] h-[255.75px] bg-no-repeat bg-contain lg:hidden absolute left-[12px] "
              style={{ backgroundImage: "url('/vector-7.svg')", opacity: '50%' }}
            ></div>
            <div className="flex-1 z-10 flex flex-col items-center lg:items-start mt-[60px] lg:mt-0">
              <h1 className="font-bold text-2xl xs:text-4xl sm:text-5xl md:text-6xl leading-tight tracking-normal [font-family:'Gotham-Bold'] text-justify lg:text-left">
                Innovative
                <br />
                <span className="inline-block relative h-[1.2em] overflow-hidden align-bottom min-w-[180px] sm:min-w-[210px]">
                  <span
                    className={`flex flex-col ${isTransitioning ? 'transition-transform duration-500 ease-in-out' : ''}`}
                    style={{
                      transform: `translateY(-${currentWordIndex * 1.2}em)`
                    }}
                    onTransitionEnd={() => {
                      if (currentWordIndex === words.length) {
                        setIsTransitioning(false);
                        setCurrentWordIndex(0);
                      }
                    }}
                  >
                    {[...words, words[0]].map((word, idx) => (
                      <span
                        key={word + idx}
                        className="text-[#9b1c1c] font-bold h-[1.2em] flex items-center "
                        style={{ height: '1.2em' }}
                      >
                        {word}
                      </span>
                    ))}
                  </span>
                </span>
                <br />
                for Every Industry.
              </h1>

              <p className="hidden sm:block mt-6 sm:mt-8 text-[10px] xs:text-lg sm:text-xl md:text-[20px] text-[#7d7d7d] [font-family:'Gotham-Book'] font-normal text-center lg:text-left">
                Driving transformation from insight to implementation
              </p>

              <p className="block sm:hidden mt-4 text-[10px] xs:text-lg text-[#7d7d7d] [font-family:'Gotham-Book'] font-normal" style={{textAlign:'left',marginLeft:'-67px'}}>
                Driving transformation <br/> from insight to implementation
              </p>

              <div className="mt-6 hidden lg:flex justify-center lg:justify-start">
                <img
                  className="w-12 h-12 sm:w-16 sm:h-16 mx-auto lg:mx-0"
                  alt="Play button"
                  src="/component-35.svg"
                  style={{position:'absolute',right:'452px'}}
                />
              </div>
            </div>
            <div
              className="w-[153.61px] h-[255.75px] absolute  right-[20px] bg-no-repeat bg-contain lg:hidden"
              style={{ backgroundImage: "url('/vector-8.svg')" }}
            />

            <div className="hidden lg:block absolute w-[318px] h-[529px] right-[70px] top-0">
              <div
                className="w-full h-full bg-no-repeat bg-contain"
                style={{ backgroundImage: "url('/vector-7.svg')", opacity: '50%' }}
              >
                <div
                  className="w-80 h-[531px] absolute top-[166px] left-[60px] bg-no-repeat bg-contain"
                  style={{ backgroundImage: "url('/vector-8.svg')" }}
                />
              </div>
            </div>
          </div>

          {/* Hidden overflow text for animation/marquee effect */}
          <div className="hidden">
            <div className="w-[581px] overflow-hidden">
              <div className="w-[581px] [font-family:'Gotham'] font-bold text-[#9b1c1c] text-6xl tracking-[0] leading-[65.5px]">
                Outsourcing Consultancy Digital Solutions Outsourcing Consultancy
              </div>
              <img
                  className="w-12 h-12 sm:w-16 sm:h-16 mx-auto lg:mx-0"
                  alt="Play button"
                  src="/component-35.svg"
                  style={{position:'absolute',right:'452px'}}
                />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
