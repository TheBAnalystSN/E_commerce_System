export declare class AppError extends Error {
    status?: number;
    constructor(message: string, status?: number);
}
export declare function handleError(err: unknown): void;
//# sourceMappingURL=errorHandler.d.ts.map