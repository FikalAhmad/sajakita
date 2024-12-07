"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchAd } from "@/queries/fetchAd";

export const useAd = () => {
  const { data: response, isFetching } = useQuery({
    queryKey: ["ad"],
    queryFn: async () => {
      return await fetchAd();
    },
  });
  return { data: response?.data || [], isFetching };
};
