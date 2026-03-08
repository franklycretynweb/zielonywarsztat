import Hero from "./components/Hero";
import TrustBar from "./components/TrustBar";
import Services from "./components/Services";
import WhyGarden from "./components/WhyGarden";
import MeetPiotr from "./components/MeetPiotr";
import WhyUs from "./components/WhyUs";
import HowItWorks from "./components/HowItWorks";

import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import ServiceArea from "./components/ServiceArea";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingCTA from "./components/FloatingCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Services />
      <WhyGarden />
      <MeetPiotr />
      <WhyUs />
      <HowItWorks />

      <Testimonials />
      <FAQ />
      <ServiceArea />
      <Contact />
      <Footer />
      <FloatingCTA />
    </>
  );
}
