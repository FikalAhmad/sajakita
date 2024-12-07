import { formatTanggal } from "@/components/formatTanggal";
import Image from "next/image";
import React from "react";

type ArticleCardProps = {
  thumbnail: string;
  author: string;
  title: string;
  content: string | null;
  category: string;
  date: string;
};

const ArticleCard = ({
  thumbnail,
  author,
  title,
  content,
  category,
  date,
}: ArticleCardProps) => {
  return (
    <article className="w-[230px]">
      <Image
        alt="News thumbnail"
        width={230}
        height={230}
        src={thumbnail}
        loading="lazy"
        className={`h-[150px] sm:h-[230px] object-cover rounded-xl`}
      />
      <div className="flex flex-col mt-4 gap-4 w-full">
        <div className="text-sm">{author}</div>
        <h3 className="font-bold text-base lg:text-xl line-clamp-2 text-ellipsis">
          {title}
        </h3>
        <p className="text-sm text-gray-600 line-clamp-3 text-ellipsis">
          {content}
        </p>
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-xs text-gray-500">
          <span>{category}</span>
          <span className="h-1 w-1 rounded-full bg-black hidden sm:block"></span>
          <span>{formatTanggal(date)}</span>
        </div>
      </div>
    </article>
  );
};

export default ArticleCard;
