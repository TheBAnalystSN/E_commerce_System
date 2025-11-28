import { Product } from "./models/Product";
import { fetchProducts } from "./services/apiService";
import { calculateDiscount } from "./utils/discountCalculator";
import { calculateTax } from "./utils/taxCalculator";
import { AppError, handleError } from "./utils/errorHandler";
async function main() {
    try {
        const products = await fetchProducts();
        products.forEach((data) => {
            const prod = new Product(data);
            prod.displayDetails();
            const discount = calculateDiscount(prod.price, prod.discountPercentage);
            const tax = calculateTax(prod.price, prod.category);
            console.log("Discount:", discount);
            console.log("Tax:", tax);
            console.log("Final Price:", prod.getPriceWithDiscount());
            console.log("--------------------------------");
        });
    }
    catch (err) {
        handleError(err);
    }
}
main();
//# sourceMappingURL=index.js.map