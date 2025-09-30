import FAQ from "@/components/home/Faq";
import HeroCarousel, {heroSlides} from "@/components/home/Hero";
import LatestProjects from "@/components/home/LatestProjects";
import ServicesSection from "@/components/home/ServiceSection";
import Testimonials from "@/components/home/Testimonials";
import WhyChoose from "@/components/home/WhyChoose";

export default function Home() {
  return (
    <div className="relative w-full">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50"></div>
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] opacity-50"></div>

      <div className="items-center justify-center ">
        <HeroCarousel slides={heroSlides} />
        <ServicesSection />
        <WhyChoose />
        <LatestProjects />
        <Testimonials />
        <FAQ />
      </div>
    </div>
  );
}
