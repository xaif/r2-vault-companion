import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import FinderDrive from "@/components/landing/FinderDrive";
import MenuBar from "@/components/landing/MenuBar";
import Browse from "@/components/landing/Browse";
import Insights from "@/components/landing/Insights";
import Setup from "@/components/landing/Setup";
import IPhone from "@/components/landing/IPhone";
import Trust from "@/components/landing/Trust";
import Install from "@/components/landing/Install";
import Footer from "@/components/landing/Footer";

const Index = () => (
  <>
    <Navbar />
    <main>
      <Hero />
      <FinderDrive />
      <MenuBar />
      <Browse />
      <Insights />
      <Setup />
      <IPhone />
      <Trust />
      <Install />
    </main>
    <Footer />
  </>
);

export default Index;
