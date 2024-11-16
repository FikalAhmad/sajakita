import TopAd from "./components/TopAd";
import Hero from "./components/Hero";
import LatestNews from "./components/LatestNews";
import PopularNews from "./components/PopularNews";
import Sidebar from "./components/Sidebar";
import Bisnis from "./components/Bisnis";
import Nasional from "./components/Nasional";
import Entertainment from "./components/Entertainment";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { fetchPosts } from "@/queries/fetchPosts";

async function fetchServerData() {
  const queryClient = new QueryClient();

  // Prefetch data di server
  await queryClient.prefetchQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  return dehydrate(queryClient);
}

const Home = async () => {
  const dehydrateState = await fetchServerData();
  return (
    <div>
      <HydrationBoundary state={dehydrateState}>
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
      </HydrationBoundary>
    </div>
  );
};

export default Home;
