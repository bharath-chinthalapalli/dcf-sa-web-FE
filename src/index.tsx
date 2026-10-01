import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./screens/HomePage";
import { ContactUs } from "./screens/ContactUs";
import { WhatWeDo } from "./screens/WhatWeDo";
import { WhoWeAre } from "./screens/WhoWeAre";
import { CaseStudyIt } from "./screens/CaseStudyIt/CaseStudyIt";
import ScrollToTop from "/ScrollToTop";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/our-services" element={<WhatWeDo />} />
        <Route path="/about-us" element={<WhoWeAre />} />
        <Route path="/casestudy" element={<CaseStudyIt />} />
        <Route path="/casestudy/:contentType" element={<CaseStudyIt />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
