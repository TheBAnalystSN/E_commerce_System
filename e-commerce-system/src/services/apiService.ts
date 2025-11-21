import { AppError } from "../utils/errorHandler";

const API_URL = "https://dummyjson.com/products";

export async function fetchProducts() {
try {
const res = await fetch(API_URL);
if (!res.ok) {
throw new AppError("Failed to fetch products");
}

const data = await res.json();
return data.products;
} catch (err) {
throw new AppError("Unable to fetch API data");
}
}