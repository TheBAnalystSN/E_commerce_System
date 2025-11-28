export interface ProductData {
    id: number;
    title: string;
    description?: string;
    price: number;
    discountPercentage?: number;
    rating?: number;
    stock?: number;
    brand?: string;
    category?: string;
}
export declare class Product {
    id: number;
    title: string;
    price: number;
    category: string;
    discountPercentage: number;
    constructor(data: ProductData);
    displayDetails(): void;
    getPriceWithDiscount(): number;
}
//# sourceMappingURL=Product.d.ts.map