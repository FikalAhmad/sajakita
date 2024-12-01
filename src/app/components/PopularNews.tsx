"use client";

import React from "react";
import ArticleCard from "./ui/ArticleCard";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePosts } from "@/hooks/usePosts";
import { PostsData } from "../types/PostTypes";
import { formatTanggal } from "@/components/formatTanggal";

const PopularNews = () => {
  const { data: popularNews, isFetching, isError } = usePosts();
  if (isFetching) {
    <div>Loading</div>;
  }
  if (isError) {
    <div>Error</div>;
  }
  console.log(popularNews.data.map((item: PostsData) => item.slug));

  const popularOne = popularNews.data[0];
  const popularTwo = popularNews.data[1];
  const popularThree = popularNews.data[2];
  const popularFour = popularNews.data[3];

  return (
    <section className="my-10">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl md:text-3xl font-bold">Berita Populer</h2>
        <Button variant={"link"} asChild>
          <Link className="text-lg" href="#">
            Lihat Semua
          </Link>
        </Button>
      </div>
      <div className="hidden lg:grid grid-cols-8 gap-5 justify-items-center items-center">
        <div className="row-span-2 col-span-2 w-[230px]">
          <ArticleCard
            thumbnail={
              process.env.NEXT_PUBLIC_API_URL + "/" + popularOne.thumbnail.url
            }
            author={popularOne.author?.name}
            title={popularOne.title}
            category={popularOne.category?.name}
            date={popularOne.publishedAt}
            content={popularOne.Headline}
            fullWidth={false}
          />
        </div>
        <div className="relative row-span-2 col-span-4 w-full">
          <Image
            src={
              process.env.NEXT_PUBLIC_API_URL + "/" + popularTwo.thumbnail.url
            }
            alt={popularTwo.title}
            width={500}
            height={500}
            className="w-full h-[500px] object-cover rounded-xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50 rounded-xl"></div>
          <div className="flex flex-col w-full gap-3 absolute p-9 bottom-0 text-white">
            <div className="text-lg">{popularTwo.author?.name}</div>
            <h3 className="font-bold text-3xl">{popularTwo.title}</h3>
            <p className="text-lg">{popularTwo.Headline}</p>
            <div className="flex items-center gap-3 text-lg">
              <span>{popularTwo.category?.name}</span>
              <span className="h-1 w-1 rounded-full bg-white"></span>
              <span>{formatTanggal(popularTwo.publishedAt)}</span>
            </div>
          </div>
        </div>

        <div className="col-span-2">
          <Image
            src={
              process.env.NEXT_PUBLIC_API_URL + "/" + popularThree.thumbnail.url
            }
            alt={popularThree.title}
            width={300}
            height={150}
            className="h-[150px] object-cover rounded-xl"
          />
          <div className="w-full max-w-[300px] flex flex-col mt-3 gap-2">
            <div className="text-xs">{popularThree.author?.name}</div>
            <h2 className="text-lg font-bold">{popularThree.title}</h2>
            <div className="flex items-center gap-3 text-xs text-gray-500">
              <span>{popularThree.category?.name}</span>
              <span className="h-1 w-1 rounded-full bg-black"></span>
              <span>{formatTanggal(popularThree.publishedAt)}</span>
            </div>
          </div>
        </div>
        <div className="col-span-2">
          <Image
            src={
              process.env.NEXT_PUBLIC_API_URL + "/" + popularFour.thumbnail.url
            }
            alt={popularFour.title}
            width={300}
            height={150}
            className="h-[150px] object-cover rounded-xl"
          />
          <div className="w-full max-w-[300px] flex flex-col mt-3 gap-2">
            <div className="text-xs">{popularFour.author?.name}</div>
            <h2 className="text-lg font-bold">{popularFour.title}</h2>
            <div className="flex items-center gap-3 text-xs text-gray-500">
              <span>{popularFour.category?.name}</span>
              <span className="h-1 w-1 rounded-full bg-black"></span>
              <span>{formatTanggal(popularFour.publishedAt)}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:hidden gap-5">
        {popularNews.data.slice(0, 4)?.map((item: PostsData) => {
          return (
            <ArticleCard
              key={item.id}
              thumbnail={
                process.env.NEXT_PUBLIC_API_URL + "/" + item.thumbnail.url
              }
              author={item.author?.name}
              title={item.title}
              category={item.category?.name}
              date={item.publishedAt}
              content={item.Headline}
              fullWidth={true}
            />
          );
        })}
      </div>
    </section>
  );
};

export default PopularNews;
