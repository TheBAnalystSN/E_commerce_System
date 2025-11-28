"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
class Product {
    constructor(data) {
        this.id = data.id;
        this.title = data.title;
        this.price = data.price;
        this.category = data.category ?? 'other';
        this.discountPercentage = data.discountPercentage ?? 0;
    }
    displayDetails() {
        console.log(`Product: ${this.title} (ID: ${this.id})`);
        console.log(`Category: ${this.category} • Price: $${this.price.toFixed(2)}`);
    }
    getPriceWithDiscount() {
        const discounted = this.price - (this.price * this.discountPercentage) / 100;
        return +discounted.toFixed(2);
    }
}
exports.Product = Product;
