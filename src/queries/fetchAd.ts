export const fetchAd = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/ad?populate[topad][populate]=*&populate[sidebarad][populate]=*`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch ad");
  }
  return response.json();
};
