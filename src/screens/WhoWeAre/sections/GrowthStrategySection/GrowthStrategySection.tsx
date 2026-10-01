export const GrowthStrategySection = (): JSX.Element => {
  const aboutUsData = {
    title: "About Us",
    description:
      "Digital compatibility, headquartered in riyadh, offers comprehensive ICT solutions tailored to diverse industries across saudi arabia. With deep expertise in system integration and a commitment to SLA excellence, we help businesses navigate the complexities of ICT, ensuring operational efficiency and enhanced client focus.",
  };

  return (
    <section className="container mx-auto my-10 md:my-[100px]">
      <div className="max-w-[1440px]">
      <p className="text-lg text-[#7d7d7d] leading-[28.8px] [font-family:'Gotham-Book',Helvetica] font-normal" style={{fontSize:16}}>
        {aboutUsData.description}
      </p>
      </div>
    </section>
  );
};
