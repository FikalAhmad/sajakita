import Image, { StaticImageData } from "next/image";
import React from "react";

type ArticleCardProps = {
  thumbnail: StaticImageData;
  author: string;
  title: string;
  content: string;
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
    <article className="w-full max-w-[230px]">
      <Image
        alt="News thumbnail"
        width={230}
        height={230}
        src={thumbnail}
        loading="lazy"
        className="h-[230px] object-cover rounded-xl"
      />
      <div className="flex flex-col py-4 gap-5 w-full max-w-[230px]">
        <div className="text-sm">{author}</div>
        <h3 className="font-bold text-xl">{title}</h3>
        <p className="text-sm text-gray-600">{content}</p>
        <div className="flex items-center gap-3 text-xs text-gray-500">
          <span>{category}</span>
          <span className="h-1 w-1 rounded-full bg-black"></span>
          <span>{date}</span>
        </div>
      </div>
    </article>
  );
};

export default ArticleCard;
