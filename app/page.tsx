import CTAWhatsApp from "@/components/CTAWhatsApp";
import FAQ from "@/components/Faq";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import TestimonialsSwiper from "@/components/TestimonialsSwiper";
import TopBar from "@/components/TopBar";
import WhyChoose from "@/components/WhyChoose";

export default function Home() {
  return (
    <div className="w-full p-4 md:px-28">
      <TopBar />
      <Hero />

      <Services />
      <WhyChoose />
      <TestimonialsSwiper />
      <CTAWhatsApp />
      <FAQ />
      <Footer />
    </div>
  );
}
