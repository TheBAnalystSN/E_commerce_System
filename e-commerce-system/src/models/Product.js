"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
class Product {
    id;
    title;
    price;
    category;
    discountPercentage;
    constructor(productData) {
        this.id = productData.id;
        this.title = productData.title;
        this.price = productData.price;
        this.category = productData.category;
        this.discountPercentage = productData.discountPercentage;
    }
    displayDetails() {
        console.log("Product:", this.title);
        console.log("Category:", this.category);
        console.log("Price:", this.price);
    }
    getPriceWithDiscount() {
        let discount = 0;
        if (this.discountPercentage) {
            discount = (this.price * this.discountPercentage) / 100;
        }
        return this.price - discount;
    }
}
exports.Product = Product;
//# sourceMappingURL=Product.js.map