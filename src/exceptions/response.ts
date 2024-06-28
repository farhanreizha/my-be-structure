import { Response } from "express";

/**
 * Enum for HTTP response status codes.
 * @enum {number}
 */
export enum ResponseStatus {
	// Success
	OK = 200,
	CREATED = 201,

	// Client errors
	BAD_REQUEST = 400,
	UNAUTHORIZED = 401,
	FORBIDDEN = 403,
	NOT_FOUND = 404,
	CONFLICT = 409,

	// Server errors
	INTERNAL_SERVER_ERROR = 500,
}

/**
 * Send a response with a success status and an optional message.
 * @param res - The express response object.
 * @param message - The success message.
 * @param data - Optional data to include in the response.
 */
export function sendOk(res: Response, message: string, data?: any) {
	res.status(ResponseStatus.OK).json({ message, data });
}

/**
 * Send a response with a created status and an optional message and data.
 * @param res - The express response object.
 * @param message - The success message.
 * @param data - Optional data to include in the response.
 */
export function sendCreated(res: Response, message: string, data?: any) {
	res.status(ResponseStatus.CREATED).json({ message, data });
}

/**
 * Send a response with a bad request status and an optional message.
 * @param res - The express response object.
 * @param message - The error message.
 */
export function sendBadRequest(res: Response, message: string) {
	res.status(ResponseStatus.BAD_REQUEST).json({ message });
}

/**
 * Send a response with an unauthorized status and an optional message.
 * @param res - The express response object.
 * @param message - The error message.
 */
export function sendUnauthorized(res: Response, message: string) {
	res.status(ResponseStatus.UNAUTHORIZED).json({ message });
}

/**
 * Send a response with a forbidden status and an optional message.
 * @param res - The express response object.
 * @param message - The error message.
 */
export function sendForbidden(res: Response, message: string) {
	res.status(ResponseStatus.FORBIDDEN).json({ message });
}

/**
 * Send a response with a not found status and an optional message.
 * @param res - The express response object.
 * @param message - The error message.
 */
export function sendNotFound(res: Response, message: string) {
	res.status(ResponseStatus.NOT_FOUND).json({ message });
}

/**
 * Send a response with a conflict status and an optional message.
 * @param res - The express response object.
 * @param message - The error message.
 */
export function sendConflict(res: Response, message: string) {
	res.status(ResponseStatus.CONFLICT).json({ message });
}

/**
 * Send a response with an internal server error status and an optional message.
 * @param res - The express response object.
 * @param message - The error message.
 */
export function sendInternalServerError(res: Response, message: string) {
	res.status(ResponseStatus.INTERNAL_SERVER_ERROR).json({ message });
}
