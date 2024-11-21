"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchArticle } from "../queries/fetchArticle";

export const useArticle = (slug: string) => {
  return useQuery({
    queryKey: ["article"],
    queryFn: async () => {
      const GetArticle = await fetchArticle(slug);
      return GetArticle;
    },
    enabled: !!slug,
    staleTime: 0,
  });
};
