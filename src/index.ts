import { Product } from './models/Product';
import { fetchProducts, fetchProductById } from './services/apiService';
import { calculateDiscount } from './utils/discountCalculator';
import { calculateTax } from './utils/taxCalculator';
import { handleError } from './utils/errorHandler';

async function main(): Promise<void> {
try {
console.log('Fetching products (limit 5)...\n');
const productsData = await fetchProducts(5);

const products = productsData.map((p) => new Product(p));

for (const p of products) {
p.displayDetails();

const discountAmount = calculateDiscount(p.price, p.discountPercentage);
const priceAfterDiscount = p.getPriceWithDiscount();
const taxAmount = calculateTax(priceAfterDiscount, p.category);
const finalPrice = +(priceAfterDiscount + taxAmount).toFixed(2);

console.log(`Discount amount: $${discountAmount}`);
console.log(`Price after discount: $${priceAfterDiscount}`);
console.log(`Tax amount: $${taxAmount}`);
console.log(`Final price: $${finalPrice}`);
console.log('-------------------------------\n');
}

console.log('Fetching product with id = 1\n');
const single = await fetchProductById(1);
const singleProduct = new Product(single);
singleProduct.displayDetails();
console.log(`Final price (demo): $${(singleProduct.getPriceWithDiscount() + calculateTax(singleProduct.getPriceWithDiscount(), singleProduct.category)).toFixed(2)}`);
} catch (err) {
handleError(err);
}
}


main();