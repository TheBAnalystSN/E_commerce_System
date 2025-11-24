export function calculateDiscount(price: number, discountPercentage: number = 0) {
  return (price * discountPercentage) / 100;
}
