"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateDiscount = calculateDiscount;
function calculateDiscount(price, discountPercentage) {
    if (!discountPercentage) {
        return 0;
    }
    let discountAmount = (price * discountPercentage) / 100;
    return discountAmount;
}
//# sourceMappingURL=discountCalculator.js.map