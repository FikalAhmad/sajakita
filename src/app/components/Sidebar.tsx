"use client";

import Link from "next/link";
import Image from "next/image";
import SidebarAd from "./SidebarAd";
import { usePosts } from "@/hooks/usePosts";
import { PostsData } from "../types/PostTypes";

const Sidebar = () => {
  const { data: recommendedData, isFetching } = usePosts();

  if (isFetching) {
    return <div>Loading</div>;
  }

  const recommended = recommendedData.sort(() => Math.random() - 0.5);

  return (
    <div className="hidden lg:block w-[400px] max-w-[400px]">
      <div className="sticky top-10">
        <div className="flex justify-between items-center mb-6">
          <h2 className="font-bold text-3xl">Berita Rekomendasi</h2>
        </div>
        <div className="flex flex-col gap-5">
          {recommended.slice(0, 5).map((item: PostsData) => (
            <article key={item.id}>
              <div className="flex gap-2">
                <Image
                  src={process.env.NEXT_PUBLIC_API_URL + item.thumbnail.url}
                  alt="Article thumbnail"
                  width={100}
                  height={100}
                  className="h-[100px] w-[100px] rounded-xl object-cover"
                />
                <div className="flex-1 space-y-2">
                  <Link href={`/${item.slug}`}>
                    <h3 className="font-semibold line-clamp-3 text-ellipsis">
                      {item.title}
                    </h3>
                  </Link>
                  <div className="flex items-center gap-3 text-xs text-gray-600">
                    <span>{item.category.name}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="my-10">
          <SidebarAd />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
