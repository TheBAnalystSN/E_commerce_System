export async function fetchProducts() {
  try {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    return data.products;
  } catch (err) {
    console.error("API Error:", err);
    throw err;
  }
}
