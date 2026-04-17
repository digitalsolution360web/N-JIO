import Hero from "./components/Hero";
import ImpactStats from "./components/ImpactStats";
import Activities from "./components/Activities";
import AboutMissionVision from "./components/AboutMissionVision";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section with Slider */}
      <Hero />

      {/* Animated Impact Numbers */}
      <ImpactStats />

      {/* About, Mission, Vision, Why Choose Us, CTA */}
      <AboutMissionVision />

      {/* Our Activities Section */}
      <Activities />

    </div>
  );
}
