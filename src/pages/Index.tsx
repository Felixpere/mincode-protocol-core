import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import LatestStrip from "../components/LatestStrip";
import FounderSection from "../components/FounderSection";
import MusicSection from "../components/MusicSection";
import EventsSection from "../components/EventsSection";
import RadioSection from "../components/RadioSection";
import SpacecastSection from "../components/SpacecastSection";
import ArtistsSection from "../components/ArtistsSection";
import PlaylistSection from "../components/PlaylistSection";
import SalesSection from "../components/SalesSection";
import NewsSection from "../components/NewsSection";
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
        <LatestStrip />
        <FounderSection />
        <MusicSection />
        <EventsSection />
        <RadioSection />
        <SpacecastSection />
        <ArtistsSection />
        <PlaylistSection />
        <SalesSection />
        <NewsSection />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
