// Inline style tag for fadeInTop animation
const fadeInTopStyle = (
  <style>{`
    @keyframes fadeInTop {
      from {
        opacity: 0;
        transform: translateY(-40px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `}</style>
);


export const OurStrategySection = (): JSX.Element => {
  // Render the inline style tag for fadeIn animation

  return (
    <section className="relative w-full max-w-[366px] h-[171.99px] md:max-w-[957px] md:h-[450px] mx-auto">
      {fadeInTopStyle}
      <div className="relative w-full h-full">
        {/* Top left vector graphic */}
        <img
          className="absolute w-[180.51px] h-[202.3px] top-[-14px] left-[15px] max-w-[70vw] max-h-[40vw] sm:w-[529px] sm:h-[318px]"
          alt="Decorative vector graphic"
          src="/whoarewe/img/vector-7.svg"
        />

        {/* Main heading content */}
        <div className="absolute inset-0 hidden sm:flex flex-col items-center justify-center">
          <h1
            className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl text-center font-bold [font-family:'Gotham-Bold',Helvetica] leading-tight md:leading-[65.5px] tracking-[0]"
            // style={{
            //   display: 'inline-block',
            //   fontFamily: 'Gotham-Bold, Helvetica',
            // }}
            style={{
              opacity: 0,
              transform: 'translateY(-40px)',
              animation: 'fadeInTop 0.8s ease forwards',
              animationDelay: '0.4s',
              display: 'inline-block',
            }}
          >
            <span className="text-black">About </span>
            <span className="text-[#9b1c1c]">Us</span>
          </h1>
        </div>

        <div className="absolute inset-0  sm:hidden flex-col items-center justify-center top-[90px] left-[100px]">
          <h1
            className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl text-center font-bold [font-family:'Gotham-Bold',Helvetica] leading-tight md:leading-[65.5px] tracking-[0]"
            // style={{
            //   display: 'inline-block',
            //   fontFamily: 'Gotham-Bold, Helvetica',
            // }}
            style={{
              opacity: 0,
              transform: 'translateY(-40px)',
              animation: 'fadeInTop 0.8s ease forwards',
              animationDelay: '0.4s',
              display: 'inline-block',
              fontSize: '24px',
            }}
          >
            <span className="text-black">About </span>
            <span className="text-[#9b1c1c]">Us</span>
          </h1>
        </div>

        {/* Bottom right vector graphic */}
        <img
          className="absolute w-[180.51px] h-[202.3px] bottom-[-26px] right-[31px] right-0 max-w-[70vw] max-h-[40vw] sm:w-[531px] sm:h-80"
          alt="Decorative vector graphic"
          src="/whoarewe/img/vector-8.svg"
        />
      </div>
    </section>
  );
};
