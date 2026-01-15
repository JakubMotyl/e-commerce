export const getBestSellers = async () => {
  try {
    const res = await fetch(
      "https://makeup-api.herokuapp.com/api/v1/products.json"
    );
    const data = await res.json();
    return data.slice(0, 3);
  } catch (err) {
    console.error(`Error fetching best sellers, ${err}`);
  }
};
