"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Product_1 = require("./models/Product");
const apiService_1 = require("./services/apiService");
const discountCalculator_1 = require("./utils/discountCalculator");
const taxCalculator_1 = require("./utils/taxCalculator");
const errorHandler_1 = require("./utils/errorHandler");
async function main() {
    try {
        console.log('Fetching products (limit 5)...\n');
        const productsData = await (0, apiService_1.fetchProducts)(5);
        const products = productsData.map((p) => new Product_1.Product(p));
        for (const p of products) {
            p.displayDetails();
            const discountAmount = (0, discountCalculator_1.calculateDiscount)(p.price, p.discountPercentage);
            const priceAfterDiscount = p.getPriceWithDiscount();
            const taxAmount = (0, taxCalculator_1.calculateTax)(priceAfterDiscount, p.category);
            const finalPrice = +(priceAfterDiscount + taxAmount).toFixed(2);
            console.log(`Discount amount: $${discountAmount}`);
            console.log(`Price after discount: $${priceAfterDiscount}`);
            console.log(`Tax amount: $${taxAmount}`);
            console.log(`Final price: $${finalPrice}`);
            console.log('-------------------------------\n');
        }
        console.log('Fetching product with id = 1\n');
        const single = await (0, apiService_1.fetchProductById)(1);
        const singleProduct = new Product_1.Product(single);
        singleProduct.displayDetails();
        console.log(`Final price (demo): $${(singleProduct.getPriceWithDiscount() + (0, taxCalculator_1.calculateTax)(singleProduct.getPriceWithDiscount(), singleProduct.category)).toFixed(2)}`);
    }
    catch (err) {
        (0, errorHandler_1.handleError)(err);
    }
}
main();
