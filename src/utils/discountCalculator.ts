export function calculateDiscount(price: number, discountPercentage: number): number {
  if (!price || typeof price !== "number") {
    return 0;
  }
  if (!discountPercentage || typeof discountPercentage !== "number") {
    return 0;
  }

  if (discountPercentage <= 0) return 0;

  return price * (discountPercentage / 100);
}
