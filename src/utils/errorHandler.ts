export class AppError extends Error {
status?: number;
constructor(message: string, status?: number) {
super(message);
this.name = 'AppError';
this.status = status;
}
}

export function handleError(err: unknown): void {
if (err instanceof AppError) {
console.error(`AppError${err.status ? ` (${err.status})` : ''}: ${err.message}`);
} else if (err instanceof Error) {
console.error(`Error: ${err.message}`);
} else {
console.error('Unknown error:', err);
}
}