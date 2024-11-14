import Image from "next/image";
import React from "react";
import thumbnail from "@/../public/thumbnail.png";

const Hero = () => {
  console.log(thumbnail);

  return (
    <article className="grid md:grid-cols-2 gap-8 mb-12 items-center">
      <Image
        src={thumbnail}
        alt="Featured image"
        className="object-cover"
        width={450}
        height={450}
        priority
      />

      <div className="space-y-4">
        <div className="text-sm">Author</div>
        <h1 className="text-3xl font-bold">This is example Title Page</h1>
        <p className="text-gray-600 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et sem
          leo. Nunc turpis urcu, porttitor a orci at, vestibulum aliquam mi.
          Vivamus arcu nisi, ornare nec eleifend at, placerat non velit. Cras et
          felis posuere, aliquam risus vitae.
        </p>
        <div className="flex items-center gap-4 text-sm text-gray-500">
          <span>Categories</span>
          <span className="h-1 w-1 rounded-full bg-black"></span>
          <span>11 November 2024</span>
        </div>
      </div>
    </article>
  );
};

export default Hero;
