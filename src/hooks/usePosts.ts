"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchPosts } from "../queries/fetchPosts";

export const usePosts = () => {
  return useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const GetPosts = await fetchPosts();
      return GetPosts;
    },
  });
};
