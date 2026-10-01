import { useState, useEffect } from "react";
import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";

export const NavigationHeader = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Scroll to consultancy section if coming from navigation
  useEffect(() => {
    if (location.state && location.state.scrollToConsultancy) {
      // Remove the state after using it, so it doesn't scroll again on refresh
      window.history.replaceState({}, document.title, location.pathname);
      setTimeout(() => {
        const section = document.getElementById("consultancy-section");
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 100); // Delay to ensure DOM is rendered
    }
  }, [location]);

  const navigationItems = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about-us" },
    { label: "Our Services", href: "/our-services" },
    { label: "Consultancy", href: "/" },
    { label: "Contact Us", href: "/contact" },
  ];

  return (
    <header className="flex items-center justify-between px-4 py-4 md:px-8 md:py-6 max-w-7xl mx-auto max-w-[1440px] [font-family:'Gotham-Book']">
      {/* Logo */}
      <div className="relative w-[120px] h-[48px] md:w-[155.55px] md:h-[62px] flex-shrink-0">
        <Link to="/">
          <img
            src="/dcf.svg"
            alt="Digital Compatibility Logo"
            className="w-full h-full object-contain cursor-pointer"
          />
        </Link>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex relative z-10 flex-1 items-center justify-center">
        <div className="group flex flex-1 items-center justify-end space-x-1 gap-8">
          {navigationItems.map((item, index) => {
            if (item.label === "Consultancy") {
              return (
                <span
                  key={index}
                  className="text-base text-[#666666] tracking-[0] leading-normal whitespace-nowrap cursor-pointer hover:text-[#9b1c1c] transition-colors duration-200"
                  onClick={() => {
                    if (location.pathname === "/") {
                      // If already on home page, just scroll to section
                      const section = document.getElementById(
                        "consultancy-section"
                      );
                      if (section) {
                        section.scrollIntoView({ behavior: "smooth" });
                      }
                    } else {
                      // Navigate to home page with a flag to scroll after navigation
                      navigate("/", { state: { scrollToConsultancy: true } });
                    }
                  }}
                >
                  {item.label}
                </span>
              );
            } else if (item.href.startsWith("/")) {
              return (
                <NavLink
                  key={index}
                  to={item.href}
                  className={({ isActive }) =>
                    `text-base tracking-[0] leading-normal whitespace-nowrap transition-colors duration-200 ${
                      isActive
                        ? "text-[#9b1c1c] font-medium"
                        : "text-[#666666] hover:text-[#9b1c1c]"
                    }`
                  }
                  end={item.href === "/"}
                >
                  {item.label}
                </NavLink>
              );
            } else {
              return (
                <span
                  key={index}
                  className="text-base text-[#666666] tracking-[0] leading-normal whitespace-nowrap opacity-60 cursor-not-allowed"
                >
                  {item.label}
                </span>
              );
            }
          })}
        </div>
      </nav>

      {/* Hamburger Icon (Mobile) */}
      <button
        className="block md:hidden ml-auto focus:outline-none z-20"
        aria-label="Open menu"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        <svg
          width="32"
          height="32"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <line
            x1="5"
            y1="7"
            x2="19"
            y2="7"
            stroke="#9b1c1c"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <line
            x1="5"
            y1="12"
            x2="19"
            y2="12"
            stroke="#9b1c1c"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <line
            x1="9"
            y1="17"
            x2="19"
            y2="17"
            stroke="#9b1c1c"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      </button>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-30 flex justify-end md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="bg-white w-3/4 max-w-xs h-full p-6 flex flex-col gap-6 shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="self-end mb-2"
              aria-label="Close menu"
              onClick={() => setMobileMenuOpen(false)}
            >
              <svg
                width="28"
                height="28"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#9b1c1c"
              >
                <line
                  x1="6"
                  y1="6"
                  x2="18"
                  y2="18"
                  stroke="#9b1c1c"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <line
                  x1="6"
                  y1="18"
                  x2="18"
                  y2="6"
                  stroke="#9b1c1c"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>
            {navigationItems.map((item, index) => {
              if (item.label === "Consultancy") {
                return (
                  <span
                    key={index}
                    className="block text-lg text-[#666666] py-2 cursor-pointer hover:text-[#9b1c1c] transition-colors duration-200"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      if (location.pathname === "/") {
                        // If already on home page, just scroll to the section
                        setTimeout(() => {
                          const section = document.getElementById("consultancy-section");
                          if (section) {
                            section.scrollIntoView({ behavior: "smooth" });
                          }
                        }, 100); // Wait for menu to close and DOM to be ready
                      } else {
                        // Navigate to home page with a flag to scroll after navigation
                        navigate("/", { state: { scrollToConsultancy: true } });
                      }
                    }}
                  >
                    {item.label}
                  </span>
                );
              } else if (item.href.startsWith("/")) {
                return (
                  <NavLink
                    key={index}
                    to={item.href}
                    className={({ isActive }) =>
                      `block text-lg py-2 transition-colors duration-200 ${
                        isActive
                          ? "text-[#9b1c1c] font-medium"
                          : "text-[#666666] hover:text-[#9b1c1c]"
                      }`
                    }
                    end={item.href === "/"}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </NavLink>
                );
              } else {
                return (
                  <span
                    key={index}
                    className="block text-lg text-[#666666] py-2 opacity-60 cursor-not-allowed"
                  >
                    {item.label}
                  </span>
                );
              }
            })}
          </div>
        </div>
      )}
    </header>
  );
};

export default NavigationHeader;
