const getArticle = async (slug: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/posts?filters[slug][$eq]=${slug}&populate=*`,
    { next: { revalidate: 60 } }
  );
  if (!res.ok) return undefined;
  return res.json();
};

export default getArticle;
