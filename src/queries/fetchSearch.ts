export const fetchSearch = async (keyword: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/posts?filters[title][$containsi]=${keyword}&populate=*`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch article search");
  }
  return response.json();
};
