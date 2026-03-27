import GlassHeader from "@/components/GlassHeader";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import GallerySection from "@/components/GallerySection";
import ContactSection from "@/components/ContactSection";
import FloatingCTA from "@/components/FloatingCTA";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <GlassHeader />
    <HeroSection />
    <AboutSection />
    <GallerySection />
    <ContactSection />
    <Footer />
    <FloatingCTA />
  </div>
);

export default Index;
