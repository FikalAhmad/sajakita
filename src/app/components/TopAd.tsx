"use client";

import { useAd } from "@/hooks/useAd";
import Image from "next/image";
import React from "react";

const TopAd = () => {
  const { data: topAdData } = useAd();

  return (
    <div className="w-full flex justify-center">
      <div className="w-[1280px] h-32 flex justify-center items-center sm:my-10">
        <Image
          src={
            process.env.NEXT_PUBLIC_API_URL +
            "/" +
            topAdData.topad[0].TopAdImage?.url
          }
          alt={"top ad"}
          width={1280}
          height={128}
          className="w-auto object-cover sm:h-auto"
          priority
        />
      </div>
    </div>
  );
};

export default TopAd;
