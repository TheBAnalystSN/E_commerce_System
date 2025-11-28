import type { ProductData } from '../models/Product';
import { AppError } from '../utils/errorHandler';

const BASE_URL = 'https://dummyjson.com';

export async function fetchProducts(limit = 10): Promise<ProductData[]> {
try {
const res = await fetch(`${BASE_URL}/products?limit=${limit}`);
if (!res.ok) {
const t = await res.text().catch(() => '');
throw new AppError(`API error ${res.status}: ${t}`, res.status);
}
const json = await res.json();
if (!json || !Array.isArray(json.products)) {
throw new AppError('Invalid API response', 502);
}
return json.products as ProductData[];
} catch (err) {
if (err instanceof AppError) throw err;
throw new AppError('Network or parsing error while fetching products');
}
}

export async function fetchProductById(id: number): Promise<ProductData> {
try {
const res = await fetch(`${BASE_URL}/products/${id}`);
if (!res.ok) throw new AppError(`API error ${res.status}`, res.status);
const json = await res.json();
return json as ProductData;
} catch (err) {
if (err instanceof AppError) throw err;
throw new AppError('Network or parsing error while fetching product by id');
}
}