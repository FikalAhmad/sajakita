import Image from "next/image";
import React from "react";

type ArticleCardHalfProps = {
  thumbnail: string;
  author: string;
  title: string;
  content: string | null;
  category: string;
  date: string;
};

const ArticleCardHalf = ({
  thumbnail,
  author,
  title,
  content,
  category,
  date,
}: ArticleCardHalfProps) => {
  return (
    <article className="flex items-center gap-5 bg-white">
      <Image
        src={thumbnail}
        alt="Article thumbnail"
        width={200}
        height={200}
        className="h-[150px] sm:h-[200px] w-1/4 sm:w-[200px] basis-1/4 sm:basis-0 rounded-xl object-cover"
      />
      <div className="basis-3/4 flex flex-col gap-3 w-full">
        <div className="text-[10px] sm:text-sm text-gray-600">{author}</div>
        <h3 className="font-semibold text-[16px] line-clamp-2 sm:line-clamp-none sm:text-lg lg:text-xl">
          {title}
        </h3>
        <p className="text-gray-600 text-sm line-clamp-2 hidden sm:block">
          {content}
        </p>
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-[12px] sm:text-sm text-gray-600">
          {category}
          <span className="h-1 w-1 rounded-full bg-black hidden sm:block"></span>
          <span className="text-[12px] sm:text-sm">{date}</span>
        </div>
      </div>
    </article>
  );
};

export default ArticleCardHalf;
