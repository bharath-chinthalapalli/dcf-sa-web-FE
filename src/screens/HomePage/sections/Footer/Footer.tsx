import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Footer = (): JSX.Element => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  const contactInfo = [
    {
      icon: <MapPinIcon className="w-[19px] h-[19px] text-white" />,
      text: "Saudi Arabia, Riyadh",
      href: "https://maps.app.goo.gl/fE2HaGmPy25WG51fA?g_st=aw",
    },
    {
      icon: <PhoneIcon className="w-[19px] h-[19px] text-white" />,
      text: "+966 11 827 4157",
      href: "tel:+966118274157",
    },
    {
      icon: <MailIcon className="w-[19px] h-[19px] text-white" />,
      text: "sales@dcf.sa",
      href: "mailto:sales@dcf.sa",
    },
  ];

  // const resourceLinks = [
  //   { name: "Blog", href: "javascript:void(0)" },
  //   { name: "Help Center / Support", href: "javascript:void(0)" },
  //   { name: "Documentation / API Docs", href: "javascript:void(0)" },
  //   { name: "Case Studies", href: "javascript:void(0)" },
  //   { name: "Webinars / Events", href: "javascript:void(0)" },
  // ];

  // const legalLinks = [
  //   { name: "Privacy Policy", href: "javascript:void(0)" },
  //   { name: "Terms of Service", href: "javascript:void(0)" },
  //   { name: "Cookie Policy", href: "javascript:void(0)" },
  //   { name: "Security / Compliance", href: "javascript:void(0)" },
  //   { name: "Data Protection", href: "javascript:void(0)" },
  // ];

  // const socialLinks = [
  //   { label: "X", href: "javascript:void(0)" },
  //   { label: "f", href: "javascript:void(0)" },
  //   { label: "in", href: "javascript:void(0)" },
  // ];

  const LinkBlock = ({
    links,
  }: {
    links: { name: string; href: string }[];
  }) => (
    <div className="flex flex-col gap-[24px] mt-2">
      {links.map((link, index) => (
        <Link
          key={index}
          to={link.href}
          className="[font-family:'Gotham-Book',Helvetica] font-normal text-kpmg-com-sec-1 text-sm"
        >
          {link.name}
        </Link>
      ))}
    </div>
  );

  if (isMobile) {
    return (
      <footer
        className="relative w-full py-6 !overflow-hidden"
        style={{ backgroundColor: "rgba(191, 191, 191, 1)" }}
      >
        <div className="container mx-auto px-6">
          <div className="mb-6 flex justify-start">
            <div className="w-[200px] h-[60px]">
              <img
                src="/logo.png"
                alt="Logo"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          <div className="text-start mb-8 font-normal text-black text-sm">
            Founded: Est. 2017
          </div>

          {/* hide link */}
          {/* <div className="grid grid-cols-2 gap-x-4 gap-y-4 w-full mb-8">
            <LinkBlock links={resourceLinks} />
            <LinkBlock links={legalLinks} />
 
          </div> */}

          <div className="mb-8">
            <h3 className="font-bold text-black text-base mb-6 text-start">
              Contact:
            </h3>
            <div className="flex flex-col gap-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#7d7d7d] flex  items-center justify-center">
                    {item.icon}
                  </div>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-normal text-black text-sm leading-[16px] mt-[5px] hover:underline"
                  >
                    {item.text}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* <div className="flex items-center gap-[13px] mb-6 justify-center">
            {socialLinks.map(({ label, href }, i) => (
              <a
                key={i}
                href={href}
                className="w-8 h-8 bg-[#7d7d7d] rounded-full flex items-center justify-center text-white font-bold"
                aria-label={`Social media link ${label}`}
              >
                {label}
              </a>
            ))}
          </div> */}

          <div className="text-center font-normal text-black text-sm">
            © Copyright 2017 Digital Compatibility Foundation,
            <br /> All rights reserved.
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer
      className="relative w-full pt-12 pb-0 overflow-hidden"
      style={{ backgroundColor: "rgba(191, 191, 191, 1)" }}
    >
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <div className="w-[265px] h-[76px] relative">
            <img
              src="/logo.png"
              alt="Logo"
              className="w-[257px] h-[62px] absolute left-[-29px] object-contain"
            />
          </div>
          <div className="mt-4 font-normal text-black text-sm">
            Founded: Est. 2017
          </div>
        </div>

        <div className="flex flex-wrap gap-8 mb-12">
          <div className="w-72">
            <h3 className="font-bold text-kpmg-com-sec-1 text-base mb-6">
              Contact:
            </h3>
            <div className="flex flex-col gap-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full p-2 bg-[#7d7d7d] flex items-center justify-center">
                    {item.icon}
                  </div>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-normal text-black text-sm leading-[16px] mt-[10px] hover:underline"
                  >
                    {item.text}
                  </a>
                </div>
              ))}
            </div>
          </div>
          {/* hide link */}
          {/* <div className="w-[197px]">
            <LinkBlock links={resourceLinks} />
          </div>
          <div className="w-[165px]">
            <LinkBlock links={legalLinks} />
          </div> */}
        </div>

        <div className="flex items-center gap-[32px]">
          <div className="text-center font-normal text-black text-sm">
            © Copyright 2017 Digital Compatibility Foundation, All rights
            reserved.
          </div>
          {/* <div className="flex items-center gap-[13px] mb-4">
            {[
              "/footer/icons/vector.svg",
              "/footer/icons/group-2@2x.png",
              "/footer/icons/group-3@2x.png",
            ].map((src, i) => (
              <div
                key={i}
                className="w-8 h-8 bg-[#7d7d7d] rounded-2xl flex items-center justify-center"
              >
                <img src={src} alt="icon" className="w-4 h-4 object-contain" />
              </div>
            ))}
          </div> */}
        </div>
      </div>

      <img
        className="absolute w-[161px] h-[269px] top-[50px] right-[160px] opacity-70"
        alt="Vector"
        src="/footer/icons/vector-12.svg"
      />
      <img
        className="absolute w-[161px] h-[269px] top-[199px] right-[50px] opacity-70"
        alt="Vector"
        src="/footer/icons/vector-11.svg"
      />
      <div
        className="absolute w-[531px] top-[114px] right-[-50px] bottom-[148px] rotate-[-90deg] opacity-10 font-semibold text-[100.7px] leading-[109.4px]"
        style={{ WebkitTextStroke: "1px #000" }}
      >
        Digital
        <br />
        Compati
        <br />
        bility
      </div>
    </footer>
  );
};
