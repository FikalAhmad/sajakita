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
    <article className="space-y-3 w-max-[300px]">
      <Image
        alt="News thumbnail"
        width={300}
        height={300}
        src={thumbnail}
        loading="lazy"
        className="w-full h-[300px] object-cover rounded-xl"
      />
      <div className="flex flex-col py-4 gap-5 ">
        <div className="text-lg">{author}</div>
        <h3 className="font-bold text-3xl">{title}</h3>
        <p className="text-lg text-gray-600">{content}</p>
        <div className="flex items-center gap-3 text-lg text-gray-500">
          <span>{category}</span>
          <span className="h-1.5 w-1.5 rounded-full bg-black"></span>
          <span>{date}</span>
        </div>
      </div>
    </article>
  );
};

export default ArticleCard;
