import { Request, Response, NextFunction } from "express";

/**
 * Middleware for handling errors.
 *
 * @param {any} err - The error object.
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 * @param {NextFunction} next - The next function.
 */
const errorHandler = (
	err: any,
	req: Request,
	res: Response,
	next: NextFunction
) => {
	// Set the status code to the error's status code if it exists, otherwise set it to 500.
	const statusCode = err.statusCode || 500;

	// Set the message to the error's message if it exists, otherwise set it to "Internal Server Error".
	const message = err.message || "Internal Server Error";

	// Send the response with the status code and the error message.
	res.status(statusCode).json({ message });
};

export default errorHandler;
