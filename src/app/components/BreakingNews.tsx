import React from "react";
import Marquee from "react-fast-marquee";

const BreakingNews = () => {
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
        <div>Test Marquee</div>
        <div>Test Marquee</div>
        <div>Test Marquee</div>
      </Marquee>
    </div>
  );
};

export default BreakingNews;
