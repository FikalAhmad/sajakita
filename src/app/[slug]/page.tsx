"use client";

import Image from "next/image";
import { useArticle } from "@/hooks/useArticle";
import { useParams } from "next/navigation";
import Sidebar from "../components/Sidebar";
import TopAd from "../components/TopAd";
import Link from "next/link";

const ArticlePage = () => {
  const params = useParams<{ slug: string }>();
  const { data, isFetching } = useArticle(params.slug);

  if (isFetching) {
    return <div className="text-center">Loading...</div>;
  }

  const article = data[0];

  return (
    <article className="">
      <TopAd />
      <div className="">
        <div className="mb-5 flex flex-row items-center">
          <p className="text-gray-600 text-sm">
            <Link href={`/kategori/${article.category.slug}/1`}>
              {article.category.name.toUpperCase()}
            </Link>
          </p>
          <Image src="/dot.svg" width={20} height={20} alt="." />
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
            src={process.env.NEXT_PUBLIC_API_URL + "/" + article.thumbnail.url}
            className="rounded mb-5 object-cover"
            width={800}
            height={300}
            alt={article.title}
            priority
          />
          <div
            className="prose"
            dangerouslySetInnerHTML={{ __html: article.Content }}
          />
        </div>
        <Sidebar />
      </div>
    </article>
  );
};

export default ArticlePage;
