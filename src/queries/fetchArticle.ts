export const fetchArticle = async (slug: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/posts?filters[slug][$eq]=${slug}&populate=*`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch article");
  }
  return response.json();
};
