export const fetchAd = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/top-ad?populate[ads][populate]=*`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch ad");
  }
  return response.json();
};
