import Hero from "./components/Hero";
import PainSection from "./components/PainSection";
import TrustBar from "./components/TrustBar";
import Services from "./components/Services";
import MeetPiotr from "./components/MeetPiotr";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingCTA from "./components/FloatingCTA";

export default function Home() {
  return (
    <main id="main-content">
      <Hero />
      <PainSection />
      <TrustBar />
      <Services />
      <MeetPiotr />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
      <FloatingCTA />
    </main>
  );
}
