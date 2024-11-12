import Image, { StaticImageData } from "next/image";
import React from "react";

type ArticleCardHalfProps = {
  thumbnail: StaticImageData;
  author: string;
  title: string;
  content: string;
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
    <article className="flex items-center gap-7 bg-white">
      <Image
        src={thumbnail}
        alt="Article thumbnail"
        width={200}
        height={200}
        className="h-[200px] rounded-xl object-cover"
      />
      <div className="flex flex-col gap-3 w-full">
        <div className="text-sm text-gray-600">{author}</div>
        <h3 className="font-semibold text-2xl">{title}</h3>
        <p className="text-gray-600 text-sm line-clamp-2">{content}</p>
        <div className="flex items-center gap-3 text-sm text-gray-600">
          {category}
          <span className="h-1 w-1 rounded-full bg-black"></span>
          <span>{date}</span>
        </div>
      </div>
    </article>
  );
};

export default ArticleCardHalf;
