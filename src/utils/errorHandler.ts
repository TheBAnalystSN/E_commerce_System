export class CustomError extends Error {
  status?: number;

  constructor(message: string, status?: number) {
    super(message);
    this.status = status;
  }
}

export function handleError(error: any) {
  console.error("Error:", error.message || error);
}
