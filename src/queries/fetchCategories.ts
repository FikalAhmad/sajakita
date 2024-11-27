export const fetchCategories = async (category: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/posts?filters[category][slug][$eq]=${category}&populate=*`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch category posts");
  }
  return response.json();
};
