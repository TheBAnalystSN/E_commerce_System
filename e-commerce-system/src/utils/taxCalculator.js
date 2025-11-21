"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateTax = calculateTax;
function calculateTax(price, category) {
    let taxRate = 0.0475;
    if (category === "groceries") {
        taxRate = 0.03;
    }
    let tax = price * taxRate;
    return tax;
}
//# sourceMappingURL=taxCalculator.js.map