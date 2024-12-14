"use client";

import Sidebar from "@/app/components/Sidebar";
import ArticleCard from "@/app/components/ui/ArticleCard";
import { PostsData } from "@/app/types/PostTypes";
import { useSearch } from "@/hooks/useSearch";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";

const SearchPage = () => {
  const params = useParams<{ keyword: string }>();

  const { data: searchData, isFetching } = useSearch(params.keyword);

  if (isFetching) {
    return <div>Loading</div>;
  }

  return (
    <div className="py-10">
      <h1 className="text-center font-bold mb-10">
        {" "}
        Ini adalah hasil berita yang anda cari:
        {params.keyword}
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 justify-center">
        <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 mx-auto sm:mx-0 gap-5 justify-items-center">
          {searchData.map((article: PostsData) => (
            <Link key={article.id} href={`/${article.slug}`}>
              <ArticleCard
                key={article.id}
                thumbnail={
                  process.env.NEXT_PUBLIC_API_URL + "/" + article.thumbnail?.url
                }
                author={article.author.name}
                title={article.title}
                category={article.category.name}
                date={article.publishedAt}
                content={article.Headline}
              />
            </Link>
          ))}
        </div>
        <div className="lg:col-span-4">
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
