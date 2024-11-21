import TopAd from "./components/TopAd";
import Hero from "./components/Hero";
import LatestNews from "./components/LatestNews";
import PopularNews from "./components/PopularNews";
import Sidebar from "./components/Sidebar";
import Bisnis from "./components/Bisnis";
import Nasional from "./components/Nasional";
import Entertainment from "./components/Entertainment";
import Hydration from "@/components/Hydration";

const Home = async () => {
  return (
    <>
      <Hydration>
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
          <Sidebar marginTop={10}/>
        </div>
      </Hydration>
    </>
  );
};

export default Home;
