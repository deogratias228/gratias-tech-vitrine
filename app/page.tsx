import CTAWhatsApp from "@/components/CTAWhatsApp";
import FAQ from "@/components/Faq";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HeroCarousel, {exampleSlides} from "@/components/home/Hero";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import WhyChoose from "@/components/WhyChoose";

export default function Home() {
  return (
    <div className="bg-blue-50 w-full">
      <div className="items-center justify-center">
        {/* <Hero /> */}
        <HeroCarousel slides={exampleSlides} />
        <Services />
        <WhyChoose />
        <Testimonials />
        <CTAWhatsApp />
        <FAQ />
        <Footer />
      </div>
    </div>
  );
}
