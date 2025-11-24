export class CustomError extends Error {
    status;
    constructor(message, status) {
        super(message);
        this.status = status;
    }
}
export function handleError(error) {
    console.error("Error:", error.message || error);
}
//# sourceMappingURL=errorHandler.js.map