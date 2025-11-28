export function calculateDiscount(price: number, discountPercentage = 0): number {
if (typeof price !== 'number' || typeof discountPercentage !== 'number') return 0;
if (discountPercentage <= 0) return 0;
const amount = (price * discountPercentage) / 100;
return +amount.toFixed(2);
}