import TopAd from "./components/TopAd";
import Hero from "./components/Hero";
import LatestNews from "./components/LatestNews";
import PopularNews from "./components/PopularNews";
import Sidebar from "./components/Sidebar";
import Hydration from "@/components/Hydration";
import CategoriesNoSSR from "./components/CategoriesNoSSR";

const Home = async () => {
  return (
    <>
      <Hydration>
        <TopAd />
        <Hero />
        <LatestNews />
        <PopularNews />
        {/* <LatestNews /> */}
        <div className="mt-5 flex justify-between gap-5 w-full">
          <CategoriesNoSSR />
          <Sidebar />
        </div>
      </Hydration>
    </>
  );
};

export default Home;
