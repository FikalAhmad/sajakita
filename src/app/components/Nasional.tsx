"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ArticleCardHalf from "./ui/ArticleCardHalf";
import { useCategories } from "@/hooks/useCategories";
import { PostsData } from "../types/PostTypes";
import { formatTanggal } from "@/components/formatTanggal";

const Nasional = () => {
  const { data: nasionalData, isFetching } = useCategories("nasional");
  if (isFetching) {
    <div>Loading</div>;
  }

  return (
    <section className="my-10">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl md:text-3xl font-bold">Nasional</h2>
        <Button variant={"link"} asChild>
          <Link className="text-lg" href="/kategori/nasional/1">
            Lihat Semua
          </Link>
        </Button>
      </div>

      <div className="flex flex-col gap-10">
        {nasionalData
          .reverse()
          .slice(0, 5)
          .map((item: PostsData) => {
            return (
              <Link key={item.id} href={`/${item.slug}`}>
                <ArticleCardHalf
                  thumbnail={
                    process.env.NEXT_PUBLIC_API_URL + "/" + item.thumbnail.url
                  }
                  author={item.author.name}
                  title={item.title}
                  content={item.Headline}
                  category={item.category.name}
                  date={formatTanggal(item.updatedAt)}
                />
              </Link>
            );
          })}
      </div>
    </section>
  );
};

export default Nasional;
