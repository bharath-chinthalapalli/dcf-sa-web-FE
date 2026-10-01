import { CaseStudyPage } from "./CaseStudyPage";
import { useLocation, useParams } from "react-router-dom";
import { useEffect } from "react";

const caseStudyItContent = {
  pageTitle: "CASE STUDY",
  mainTitle: "IT Security",
  subtitle: (
    <>
      Secure Your Digital Assets With
      <br />
      our Powerful security Services
    </>
  ),
  description:
    "In The Highly Advanced World Of Today, A Problem-free Operation And A Good Reputation Of Your Organization Depend On The Digital Security Of The Organization. That's Why Digital Compatibility Provides A Wide Range Of Security Services Customized For Securing Your Information And Shielding Your Business From Cybersecurity Attacks.",
  topImage: "/casestudy/icons/vector-8.svg",
  whatMakesTitle: "What Makes Our Security Services Special?",
  securityServices: [
    {
      id: 1,
      image: "/casestudy/icons/it-mask-group-1@2x.png",
      title: "Prevent Cyber Threats",
      description:
        "Safeguard your sensitive data from evolving cyber threats. Our robust security solutions implement the latest technology to identify and mitigate vulnerabilities.",
    },
    {
      id: 2,
      image: "/casestudy/icons/it-mask-group-2@2x.png",
      title: "Defend with Confidence",
      description:
        "Achieve a 100% defense against data breaches and leaks. Always assures that your information is protected by industry-leading protocols.",
    },
    {
      id: 3,
      image: "/casestudy/icons/it-mask-group-3@2x.png",
      title: "Ensure Data Integrity at Every Level",
      description:
        "Maintain complete control over your data with comprehensive security measures. We ensure the integrity of your data, from storage to transmission, protect your entire digital ecosystem.",
    },
  ],
  sectionBgImage: "/casestudy/sections/itsecurity.jpg",
  sectionBgImageMobile: "/casestudy/sections/itsecuritymobile.jpg",
  ctaTitle: (
    <>
      Don&apos;t wait to Try Digital Compatibility to
      <br />
      Secure Your Digital Asset
    </>
  ),
  ctaDescription:
    "Stop right now before it is too late to secure your virtual assets. Ask us today to get more insight about your ability to shield your business from any cybersecurity risks.",
  serviceCards: [
    {
      id: 1,
      title: "Case Study 1",
      serviceDescription: "Building scalable planform with IT security...",
      image: "/casestudy/one.png",
      isService: true,
      row: 1,
      description:
        "In the highly advanced world of today, a problem-free operation and a good reputation of your organization depend on the digital security of the organization.",
      link:"/casestudy/caseStudyItContent"
    },
    {
      id: 3,
      title: "Case Study 3",
      serviceDescription:
        "Craft Advanced Software withDigital Compatibility Software Engineering Expertise...",
      image: "/casestudy/three.png",
      isService: true,
      row: 1,
      description:
        "In every user based industry, a premium user experience is important. Digital Compatibility’s skilled engineers build innovative software applications with intuitive interfaces and user-centric design principles for you.",
      link:"/casestudy/caseStudyItContent1"
    },
  ],
};
const caseStudyItContent1 = {
  pageTitle: "CASE STUDY",
  mainTitle: "Software Engineering",
  subtitle: (
    <>
      Craft Advanced Software With
      <br />
      Digital Compatibility Software Engineering Expertise
    </>
  ),
  description:
    "In Every User Based Industry, A Premium User Experience Is Important. Digital Compatibility's Skilled Engineers Build Innovative Software Applications With Intuitive Interfaces And User-centric Design Principles For You",
  topImage: "/casestudy/icons/vector-8.svg",
  whatMakesTitle: "What Makes Our Software Engineering Services Special?",
  securityServices: [
    {
      id: 1,
      image: "/casestudy/icons/se-mask-group-1@2x.png",
      title: "Have a Delightful User Experience",
      description:
        "User satisfaction is at the core of our software engineering approach. Digital Compatibility crafts solutions that not only meet functional requirements but also provide a delightful user experience. From intuitive interfaces to seamless interactions, we ensure that your software resonates with your audience.",
    },
    {
      id: 2,
      image: "/casestudy/icons/se-mask-group-2@2x.png",
      title: "Get Next-Generation Features",
      description:
        "Elevate your software capabilities with Digital Compatibility's software engineering expertise. Our team is dedicated to incorporating cutting-edge features that propel your applications to the forefront of technology, ensuring a competitive edge in the market.",
    },
    {
      id: 3,
      image: "/casestudy/icons/se-mask-group-3@2x.png",
      title: "Decrease Turnaround Times",
      description:
        "Experience rapid development cycles and reduced time-to-market with Digital Compatibility's software engineering services. We streamline the development process, optimize workflows, and prioritize efficiency to deliver solutions that meet your timelines without compromising quality.",
    },
  ],
  sectionBgImage: "/casestudy/sections/seweb.jpg",
  sectionBgImageMobile: "/casestudy/sections/sem.jpg",
  ctaTitle: (
    <>
      Upgrade your software capabilities with Robotico's software
      <br/>
      engineering services!
    </>
  ),
  ctaDescription:
    "Feel free to Contact us to enhance your applications with next-generation features and exceptional user experiences!",
  serviceCards: [
    {
      id: 1,
      title: "Case Study 1",
      serviceDescription: "Building scalable planform with IT security...",
      image: "/casestudy/one.png",
      isService: true,
      row: 1,
      description:
        "In the highly advanced world of today, a problem-free operation and a good reputation of your organization depend on the digital security of the organization.",
      link:"/casestudy/caseStudyItContent"
    },
    {
      id: 2,
      title: "Case Study 2",
      serviceDescription:
        "Unlock Untapped Potential withDigital Compatibility'sConsulting Services.",
      image: "/casestudy/two.png",
      isService: true,
      row: 1,
      description:
        "The modern business environment can be difficult to navigate. The dedicated consultants of Digital Compatibility offer crucial assistance and support which enable you to identify prospects and maximize your business performance.",
      link:"/casestudy/caseStudyItContent2"
    },
  ],
};
const caseStudyItContent2 = {
  pageTitle: "CASE STUDY",
  mainTitle: "IT Consulting",
  subtitle: (
    <>
      Unlock Untapped Potential With
      <br />
      digital Compatibility's consulting Services
    </>
  ),
  description:
    "The Modern Business Environment Can Be Difficult To Navigate. The Dedicated Consultants Of Digital Compatibility Offer Crucial Assistance And Support Which Enable You To Identify Prospects And Maximize Your Business Performance.",
  topImage: "/casestudy/icons/vector-8.svg",
  whatMakesTitle: "What Makes Our Consulting Services Special?",
  securityServices: [
    {
      id: 1,
      image: "/casestudy/icons/consulting-mask-group-1@2x.png",
      title: "Identify the Problems",
      description:
        "Digital Compatibility's consulting services begin by identifying the root causes of your business challenges. Our expert consultants conduct thorough assessments to pinpoint areas of improvement and develop tailored strategies to address your specific needs effectively.",
    },
    {
      id: 2,
      image: "/casestudy/icons/consulting-mask-group-2@2x.png",
      title: "Unlock Potential with Ease",
      description:
        "Empower your business to reach its full potential with our consulting expertise. We provide actionable insights, innovative solutions, and practical recommendations that unlock hidden opportunities, optimize processes, and drive sustainable growth for your organization.",
    },
    {
      id: 3,
      image: "/casestudy/icons/consulting-mask-group-3@2x.png",
      title: "Maximize Opportunities",
      description:
        "Seize every opportunity for growth and success with our consulting services. Our strategic guidance, industry expertise, and data-driven approach enable you to make informed decisions, capitalize on emerging trends, and maximize your competitive advantage in the market.",
    },
  ],
  sectionBgImage: "/casestudy/sections/itconsulting.jpg",
  sectionBgImageMobile: "/casestudy/sections/itconsultingmobile.jpg",
  ctaTitle: (
    <>
      Join Digital Compatibility to Transform your business
      <br />
      with our consulting services!
    </>
  ),
  ctaDescription:
    " Reach out to us today to unlock your potential, maximize opportunities, and drive sustainable growth for your organization!",
  serviceCards: [
    {
      id: 2,
      title: "Case Study 2",
      serviceDescription:
        "Unlock Untapped Potential withDigital Compatibility'sConsulting Services.",
      image: "/casestudy/two.png",
      isService: true,
      row: 1,
      description:
        "The modern business environment can be difficult to navigate. The dedicated consultants of Digital Compatibility offer crucial assistance and support which enable you to identify prospects and maximize your business performance.",
      link:"/casestudy/caseStudyItContent2"
    },
    {
      id: 3,
      title: "Case Study 3",
      serviceDescription:
        "Craft Advanced Software withDigital Compatibility Software Engineering Expertise...",
      image: "/casestudy/three.png",
      isService: true,
      row: 1,
      description:
        "In every user based industry, a premium user experience is important. Digital Compatibility’s skilled engineers build innovative software applications with intuitive interfaces and user-centric design principles for you.",
      link:"/casestudy/caseStudyItContent1"
    },
  ],
};

export const CaseStudyIt = (): JSX.Element => {
  const location = useLocation();
  const { contentType } = useParams<{ contentType?: string }>();
  const { state } = location;

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  // Determine which content to use based on URL parameter or fallback to state
  let contentToUse = caseStudyItContent; // Default content
  
  // First check URL parameter
  if (contentType) {
    if (contentType === 'caseStudyItContent') {
      contentToUse = caseStudyItContent;
    } else if (contentType === 'caseStudyItContent1') {
      contentToUse = caseStudyItContent1;
    } else if (contentType === 'caseStudyItContent2') {
      contentToUse = caseStudyItContent2;
    }
  } 
  // Fallback to state for backward compatibility
  else if (state && state.contentType) {
    if (state.contentType === 'caseStudyItContent') {
      contentToUse = caseStudyItContent;
    } else if (state.contentType === 'caseStudyItContent1') {
      contentToUse = caseStudyItContent1;
    } else if (state.contentType === 'caseStudyItContent2') {
      contentToUse = caseStudyItContent2;
    }
  }
  
  return <CaseStudyPage content={contentToUse} />;
};
