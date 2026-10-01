import { Input } from "../../components/ui/input";
import {
  ArrowRightIcon,
  MailIcon,
  PhoneIcon,
  CheckCircleIcon,
  AlertCircleIcon,
} from "lucide-react";
import NavigationHeader from "../../components/ui/navigation";
import { Footer } from "../HomePage/sections/Footer/Footer";
import ReCAPTCHA from "react-google-recaptcha";
import { useState, FormEvent, useEffect, useRef } from "react";

// Add type declaration for grecaptcha
declare global {
  interface Window {
    grecaptcha: {
      reset: () => void;
    };
  }
}

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  region: string;
  postalCode: string;
  country: string;
  message: string;
  captchaToken?: string;
}

const CITY_PAGE_SIZE = 30;
const COUNTRY_PAGE_SIZE = 30;

export const ContactUs = (): JSX.Element => {
  // Country and city state
  const [countries, setCountries] = useState<string[]>([]);
  const [allCountries, setAllCountries] = useState<string[]>([]);
  const [displayedCountries, setDisplayedCountries] = useState<string[]>([]);
  const [countryPage, setCountryPage] = useState<number>(1);
  const [countryDropdownOpen, setCountryDropdownOpen] =
    useState<boolean>(false);
  const [selectedCountry, setSelectedCountry] =
    useState<string>("Saudi Arabia");
  const [loadingCountries, setLoadingCountries] = useState<boolean>(false);
  const [hasMoreCountries, setHasMoreCountries] = useState<boolean>(false);

  // Country search/filter state
  const [countryInput, setCountryInput] = useState<string>("");

  const [allCities, setAllCities] = useState<string[]>([]);
  const [filteredCities, setFilteredCities] = useState<string[]>([]);
  const [displayedCities, setDisplayedCities] = useState<string[]>([]);
  const [selectedCity, setSelectedCity] = useState<string>("");
  const [cityInput, setCityInput] = useState<string>("");
  const [cityDropdownOpen, setCityDropdownOpen] = useState<boolean>(false);
  const [cityPage, setCityPage] = useState<number>(1);
  const [loadingCities, setLoadingCities] = useState<boolean>(false);
  const [hasMoreCities, setHasMoreCities] = useState<boolean>(false);

  const cityInputRef = useRef<HTMLInputElement>(null);
  const cityDropdownRef = useRef<HTMLDivElement>(null);

  // Fetch countries on mount (but only first batch for select)
  useEffect(() => {
    setLoadingCountries(true);
    fetch("https://countriesnow.space/api/v0.1/countries/")
      .then((res) => res.json())
      .then((data) => {
        const countryList = data.data.map(
          (country: { country: string }) => country.country
        );
        setAllCountries(countryList);
        setCountries(countryList);
        setDisplayedCountries(countryList.slice(0, COUNTRY_PAGE_SIZE));
        setHasMoreCountries(countryList.length > COUNTRY_PAGE_SIZE);
        setCountryPage(1);
      })
      .finally(() => setLoadingCountries(false));
  }, []);

  // Country dropdown infinite scroll
  const handleCountryDropdownScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;
    if (
      scrollHeight - scrollTop - clientHeight < 10 &&
      hasMoreCountries &&
      !loadingCountries
    ) {
      const nextPage = countryPage + 1;
      const moreCountries = countries.slice(0, nextPage * COUNTRY_PAGE_SIZE);
      setDisplayedCountries(moreCountries);
      setCountryPage(nextPage);
      setHasMoreCountries(countries.length > nextPage * COUNTRY_PAGE_SIZE);
    }
  };

  // Country filter by input
  useEffect(() => {
    let filtered = allCountries;
    if (countryInput.trim()) {
      filtered = allCountries.filter((country) =>
        country.toLowerCase().startsWith(countryInput.trim().toLowerCase())
      );
    }
    setCountries(filtered);
    setDisplayedCountries(filtered.slice(0, COUNTRY_PAGE_SIZE));
    setCountryPage(1);
    setHasMoreCountries(filtered.length > COUNTRY_PAGE_SIZE);
  }, [countryInput, allCountries]);

  // Fetch all cities when selectedCountry changes
  useEffect(() => {
    if (!selectedCountry) return;

    let isMounted = true; // flag to prevent state update if unmounted
    setLoadingCities(true);

    fetch("https://countriesnow.space/api/v0.1/countries/cities", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ country: selectedCountry }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (!isMounted) return;
        const cityList = data.data || [];
        setAllCities(cityList);
        setFilteredCities(cityList);
        setCityPage(1);
        setDisplayedCities(cityList.slice(0, CITY_PAGE_SIZE));
        setHasMoreCities(cityList.length > CITY_PAGE_SIZE);
        setSelectedCity("");
        setCityInput("");
        setFormData((prev) => ({
          ...prev,
          city: "",
        }));
      })
      .finally(() => {
        if (isMounted) setLoadingCities(false);
      });

    // Cleanup to avoid setting state on unmounted component
    return () => {
      isMounted = false;
    };
  }, [selectedCountry]);

  // Filter cities when cityInput changes
  useEffect(() => {
    if (!cityInput) {
      setFilteredCities(allCities);
      setDisplayedCities(allCities.slice(0, CITY_PAGE_SIZE));
      setCityPage(1);
      setHasMoreCities(allCities.length > CITY_PAGE_SIZE);
      return;
    }
    const filtered = allCities.filter((city) =>
      city.toLowerCase().includes(cityInput.toLowerCase())
    );
    setFilteredCities(filtered);
    setDisplayedCities(filtered.slice(0, CITY_PAGE_SIZE));
    setCityPage(1);
    setHasMoreCities(filtered.length > CITY_PAGE_SIZE);
  }, [cityInput, allCities]);

  // Infinite scroll for city dropdown
  const handleCityDropdownScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;
    if (
      scrollHeight - scrollTop - clientHeight < 10 &&
      hasMoreCities &&
      !loadingCities
    ) {
      const nextPage = cityPage + 1;
      const moreCities = filteredCities.slice(0, nextPage * CITY_PAGE_SIZE);
      setDisplayedCities(moreCities);
      setCityPage(nextPage);
      setHasMoreCities(filteredCities.length > nextPage * CITY_PAGE_SIZE);
    }
  };

  // Form state
  const [captchaVerified, setCaptchaVerified] = useState<boolean>(false);
  const [captchaToken, setCaptchaToken] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    region: "",
    postalCode: "",
    country: "Saudi Arabia",
    message: "",
  });

  // Update formData when selectedCountry or selectedCity changes
  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      country: selectedCountry,
      city: selectedCity,
    }));
  }, [selectedCountry, selectedCity]);

  // Handle input changes
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (name === "city") {
      setCityInput(value);
      setSelectedCity("");
      setCityDropdownOpen(true);
    }
  };

  // Country select logic
  const handleCountryChange = (value: string) => {
    setSelectedCountry(value);
    setSelectedCity("");
    setCityInput("");
    setFormData((prev) => ({
      ...prev,
      country: value,
      city: "",
    }));
    setCountryDropdownOpen(false);
    setCountryInput(""); // clear filter input after select
  };

  // When user selects a city from dropdown
  const handleCitySelect = (city: string) => {
    setSelectedCity(city);
    setCityInput(city);
    setFormData((prev) => ({
      ...prev,
      city,
    }));
    setCityDropdownOpen(false);
  };

  // Focus/blur logic for city input and dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        cityInputRef.current &&
        !cityInputRef.current.contains(event.target as Node) &&
        cityDropdownRef.current &&
        !cityDropdownRef.current.contains(event.target as Node)
      ) {
        setCityDropdownOpen(false);
      }
    };
    if (cityDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [cityDropdownOpen]);

  // Focus/blur logic for country select
  const countryDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        countryDropdownRef.current &&
        !countryDropdownRef.current.contains(event.target as Node)
      ) {
        setCountryDropdownOpen(false);
      }
    };
    if (countryDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [countryDropdownOpen]);

  const handleCaptchaChange = (value: string | null) => {
    setCaptchaVerified(!!value);
    setCaptchaToken(value || "");
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!captchaVerified) {
      setSubmitStatus({
        success: false,
        message: "Please verify that you are not a robot",
      });
      return;
    }

    if (!formData.email || !formData.message) {
      setSubmitStatus({
        success: false,
        message: "Email and message are required fields",
      });
      return;
    }

    try {
      setIsSubmitting(true);
      setSubmitStatus(null);

      const dataWithCaptcha = {
        ...formData,
        captchaToken: captchaToken,
      };

      const response = await fetch("https://dcf.sa/api/contact/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataWithCaptcha),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          success: true,
          message: data.message || "Your message has been sent successfully!",
        });
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          address: "",
          city: "",
          region: "",
          postalCode: "",
          country: selectedCountry,
          message: "",
        });
        setSelectedCity("");
        setCityInput("");
        setCaptchaVerified(false);
        setCaptchaToken("");
        if (
          typeof window !== "undefined" &&
          window.grecaptcha &&
          window.grecaptcha.reset
        ) {
          window.grecaptcha.reset();
        }
      } else {
        setSubmitStatus({
          success: false,
          message:
            data.message || "Failed to send your message. Please try again.",
        });
      }
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: "Network error. Please check your connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <MailIcon className="w-9 h-9 text-white" />,
      iconBgColor: "bg-[#9b1c1c]",
      label: "Email:",
      value: "sales@dcf.sa",
      hyperLink: "mailto:sales@dcf.sa",
    },
    {
      icon: <PhoneIcon className="w-9 h-9 text-gray-600" />,
      iconBgColor: "bg-[#d9d9d9]",
      label: "Phone:",
      value: "+966 011 827 4157",
      hyperLink: "tel:+9660118274157",
    },
  ];

  return (
    <>
      <NavigationHeader />
      <div
        className="min-h-screen w-full"
        style={{ backgroundColor: "#ECECEC" }}
      >
        <div className="flex flex-col items-center w-full max-w-[1440px] mx-auto px-4 pt-12 pb-8 md:pb-32">
          <div className="w-full max-w-[700px] px-5 sm:px-10 py-12">
            <h1 className="text-[24px] md:text-[42px] font-bold text-left md:text-center mb-8 md:mb-12 [font-family:'Gotham-Book'] leading-tight">
              <span className="text-black">Let's Build</span>
              <br />
              <span className="text-[#9b1c1c]">Something Great Together</span>
            </h1>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 [font-family:'Gotham-Book']">
                  Name
                </label>
                <div className="flex gap-4">
                  <Input
                    name="firstName"
                    placeholder="First"
                    className="flex-1"
                    value={formData.firstName}
                    onChange={handleInputChange}
                  />
                  <Input
                    name="lastName"
                    placeholder="Last"
                    className="flex-1"
                    value={formData.lastName}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 [font-family:'Gotham-Book']">
                  Email
                </label>
                <Input
                  name="email"
                  placeholder="example@youremail.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 [font-family:'Gotham-Book']">
                  Phone
                </label>
                <Input
                  name="phone"
                  placeholder="+966 XX XXX XXXX"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 [font-family:'Gotham-Book']">
                  Address
                </label>
                <Input
                  name="address"
                  placeholder="Street Address"
                  className="mb-4"
                  value={formData.address}
                  onChange={handleInputChange}
                />
                <div className="flex gap-4 mb-4">
                  {/* Advanced City Input + Dropdown */}
                  <div className="relative flex-grow flex-shrink md:basis-[4%] basis-[7%]">
                    <Input
                      ref={cityInputRef}
                      name="city"
                      placeholder={
                        loadingCities ? "Loading..." : "Type city name..."
                      }
                      autoComplete="off"
                      value={cityInput}
                      onChange={handleInputChange}
                      onFocus={() => setCityDropdownOpen(true)}
                      onBlur={() => {}}
                      className="w-full pr-10"
                      style={{
                        borderBottomLeftRadius: cityDropdownOpen
                          ? 0
                          : undefined,
                        borderBottomRightRadius: cityDropdownOpen
                          ? 0
                          : undefined,
                        borderColor: cityDropdownOpen ? "#9b1c1c" : undefined,
                        boxShadow: cityDropdownOpen
                          ? "0 2px 8px rgba(155,28,28,0.08)"
                          : undefined,
                        // zIndex: 30,
                        position: "relative",
                      }}
                    />
                    {/* Dropdown */}
                    {cityDropdownOpen && (
                      <div
                        ref={cityDropdownRef}
                        className="absolute left-0 right-0 bg-white border border-t-0 border-gray-200 rounded-b-lg shadow-lg max-h-60 overflow-auto z-40 animate-fadeIn"
                        style={{
                          top: "100%",
                        }}
                        onScroll={handleCityDropdownScroll}
                      >
                        {loadingCities ? (
                          <div className="p-4 text-center text-gray-500">
                            Loading...
                          </div>
                        ) : displayedCities.length === 0 ? (
                          <div className="p-4 text-center text-gray-500">
                            No cities found
                          </div>
                        ) : (
                          displayedCities.map((city) => (
                            <div
                              key={city}
                              className={`px-4 py-2 cursor-pointer hover:bg-[#f5f5f5] ${
                                city === selectedCity
                                  ? "bg-[#f5f5f5] font-semibold"
                                  : ""
                              }`}
                              onMouseDown={() => handleCitySelect(city)}
                            >
                              {city}
                            </div>
                          ))
                        )}
                        {hasMoreCities && !loadingCities && (
                          <div className="p-2 text-center text-xs text-gray-400">
                            Scroll to load more...
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                  <Input
                    name="region"
                    placeholder="Region"
                    className="flex-1"
                    value={formData.region}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="flex gap-4">
                  <Input
                    name="postalCode"
                    placeholder="Postal/Zip Code"
                    className="flex-1"
                    value={formData.postalCode}
                    onChange={handleInputChange}
                  />
                  {/* Custom Country Dropdown with Infinite Scroll and Search */}
                  <div className="relative flex-grow flex-shrink md:basis-[4%] basis-[7%]">
                    <div
                      className="w-full pr-10 bg-white border border-gray-300 rounded-lg cursor-pointer flex items-center"
                      style={{
                        minHeight: "37px",
                        borderBottomLeftRadius: countryDropdownOpen
                          ? 0
                          : undefined,
                        borderBottomRightRadius: countryDropdownOpen
                          ? 0
                          : undefined,
                        borderColor: countryDropdownOpen
                          ? "#9b1c1c"
                          : undefined,
                        boxShadow: countryDropdownOpen
                          ? "0 2px 8px rgba(155,28,28,0.08)"
                          : undefined,
                        // zIndex: 30,
                        position: "relative",
                        backgroundColor: loadingCountries
                          ? "#f5f5f5"
                          : undefined,
                        cursor: loadingCountries ? "not-allowed" : "pointer",
                        paddingLeft: "12px",
                        paddingRight: "32px",
                        fontSize: "16px",
                        color: "#222",
                        userSelect: "none",
                      }}
                      onClick={() => {
                        if (!loadingCountries)
                          setCountryDropdownOpen((v) => !v);
                      }}
                      tabIndex={0}
                      // onBlur={() => setCountryDropdownOpen(false)} // <-- REMOVE THIS LINE
                      ref={countryDropdownRef}
                    >
                      <span>
                        {selectedCountry ||
                          (loadingCountries ? "Loading..." : "Select country")}
                      </span>
                      <svg
                        className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"
                        width="20"
                        height="20"
                        fill="none"
                        viewBox="0 0 20 20"
                      >
                        <path
                          d="M6 8l4 4 4-4"
                          stroke="#9b1c1c"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    {countryDropdownOpen && (
                      <div
                        className="absolute left-0 right-0 bg-white border border-t-0 border-gray-200 rounded-b-lg shadow-lg max-h-60 overflow-auto z-40 animate-fadeIn"
                        style={{
                          top: "100%",
                        }}
                        onScroll={handleCountryDropdownScroll}
                      >
                        {/* Country search input */}
                        <div className="sticky top-0 bg-white z-50 p-2 border-b border-gray-100">
                          <input
                            type="text"
                            placeholder="Type to filter country..."
                            value={countryInput}
                            onChange={(e) => setCountryInput(e.target.value)}
                            className="w-full px-2 py-1 border border-gray-200 rounded focus:outline-none focus:border-[#9b1c1c] text-sm"
                            autoFocus
                          />
                        </div>
                        {loadingCountries ? (
                          <div className="p-4 text-center text-gray-500">
                            Loading...
                          </div>
                        ) : displayedCountries.length === 0 ? (
                          <div className="p-4 text-center text-gray-500">
                            No countries found
                          </div>
                        ) : (
                          displayedCountries.map((country) => (
                            <div
                              key={country}
                              className={`px-4 py-2 cursor-pointer hover:bg-[#f5f5f5] ${
                                country === selectedCountry
                                  ? "bg-[#f5f5f5] font-semibold"
                                  : ""
                              }`}
                              onMouseDown={() => handleCountryChange(country)}
                            >
                              {country}
                            </div>
                          ))
                        )}
                        {hasMoreCountries && !loadingCountries && (
                          <div className="p-2 text-center text-xs text-gray-400">
                            Scroll to load more...
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 [font-family:'Gotham-Book']">
                  Message
                </label>
                <textarea
                  name="message"
                  placeholder="Type your message here..."
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="w-full border border-gray-300 rounded-lg p-2"
                />
              </div>
              {submitStatus && (
                <div
                  className={`p-4 mb-4 rounded-md ${
                    submitStatus.success ? "bg-green-50" : "bg-red-50"
                  }`}
                >
                  <div className="flex items-center">
                    {submitStatus.success ? (
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                    ) : (
                      <AlertCircleIcon className="h-5 w-5 text-red-500 mr-2" />
                    )}
                    <p
                      className={`text-sm ${
                        submitStatus.success ? "text-green-700" : "text-red-700"
                      }`}
                    >
                      {submitStatus.message}
                    </p>
                  </div>
                </div>
              )}

              <div className="my-6">
                <ReCAPTCHA
                  sitekey="6LfjrzwrAAAAAFuBwiq8PoNSV6KaLTGtXGF5yIWJ"
                  onChange={handleCaptchaChange}
                  className="mb-4"
                />
                <div className="text-xs text-gray-500 mb-4">
                  This site is protected by reCAPTCHA and the Google
                  <a
                    href="https://policies.google.com/privacy"
                    className="text-[#9b1c1c] mx-1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Privacy Policy
                  </a>
                  and
                  <a
                    href="https://policies.google.com/terms"
                    className="text-[#9b1c1c] mx-1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Terms of Service
                  </a>
                  apply.
                </div>
              </div>

              <div className="flex">
                <button
                  type="submit"
                  className={`flex w-[190px] h-12 items-center justify-center gap-4 px-[23.26px] py-[15.5px] ${
                    captchaVerified ? "bg-[#9b1c1c]" : "bg-gray-400"
                  } rounded-[121px] cursor-pointer transition-colors duration-300`}
                  disabled={!captchaVerified || isSubmitting}
                >
                  <div className="relative w-fit mt-[-2.47px] mb-[-0.53px] [font-family:'Manrope',Helvetica] font-semibold text-white text-base tracking-[0] leading-5 whitespace-nowrap">
                    {isSubmitting ? "Sending..." : "Send message"}
                  </div>
                  <ArrowRightIcon
                    className="!relative !w-[15.5px] !h-[15.5px]"
                    color="white"
                  />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* Desktop contact info with image */}
      <div className="hidden md:flex bg-white justify-center pb-16 pt-0">
        <div className="w-full max-w-[765px] max-h-[300px] mt-[-137px] ml-[-182px] relative flex justify-center">
          <img
            src="/contact/img/mask-group.webp"
            alt="Person with headphones"
            className="w-full h-auto rounded-lg object-cover"
            style={{ minHeight: 320, maxHeight: 320 }}
          />
          <div className="absolute bottom-[16px] right-[-257px] w-[300px] h-[250px] bg-white rounded-xl shadow-lg border border-[#e1e3ec] flex flex-col p-8 z-10">
            <h2 className="font-bold text-xl leading-6 mb-8 [font-family:'Gotham-Book']">
              Contact Us
            </h2>
            <div className="space-y-5">
              {contactInfo.map((item, index) => (
                <a key={index} href={item.hyperLink} className="cursor-pointer">
                  <div
                    className={`flex items-start gap-4 ${
                      index === 0 ? "mb-6" : ""
                    }`}
                  >
                    <div
                      className={`w-12 h-12 rounded flex items-center justify-center ${item.iconBgColor}`}
                    >
                      {item.icon}
                    </div>
                    <div className="flex flex-col">
                      <span className="text-black text-[18px] leading-6 font-semibold [font-family:'Gotham-Book']">
                        {item.label}
                      </span>
                      <span className="text-black text-[18px] leading-6 mt-1 [font-family:'Gotham-Book']">
                        {item.value}
                      </span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile contact info */}
      <div className="md:hidden w-full" style={{ marginBottom: "163px" }}>
        <div className="relative">
          <img
            src="/contact/img/mask-group.webp"
            alt="Person with headphones"
            className="w-full h-auto object-cover px-4"
            style={{ maxHeight: 260, width: "100%" }}
          />

          <div className="absolute bottom-[-100px] left-0 right-0 mx-4 mb-4">
            <div
              className="bg-white rounded-xl shadow-lg overflow-hidden"
              style={{ width: "389.61px", height: "135px", margin: "0 auto" }}
            >
              <div className="p-4">
                <h2
                  className="font-bold text-3xl mb-4 [font-family:'Gotham-Book']"
                  style={{ fontSize: "20px" }}
                >
                  Contact Us:
                </h2>

                <div className="flex md:flex-col md:space-y-4">
                  {/* Email */}
                  <a href="mailto:sales@dcf.sa" target="_blank" rel="noopener noreferrer">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-[#9b1c1c] rounded flex items-center justify-center mr-3">
                        <MailIcon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div
                          className="text-base font-medium text-black [font-family:'Gotham-Book']"
                          style={{ fontSize: "12px" }}
                        >
                          Email:
                        </div>
                        <div
                          className="text-base text-black [font-family:'Gotham-Book']"
                          style={{ fontSize: "12px" }}
                        >
                          sales@dcf.sa
                        </div>
                      </div>
                    </div>
                  </a>

                  {/* Phone */}
                  <a href="tel:+9660118274157">
                    <div className="flex items-center ml-6 cursor-pointer">
                      <div className="w-12 h-12 bg-[#d9d9d9] rounded flex items-center justify-center mr-3">
                        <PhoneIcon className="w-6 h-6 text-gray-600" />
                      </div>
                      <div>
                        <div
                          className="text-base font-medium text-black [font-family:'Gotham-Book']"
                          style={{ fontSize: "12px" }}
                        >
                          Phone:
                        </div>

                        <div
                          className="text-base text-black [font-family:'Gotham-Book']"
                          style={{ fontSize: "12px" }}
                        >
                          +966 011 827 4157
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-8px);}
          to { opacity: 1; transform: translateY(0);}
        }
        .animate-fadeIn {
          animation: fadeIn 0.18s ease;
        }
      `}</style>
    </>
  );
};

export default ContactUs;
