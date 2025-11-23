export class AppError extends Error {
    constructor(message) {
        super(message);
        this.name = "AppError";
    }
}
export function handleError(err) {
    console.log("Something went wrong: ", err.message || err);
}
//# sourceMappingURL=errorHandler.js.map