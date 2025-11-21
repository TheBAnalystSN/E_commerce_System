"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchProducts = fetchProducts;
const errorHandler_1 = require("../utils/errorHandler");
const API_URL = "https://dummyjson.com/products";
async function fetchProducts() {
    try {
        const res = await fetch(API_URL);
        if (!res.ok) {
            throw new errorHandler_1.AppError("Failed to fetch products");
        }
        const data = await res.json();
        return data.products;
    }
    catch (err) {
        throw new errorHandler_1.AppError("Unable to fetch API data");
    }
}
//# sourceMappingURL=apiService.js.map