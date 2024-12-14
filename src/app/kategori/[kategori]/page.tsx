"use client";

import ArticleCard from "@/app/components/ui/ArticleCard";
import { useCategories } from "@/hooks/useCategories";
import { useParams } from "next/navigation";
import { PostsData } from "../../types/PostTypes";
import Sidebar from "@/app/components/Sidebar";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const CategoryPage = () => {
  const params = useParams<{ kategori: string }>();
  const { data, isFetching, isError } = useCategories(params.kategori);

  if (isFetching) {
    return <div className="text-center">Loading...</div>;
  }

  if (isError) {
    return <div className="text-center">Error</div>;
  }

  console.log(data);

  return (
    <div className="py-10">
      <h1 className="text-center font-bold uppercase mb-10">
        {params.kategori}
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 justify-center">
        <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 mx-auto sm:mx-0 gap-5 justify-items-center">
          {data?.data?.map((article: PostsData) => (
            <ArticleCard
              key={article.id}
              thumbnail={
                process.env.NEXT_PUBLIC_API_URL + "/" + article.thumbnail?.url
              }
              author={article.author?.name}
              title={article.title}
              category={article.category?.name}
              date={article.publishedAt}
              content={article.Headline}
            />
          ))}
        </div>
        <div className="lg:col-span-4">
          <Sidebar />
        </div>
      </div>
      <Pagination className="mt-10">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default CategoryPage;
