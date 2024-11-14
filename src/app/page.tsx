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
      <div className="mt-5 flex justify-between w-full">
        <div className="w-full">
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
