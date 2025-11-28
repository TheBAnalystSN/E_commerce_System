"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateTax = calculateTax;
function calculateTax(price, category) {
    if (typeof price !== 'number')
        return 0;
    const defaultRate = 0.0475;
    const groceriesRate = 0.03;
    const rate = category && category.toLowerCase() === 'groceries' ? groceriesRate : defaultRate;
    const tax = price * rate;
    return +tax.toFixed(2);
}
