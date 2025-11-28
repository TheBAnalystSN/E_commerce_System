"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Product_1 = require("./models/Product");
const apiService_1 = require("./services/apiService");
const discountCalculator_1 = require("./utils/discountCalculator");
const taxCalculator_1 = require("./utils/taxCalculator");
const errorHandler_1 = require("./utils/errorHandler");
async function main() {
    try {
        const products = await (0, apiService_1.fetchProducts)();
        products.forEach((data) => {
            const prod = new Product_1.Product(data);
            prod.displayDetails();
            const discount = (0, discountCalculator_1.calculateDiscount)(prod.price, prod.discountPercentage);
            const tax = (0, taxCalculator_1.calculateTax)(prod.price, prod.category);
            console.log("Discount:", discount);
            console.log("Tax:", tax);
            console.log("Final Price:", prod.getPriceWithDiscount());
            console.log("--------------------------------");
        });
    }
    catch (err) {
        (0, errorHandler_1.handleError)(err);
    }
}
main();
//# sourceMappingURL=index.js.map