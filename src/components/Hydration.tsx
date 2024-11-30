import { fetchCategories } from "@/queries/fetchCategories";
import { fetchPosts } from "@/queries/fetchPosts";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import React from "react";

const Hydration = async ({ children }: { children: React.ReactNode }) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        // With SSR, we usually want to set some default staleTime
        // above 0 to avoid refetching immediately on the client
        staleTime: 60 * 1000,
      },
    },
  });
  await Promise.all([
    queryClient.prefetchQuery({
      queryKey: ["posts"],
      queryFn: () => fetchPosts(),
    }),
    queryClient.prefetchQuery({
      queryKey: ["categories", "infotainment"],
      queryFn: () => fetchCategories("infotainment"),
    }),
    queryClient.prefetchQuery({
      queryKey: ["categories", "bisnis"],
      queryFn: () => fetchCategories("bisnis"),
    }),
    queryClient.prefetchQuery({
      queryKey: ["categories", "nasional"],
      queryFn: () => fetchCategories("nasional"),
    }),
  ]);
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      {children}
    </HydrationBoundary>
  );
};

export default Hydration;
