export function calculateTax(price: number, category: string) {
let taxRate = 0.0475;

if (category === "groceries") {
taxRate = 0.03;
}

let tax = price * taxRate;
return tax;
}