import CTAWhatsApp from "@/components/CTAWhatsApp";
import FAQ from "@/components/Faq";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import TopBar from "@/components/TopBar";
import WhyChoose from "@/components/WhyChoose";
import WhyChooseSimple from "@/components/WhyChooseSimple";

export default function Home() {
  return (
    <div className="">
      <div className="w-full p-4 md:px-28">
        <TopBar />
      </div>
      <div className="w-full p-0 md:px-28">
        <Hero />
      </div>
      <div className="w-full p-4 md:px-28">
        <Services />
        <WhyChoose />
        {/* <WhyChooseSimple /> */}
        <Testimonials />
        <CTAWhatsApp />
        <FAQ />
        <Footer />
      </div>
    </div>
  );
}
