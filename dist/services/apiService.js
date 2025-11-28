"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchProducts = fetchProducts;
exports.fetchProductById = fetchProductById;
const errorHandler_1 = require("../utils/errorHandler");
const BASE_URL = 'https://dummyjson.com';
async function fetchProducts(limit = 10) {
    try {
        const res = await fetch(`${BASE_URL}/products?limit=${limit}`);
        if (!res.ok) {
            const t = await res.text().catch(() => '');
            throw new errorHandler_1.AppError(`API error ${res.status}: ${t}`, res.status);
        }
        const json = await res.json();
        if (!json || !Array.isArray(json.products)) {
            throw new errorHandler_1.AppError('Invalid API response', 502);
        }
        return json.products;
    }
    catch (err) {
        if (err instanceof errorHandler_1.AppError)
            throw err;
        throw new errorHandler_1.AppError('Network or parsing error while fetching products');
    }
}
async function fetchProductById(id) {
    try {
        const res = await fetch(`${BASE_URL}/products/${id}`);
        if (!res.ok)
            throw new errorHandler_1.AppError(`API error ${res.status}`, res.status);
        const json = await res.json();
        return json;
    }
    catch (err) {
        if (err instanceof errorHandler_1.AppError)
            throw err;
        throw new errorHandler_1.AppError('Network or parsing error while fetching product by id');
    }
}
