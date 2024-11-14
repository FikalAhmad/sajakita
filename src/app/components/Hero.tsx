import Image from "next/image";
import React from "react";
import thumbnail from "@/../public/thumbnail.png";

const Hero = () => {
  return (
    <article className="grid grid-cols-12 gap-8 mb-12 items-center">
      <Image
        alt="Featured image"
        className="rounded-lg col-span-5 w-full h-full object-cover"
        width={525}
        height={322}
        src={thumbnail}
      />
      <div className="space-y-4 col-span-7">
        <div className="text-sm">Author</div>
        <h1 className="text-4xl font-bold">This is example Title Page</h1>
        <p className="text-gray-600 text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et sem
          leo. Nunc turpis urcu, porttitor a orci at, vestibulum aliquam mi.
          Vivamus arcu nisi, ornare nec eleifend at, placerat non velit. Cras et
          felis posuere, aliquam risus vitae.
        </p>
        <div className="flex items-center gap-4 text-sm text-gray-500">
          <span>Categories</span>
          <span className="h-1.5 w-1.5 rounded-full bg-black"></span>
          <span>11 November 2024</span>
        </div>
      </div>
    </article>
  );
};

export default Hero;
