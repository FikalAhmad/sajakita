"use client";

import { useQuery } from "@tanstack/react-query";
import {
  fetchCategories,
  fetchCategoryPages,
} from "../queries/fetchCategories";

export const useCategories = (category: string) => {
  const { data: response, isFetching } = useQuery({
    queryKey: ["categories", category],
    queryFn: async () => {
      return await fetchCategories(category);
    },
    enabled: Boolean(category),
    staleTime: 0,
  });
  return { data: response?.data || [], isFetching };
};

export const useCategoryPages = (category: string, page: string) => {
  const { data: response, isFetching } = useQuery({
    queryKey: ["categorypages", category],
    queryFn: async () => {
      return await fetchCategoryPages(category, page);
    },
    enabled: Boolean(category),
    staleTime: 0,
  });
  return { data: response?.data || [], isFetching };
};
