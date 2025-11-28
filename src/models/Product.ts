export interface ProductData {
id: number;
title: string;
description?: string;
price: number;
discountPercentage?: number;
rating?: number;
stock?: number;
brand?: string;
category?: string;
}


export class Product {
id: number;
title: string;
price: number;
category: string;
discountPercentage: number;


constructor(data: ProductData) {
this.id = data.id;
this.title = data.title;
this.price = data.price;
this.category = data.category ?? 'other';
this.discountPercentage = data.discountPercentage ?? 0;
}


displayDetails(): void {
console.log(`Product: ${this.title} (ID: ${this.id})`);
console.log(`Category: ${this.category} • Price: $${this.price.toFixed(2)}`);
}


getPriceWithDiscount(): number {
const discounted = this.price - (this.price * this.discountPercentage) / 100;
return +discounted.toFixed(2);
}
}