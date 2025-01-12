"use client";
import Image from "next/image";
import React from "react";
import { usePosts } from "@/hooks/usePosts";
import { PostsData } from "../types/PostTypes";
import { formatTanggal } from "@/components/formatTanggal";
import Link from "next/link";
import { Skeleton } from "@/components/ui/skeleton";

const Hero = () => {
  const { data: HeroPost, isFetching } = usePosts();
  if (isFetching) {
    return (
      <article className="grid md:grid-cols-2 gap-5 mb-12 items-center justify-items-center">
        <Skeleton className="h-[450px] w-[600px] rounded-xl" />
        <div className="space-y-2 w-full">
          <Skeleton className="h-4 w-auto" />
          <Skeleton className="h-4 w-auto" />
        </div>
      </article>
    );
  }

  const FeaturedPost = HeroPost.filter(
    (item: PostsData) => item.featured === true
  ).at(-1);
  return (
    <article className="grid md:grid-cols-2 gap-5 mb-12 items-center justify-items-center">
      <Image
        src={process.env.NEXT_PUBLIC_API_URL + "/" + FeaturedPost.thumbnail.url}
        alt="Featured Post"
        className="w-auto h-auto object-cover rounded-xl"
        width={600}
        height={450}
        priority
      />

      <div className="space-y-4">
        <div className="text-sm">{FeaturedPost.author.name}</div>
        <Link href={`/${FeaturedPost.slug}`}>
          <h1 className="text-xl sm:text-3xl font-bold hover:text-gray-500">
            {FeaturedPost.title}
          </h1>
        </Link>
        <p className="text-gray-600 text-sm line-clamp-3 text-ellipsis">
          {FeaturedPost.Headline}
        </p>
        <div className="flex items-center gap-4 text-sm text-gray-500">
          <span>{FeaturedPost.category.name}</span>
          <span className="h-1 w-1 rounded-full bg-black"></span>
          <span>{formatTanggal(FeaturedPost.updatedAt)}</span>
        </div>
      </div>
    </article>
  );
};

export default Hero;
