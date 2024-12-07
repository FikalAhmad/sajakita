"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchPosts } from "../queries/fetchPosts";

export const usePosts = () => {
  const { data: response, isFetching } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      return await fetchPosts();
    },
  });
  return { data: response?.data || [], isFetching };
};
