import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import TechStack from "@/components/landing/TechStack";
import GettingStarted from "@/components/landing/GettingStarted";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Features />
      <TechStack />
      <GettingStarted />
      <Footer />
    </div>
  );
};

export default Index;
