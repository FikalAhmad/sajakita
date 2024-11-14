const getArticle = async (slug: string) => {
  const res = await fetch(
    `http://localhost:1337/api/posts?filters[slug][$eq]=${slug}&populate=*`,
    { next: { revalidate: 60 } }
  );
  if (!res.ok) return undefined;
  return res.json();
};

export default getArticle;
