"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppError = void 0;
exports.handleError = handleError;
class AppError extends Error {
    constructor(message) {
        super(message);
        this.name = "AppError";
    }
}
exports.AppError = AppError;
function handleError(err) {
    console.log("Something went wrong: ", err.message || err);
}
//# sourceMappingURL=errorHandler.js.map