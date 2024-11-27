import React from "react";
import ArticleCard from "./ui/ArticleCard";
import thumbnail from "@/../public/thumbnail.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const PopularNews = () => {
  return (
    <section className="my-10">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">Berita Populer</h2>
        <Button variant={"link"} asChild>
          <Link className="text-lg" href="#">
            Lihat Semua
          </Link>
        </Button>
      </div>
      <div className="grid grid-cols-8 gap-5 justify-items-center items-center">
        <div className="row-span-2 col-span-2 w-[230px]">
          <ArticleCard
            thumbnail={"/"}
            author="Author"
            title="This is example Title Page"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et
        sem leo..."
            category="Categories"
            date="11 November 2024"
          />
        </div>
        <div className="relative row-span-2 col-span-4 w-full">
          <Image
            src={thumbnail}
            alt="News thumbnail"
            width={500}
            height={500}
            className="w-full h-[500px] object-cover rounded-xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50 rounded-xl"></div>
          <div className="flex flex-col w-full gap-3 absolute p-9 bottom-0 text-white">
            <div className="text-lg">Author</div>
            <h3 className="font-bold text-3xl">This is example Title Page</h3>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et
              sem leo...Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sed et sem leo...
            </p>
            <div className="flex items-center gap-3 text-lg">
              <span>Categories</span>
              <span className="h-1 w-1 rounded-full bg-white"></span>
              <span>11 November 2024</span>
            </div>
          </div>
        </div>

        <div className="col-span-2">
          <Image
            src={thumbnail}
            alt="News thumbnail"
            width={300}
            height={150}
            className="h-[150px] object-cover rounded-xl"
          />
          <div className="w-full max-w-[300px] flex flex-col mt-3 gap-2">
            <div className="text-xs">Author</div>
            <h2 className="text-lg font-bold">This is example title page</h2>
            <div className="flex items-center gap-3 text-xs text-gray-500">
              <span>Categories</span>
              <span className="h-1 w-1 rounded-full bg-black"></span>
              <span>11 November 2024</span>
            </div>
          </div>
        </div>
        <div className="col-span-2">
          <Image
            src={thumbnail}
            alt="News thumbnail"
            width={300}
            height={150}
            className="h-[150px] object-cover rounded-xl"
          />
          <div className="w-full max-w-[300px] flex flex-col mt-3 gap-2">
            <div className="text-xs">Author</div>
            <h2 className="text-lg font-bold">This is example title page</h2>
            <div className="flex items-center gap-3 text-xs text-gray-500">
              <span>Categories</span>
              <span className="h-1 w-1 rounded-full bg-black"></span>
              <span>11 November 2024</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularNews;
