import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import MusicSection from "../components/MusicSection";
import ArtistsSection from "../components/ArtistsSection";
import RadioSection from "../components/RadioSection";
import SalesSection from "../components/SalesSection";
import SubscribeSection from "../components/SubscribeSection";
import Footer from "../components/Footer";
import CustomCursor from "../components/CustomCursor";
import NoiseOverlay from "../components/NoiseOverlay";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <CustomCursor />
      <NoiseOverlay />
      <Navigation />

      <main>
        <Hero />
        <MusicSection />
        <ArtistsSection />
        <RadioSection />
        <SalesSection />
        <SubscribeSection />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
