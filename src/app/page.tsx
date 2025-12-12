import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import CTA from "./components/section/CTA";
import Features from "./components/section/Features";
import Hero from "./components/section/Hero";
import Pricing from "./components/section/Pricing";
import Testimonials from "./components/section/Testimonials";

export default function Page() {
  return (
    <>
      <Navbar />
      <Hero />

      <Testimonials />
      <Features />
      <CTA />
      <Pricing />
      <Footer />
    </>
  );
}
