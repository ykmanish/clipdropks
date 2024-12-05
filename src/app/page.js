import "@/components/lenis.css";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import TestBoba from "@/components/TestBoba";
import WordPlay from "@/components/WordPlay";
import Stats from "@/components/Statonova/Stats";
import Image from "next/image";
import Services from "@/components/Services";
import TestService from "@/components/TestService";
import Bawaal from "@/components/Bawaal";
import BottomTab from "@/components/BottomTab";
import DivideService from "@/components/DivideService";
import SmoothScroll from "@/components/SmoothScroll";
import ExBento from "@/components/ExBento";
import Approach from "@/components/Approach";
import CourseFeatures from "@/components/Values/CourseFeatures";
import BawaalTwo from "@/components/BawaalTwo";
import CTAOne from "@/components/CTAOne";
import Footer from "@/components/Footer";
import Belief from "@/components/Belief";
import TestTesti from "@/components/Testimonials/TestTesti";
import Choose from "@/components/WhyPeople/Choose";
import ClientSlider from "@/components/ClientSlider/ClientSlider";
import ClientSliderCard from "@/components/ClientSlider/ClientSliderCard";
import ClientPop from "@/components/ClientPopup/ClientPop";
import Service from "@/components/Sectors/Sector";
import FlowChart from "@/components/Flow/Flow";
import TheDees from "@/components/Flow/TheDees";
import Domain from "@/components/Domain/Domain";
import FourDee from "@/components/FourDee/FourDee";
import ServiceSlide from "@/components/Services/ServiceSlide";
import Standard from "@/components/Standard/Standard";
import Review from "@/components/ClientRev/Review";
import Sector from "@/components/Sectors/Sector";
import Stato from "@/components/Statonova/Stato";
import Statolova from "@/components/Statonova/Statolova";
import Marquee from "@/components/Marquee";
import LogoSlider from "./about-us/LogoSlider";
import BeHeTe from "@/components/BeHeTe";
import HomeAbout from "@/components/HomeAbout/HomeAbout";
import ClipBox from "@/components/HomeAbout/ClipBox";
import StickyDee from "@/components/Sticky/StickyDee";
import Dees from "./about-us/Dees/Dees";


export default function Home() {
  

  return (
    <>
      <ClipBox />
      <HomeAbout />
      <LogoSlider />
     
      {/* <BeHeTe/> */}
      {/* <ClientPop/> */}

      <ServiceSlide />
      <Belief/>
      <Stats />

      {/* <Sector/> */}

      <Standard />
      
      {/* <Dees/> */}
      {/* <StickyDee/> */}
      {/* <FourDee /> */}
      <Review />

      {/* <Marquee/> */}

      {/* <Domain/> */}

      <CTAOne />
    </>
  );
}
