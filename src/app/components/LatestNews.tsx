"use client";

import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import ArticleCard from "./ui/ArticleCard";
import { usePosts } from "@/hooks/usePosts";
import { PostsData } from "../types/PostTypes";
const LatestNews = () => {
  const { data: latestNewsData, isFetching, isError } = usePosts();
  if (isFetching) {
    <div>Loading</div>;
  }
  if (isError) {
    <div>Error</div>;
  }
  return (
    <section className="my-10">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">Berita Terbaru</h2>
        <Button variant={"link"} asChild>
          <Link className="text-lg" href="/kategori/beritaterbaru">
            Lihat Semua
          </Link>
        </Button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
        {latestNewsData?.data
          .slice(0, 5)
          ?.reverse()
          .map((item: PostsData) => {
            return (
              <Link key={item.id} href={`/${item.slug}`}>
                <ArticleCard
                  thumbnail={
                    process.env.NEXT_PUBLIC_API_URL + item.thumbnail.url
                  }
                  author={item.author.name}
                  title={item.title}
                  content={item.Headline}
                  category={item.category.name}
                  date={item.updatedAt}
                />
              </Link>
            );
          })}
      </div>
    </section>
  );
};

export default LatestNews;
