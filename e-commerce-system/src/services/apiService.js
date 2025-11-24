import { CustomError } from "../utils/errorHandler";
export async function fetchProducts() {
    try {
        const response = await fetch("https://dummyjson.com/products");
        if (!response.ok) {
            throw new CustomError("API Request Failed", response.status);
        }
        const data = await response.json();
        return data.products;
    }
    catch (err) {
        throw new CustomError("Failed to fetch products");
    }
}
//# sourceMappingURL=apiService.js.map