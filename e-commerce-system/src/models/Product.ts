export class Product {
    id: number;
    title: string;
    price: number;
    category: string;
    discountPercentage?: number;

    constructor(productData: any) {
        this.id = productData.id;
        this.title = productData.title;
        this.price = productData.price;
        this.category = productData.category;
        this.discountPercentage = productData.discountPercentage || 0;
    }

    displayDetails(): void {
        console.log(`Product: ${this.title}`);
        console.log(`Price: $${this.price}`);
        console.log(`Category: ${this.category}`);
    }

    getPriceWithDiscount(): number {
        return this.price - (this.price * (this.discountPercentage || 0) / 100);
    }
}
