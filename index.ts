import { Product } from "./models/Product.js";
import { fetchProducts } from "./services/apiService.js";
import { calculateDiscount } from "./utils/discountCalculator.js";
import { calculateTax } from "./utils/taxCalculator.js";
import { handleError } from "./utils/errorHandler.js";

async function main() {
  try {
    const products = await fetchProducts();

    products.forEach((data: any) => {
      const prod = new Product(data);
      prod.displayDetails();

      const discount = calculateDiscount(prod.price, prod.discountPercentage);
      const tax = calculateTax(prod.price, prod.category);

      console.log("Discount:", discount);
      console.log("Tax:", tax);
      console.log("Final Price:", prod.getPriceWithDiscount());
      console.log("--------------------------------");
    });
  } catch (err) {
    handleError(err);
  }
}

main();
