import TopAd from "./components/TopAd";
import Hero from "./components/Hero";
import LatestNews from "./components/LatestNews";
import PopularNews from "./components/PopularNews";
import Sidebar from "./components/Sidebar";
import Bisnis from "./components/Bisnis";
import Nasional from "./components/Nasional";
import Entertainment from "./components/Entertainment";

// "use client"
const Home = () => {
  return (
    <div>
      <TopAd />
      <Hero />
      <LatestNews />
      <PopularNews />
      <LatestNews />
      <div className="mt-5 grid grid-cols-12 gap-5 w-full">
        <div className="col-span-8">
          <Entertainment />
          <Nasional />
          <Bisnis />
        </div>
        <Sidebar />
      </div>
    </div>
  );
};

export default Home;
