"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppError = void 0;
exports.handleError = handleError;
class AppError extends Error {
    constructor(message, status) {
        super(message);
        this.name = 'AppError';
        this.status = status;
    }
}
exports.AppError = AppError;
function handleError(err) {
    if (err instanceof AppError) {
        console.error(`AppError${err.status ? ` (${err.status})` : ''}: ${err.message}`);
    }
    else if (err instanceof Error) {
        console.error(`Error: ${err.message}`);
    }
    else {
        console.error('Unknown error:', err);
    }
}
