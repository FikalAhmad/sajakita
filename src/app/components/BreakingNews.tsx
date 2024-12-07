"use client";
import { usePosts } from "@/hooks/usePosts";
import React from "react";
import Marquee from "react-fast-marquee";
import { PostsData } from "../types/PostTypes";

const BreakingNews = () => {
  const { data, isFetching } = usePosts();
  if (isFetching) {
    <div>Loading</div>;
  }
  return (
    <div className="h-8 border-b-4 border-black flex group">
      <div className="bg-black w-48 h-full flex gap-2 items-center justify-center">
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-red-600"></span>
        </span>
        <div className="text-white">Breaking News</div>
      </div>
      <Marquee pauseOnHover speed={50}>
        {data.slice(0, 5).map((article: PostsData) => (
          <div className="px-5" key={article.id}>
            {article.title}
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default BreakingNews;
