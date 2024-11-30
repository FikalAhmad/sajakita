"use client";

import { useQuery } from "@tanstack/react-query";
import {
  fetchCategories,
  fetchCategoryPages,
} from "../queries/fetchCategories";

export const useCategories = (category: string) => {
  return useQuery({
    queryKey: ["categories", category],
    queryFn: async () => {
      const GetCategories = await fetchCategories(category);
      return GetCategories;
    },
    enabled: Boolean(category), // atau bisa pake !!category
    // refetchOnWindowFocus: false, //
    staleTime: 0,
  });
};

export const useCategoryPages = (category: string, page: string) => {
  return useQuery({
    queryKey: ["categorypages", category],
    queryFn: async () => {
      const GetCategories = await fetchCategoryPages(category, page);
      return GetCategories;
    },
    enabled: Boolean(category),
    staleTime: 0,
  });
};
