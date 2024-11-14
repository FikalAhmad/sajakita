import { notFound } from "next/navigation";
import Image from "next/image";
import getArticle from "./getArticle";
import Sidebar from "../components/Sidebar";

const ArticlePage = async ({ params }: { params: { slug: string } }) => { 
  const { slug } = await params;
  const articleData = await getArticle(slug);

  if (!articleData || !articleData.data || articleData.data.length === 0) {
    notFound();
  }

  const article = articleData.data[0];

  return (
    <article className="py-10">
      <div className="">
        <div className="mb-5 flex flex-row items-center">
          <p className="text-gray-600 text-sm">
            {article.category.name.toUpperCase()}
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
        <div
          className="prose max-w-none lg:col-span-8 text-base"
          dangerouslySetInnerHTML={{ __html: article.Content }}
        ></div>
        <Sidebar />
      </div>
    </article>
  );
};

export default ArticlePage;
