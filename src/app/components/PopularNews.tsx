import React from "react";
import ArticleCard from "./ui/ArticleCard";
import thumbnail from "@/../public/thumbnail.png";
import Image from "next/image";

const PopularNews = () => {
  return (
    <div className="grid grid-cols-3 gap-5">
      <div className="row-span-2 w-[230px]">
        <ArticleCard
          thumbnail={thumbnail}
          author="Author"
          title="This is example Title Page"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et
        sem leo..."
          category="Categories"
          date="11 November 2024"
        />
      </div>
      <div className="relative row-span-2">
        <Image
          src={thumbnail}
          alt="News thumbnail"
          width={500}
          height={500}
          className="h-[500px] object-cover rounded-xl"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50 rounded-xl"></div>
        <div className="flex flex-col w-full gap-3 absolute p-9 bottom-0 text-white">
          <div className="text-lg">Author</div>
          <h3 className="font-bold text-3xl">This is example Title Page</h3>
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et sem
            leo...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            et sem leo...
          </p>
          <div className="flex items-center gap-3 text-lg">
            <span>Categories</span>
            <span className="h-1 w-1 rounded-full bg-white"></span>
            <span>11 November 2024</span>
          </div>
        </div>
      </div>

      <div>
        <Image
          src={thumbnail}
          alt="News thumbnail"
          width={300}
          height={150}
          className="h-[150px] object-cover rounded-xl"
        />
        <div className="w-full w-max-[300px] flex flex-col">
          <div className="text-xs">Author</div>
          <h2 className="text-lg font-bold">This is example title page</h2>
          <div className="flex items-center gap-3 text-sm text-gray-500">
            <span>Categories</span>
            <span className="h-1 w-1 rounded-full bg-black"></span>
            <span>11 November 2024</span>
          </div>
        </div>
      </div>
      <div>
        <Image
          src={thumbnail}
          alt="News thumbnail"
          width={300}
          height={150}
          className="h-[150px] object-cover rounded-xl"
        />
        <div className="w-full w-max-[300px] flex flex-col">
          <div className="text-xs">Author</div>
          <h2 className="text-lg font-bold">This is example title page</h2>
          <div className="flex items-center gap-3 text-sm text-gray-500">
            <span>Categories</span>
            <span className="h-1 w-1 rounded-full bg-black"></span>
            <span>11 November 2024</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularNews;
