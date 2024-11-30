"use client";

import ArticleCard from "@/app/components/ui/ArticleCard";
import { useCategoryPages } from "@/hooks/useCategories";
import { useParams } from "next/navigation";
import Sidebar from "@/app/components/Sidebar";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { PostsData } from "@/app/types/PostTypes";

const CategoryPages = () => {
  const params = useParams<{ kategori: string; page: string }>();
  const { data, isFetching, isError } = useCategoryPages(
    params.kategori,
    params.page
  );

  if (isFetching) {
    return <div className="text-center">Loading...</div>;
  }

  if (isError) {
    return <div className="text-center">Error</div>;
  }

  return (
    <div className="py-10">
      <h1 className="text-center font-bold uppercase mb-10">
        {params.kategori}
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 justify-center">
        <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 mx-auto sm:mx-0 gap-5 justify-items-center">
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
          <Sidebar marginTop={0} />
        </div>
      </div>
      <Pagination className="mt-10">
        <PaginationContent>
          {params.page == "1" ? null : (
            <PaginationPrevious
              href={`/kategori/${params.kategori}/${parseInt(params.page) - 1}`}
            />
          )}
          {Array.from({ length: data.meta.pagination.pageCount }).map(
            (_, index) => (
              <PaginationItem key={index}>
                <PaginationLink
                  href={`/kategori/${params.kategori}/${index + 1}`}
                >
                  {index + 1}
                </PaginationLink>
              </PaginationItem>
            )
          )}
          <PaginationItem>
            <PaginationNext
              href={`/kategori/${params.kategori}/${parseInt(params.page) + 1}`}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default CategoryPages;
