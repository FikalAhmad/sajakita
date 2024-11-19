export const fetchCategories = async (category: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/posts?populate[category]=*&populate[author]=*&filters[category][slug][$eq]=${category}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch category posts");
  }
  return response.json();
};
