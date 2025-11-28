export class Product {
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
        this.discountPercentage = productData.discountPercentage || 0;
    }
    displayDetails() {
        console.log(`Product: ${this.title}`);
        console.log(`Price: $${this.price}`);
        console.log(`Category: ${this.category}`);
    }
    getPriceWithDiscount() {
        if (!this.discountPercentage)
            return this.price;
        return this.price - (this.price * this.discountPercentage) / 100;
    }
}