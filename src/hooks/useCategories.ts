"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchCategories } from "../queries/fetchCategories";

export const useCategories = (category: string) => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const GetCategories = await fetchCategories(category);
      return GetCategories;
    },
  });
};