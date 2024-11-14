import Link from "next/link";
import React from "react";
import thumbnail from "@/../public/thumbnail.png";
import { Button } from "@/components/ui/button";
import ArticleCard from "./ui/ArticleCard";

const LatestNews = () => {
  return (
    <section className="my-10">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">Berita Terbaru</h2>
        <Button variant={"link"} asChild>
          <Link className="text-lg" href="#">
            Lihat Semua
          </Link>
        </Button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
        {[1, 2, 3, 4, 5].map((item) => (
          <ArticleCard
            key={item}
            thumbnail={thumbnail}
            author="Author"
            title="This is example Title Page"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et
              sem leo..."
            category="Categories"
            date="11 November 2024"
          />
        ))}
      </div>
    </section>
  );
};

export default LatestNews;
