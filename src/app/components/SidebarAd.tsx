"use client";

import { useAd } from "@/hooks/useAd";
import Image from "next/image";
import React from "react";

const SidebarAd = () => {
  const { data: SidebarAdData, isFetching } = useAd();

  return (
    <div className="flex justify-center items-center w-[400px] h-[400px]">
      {isFetching ? (
        <div>Loading</div>
      ) : (
        <Image
          src={
            process.env.NEXT_PUBLIC_API_URL +
            "/" +
            SidebarAdData.sidebarad[0].AdImage?.url
          }
          alt={"sidebar ad"}
          width={400}
          height={400}
          className="w-auto object-cover sm:h-auto"
        />
      )}
    </div>
  );
};

export default SidebarAd;
