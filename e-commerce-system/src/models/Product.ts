export default class Product {
  id: number;
  title: string;
  price: number;
  discountPercentage?: number;
  category?: string;

  constructor(data: any) {
    this.id = data.id;
    this.title = data.title;
    this.price = data.price;
    this.discountPercentage = data.discountPercentage;
    this.category = data.category;
  }

  displayDetails() {
    console.log(`Product: ${this.title} - $${this.price}`);
  }
}
