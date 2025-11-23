export function calculateDiscount(
    price: number,
    discountPercentage: number = 0
): number {
    return (price * discountPercentage) / 100;
}
