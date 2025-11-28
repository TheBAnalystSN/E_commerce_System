export function calculateTax(price, category) {
    const taxRate = category === "groceries" ? 0.03 : 0.0475;
    return price * taxRate;
}
//# sourceMappingURL=taxCalculator.js.map