export function calculateDiscount(price: number, discountPercentage: number | undefined) {
if (!discountPercentage) {
return 0;
}
let discountAmount = (price * discountPercentage) / 100;
return discountAmount;
}