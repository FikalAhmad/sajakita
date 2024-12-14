"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchSearch } from "@/queries/fetchSearch";

export const useSearch = (keyword: string) => {
  const { data: response, isFetching } = useQuery({
    queryKey: ["search", keyword],
    queryFn: async () => {
      return await fetchSearch(keyword);
    },
    enabled: !!keyword,
    staleTime: 0,
  });
  return { data: response?.data || [], isFetching };
};
