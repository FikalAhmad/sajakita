"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchArticle } from "../queries/fetchArticle";

export const useArticle = (slug: string) => {
  const { data: response, isFetching } = useQuery({
    queryKey: ["article", slug],
    queryFn: async () => {
      return await fetchArticle(slug);
    },
    enabled: !!slug,
    staleTime: 0,
  });
  return { data: response?.data || [], isFetching };
};
