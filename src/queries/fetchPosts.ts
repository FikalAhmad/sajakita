export const fetchPosts = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/posts?populate=*`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }
  return response.json();
};
