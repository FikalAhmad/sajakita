import TopAd from "./components/TopAd";
import Hero from "./components/Hero";
import LatestNews from "./components/LatestNews";
import PopularNews from "./components/PopularNews";

// "use client"
export default function Home() {
  return (
    <div>
      <TopAd />
      <Hero />
      <LatestNews />
      <PopularNews />
      <LatestNews />
    </div>
  );
}
