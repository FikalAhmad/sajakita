"use client";

import Image from "next/image";
import { useArticle } from "@/hooks/useArticle";
import { useParams } from "next/navigation";
import Sidebar from "../components/Sidebar";
import TopAd from "../components/TopAd";

const ArticlePage = () => {
  const params = useParams<{ slug: string }>();
  const { data, isError, isFetching } = useArticle(params.slug);

  if (isFetching) {
    return <div className="text-center">Loading...</div>;
  }

  if (isError) {
    return <div className="text-center">Error</div>;
  }

  const article = data.data[0];

  return (
    <article className="">
      <TopAd />
      <div className="">
        <div className="mb-5 flex flex-row items-center">
          <p className="text-gray-600 text-sm">
            {article.category.name.toUpperCase()}
          </p>
          <Image src="/dot.svg" width={20} height={20} alt="." priority />
          <p className="text-gray-600 text-sm">
            {new Date(article.publishedAt).toLocaleDateString()}
          </p>
        </div>
        <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
        <div className="flex flex-row items-center gap-2">
          <Image src="/avatar.svg" width={20} height={20} alt="Avatar" />
          <p className="text-sm">{article.author.name}</p>
        </div>
      </div>
      <div className="lg:grid lg:grid-cols-12 gap-5 mt-10">
        <div className="prose max-w-none lg:col-span-8 text-base">
          <Image
            src={article.thumbnail.url}
            className="rounded mb-5 object-cover"
            width={800}
            height={300}
            alt={article.title}
            priority
          />
          <div
            className="prose"
            dangerouslySetInnerHTML={{ __html: article?.Content }}
          />
        </div>
        <Sidebar marginTop={0} />
      </div>
    </article>
  );
};

export default ArticlePage;
