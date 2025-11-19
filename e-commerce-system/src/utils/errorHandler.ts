export class AppError extends Error {
constructor(message: string) {
super(message);
this.name = "AppError";
}
}


export function handleError(err: any) {
console.log("Something went wrong: ", err.message || err);
}