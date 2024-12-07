// components/MyClientComponent.js

"use client"; // Marks this as a client-side component

import dynamic from "next/dynamic";

// Dynamically import components with ssr: false
const Infotainment = dynamic(() => import("./Infotainment"), {
  ssr: false,
});
const Nasional = dynamic(() => import("./Nasional"), {
  ssr: false,
});
const Bisnis = dynamic(() => import("./Bisnis"), { ssr: false });

const CategoriesNoSSR = () => {
  return (
    <div className="w-full">
      <Infotainment />
      <Nasional />
      <Bisnis />
    </div>
  );
};

export default CategoriesNoSSR;
