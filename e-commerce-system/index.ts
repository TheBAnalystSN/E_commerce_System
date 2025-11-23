import { Product } from "./models/Product.js";
import { fetchProducts } from "./services/apiService.js";
import { calculateDiscount } from "./utils/discountCalculator.js";
import { calculateTax } from "./utils/taxCalculator.js";
import { handleError } from "./utils/errorHandler.js";

async function main() {
    try {
        const products = await fetchProducts();

        products.forEach((p: any) => {
            const prod = new Product(p);
            prod.displayDetails();

            const discount = calculateDiscount(prod.price, prod.discountPercentage);
            const tax = calculateTax(prod.price, prod.category);

            console.log("Discount Amount:", discount);
            console.log("Tax Amount:", tax);
            console.log("Price After Discount:", prod.getPriceWithDiscount());
            console.log("-----------------------------");
        });
    } catch (err) {
        handleError(err);
    }
}

main();
