const getCategory = async (category: string) => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}api/posts?populate=category&filters[category][slug][$eq]=${category}`,
      { next: { revalidate: 60 } }
    );
    if (!res.ok) return undefined;
    return res.json();
  };
  
  export default getCategory;