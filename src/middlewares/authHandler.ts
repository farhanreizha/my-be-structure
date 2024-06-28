import db from "@/lib/db";
import { Request, Response, NextFunction } from "express";

/**
 * Middleware to authenticate user requests.
 *
 * Extracts the token from the request headers and verifies if it exists in the database.
 * If the token is valid, the user object associated with the token is added to the request body.
 *
 * @param req - Express request object
 * @param res - Express response object
 * @param next - Express next function
 * @returns void
 */
export const authHandler = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	// Extract token from request headers
	const token = req.headers.authorization?.split(" ")[1];

	// If token is not provided, return unauthorized response
	if (!token) {
		return res.status(401).json({ message: "Unauthorized" });
	}

	// Search for user in database with the provided token
	const user = await db.user.findFirst({
		where: { token },
	});

	// If user is not found, return unauthorized response
	if (!user) {
		return res.status(401).json({ message: "Unauthorized" });
	}

	// Add user object to request body
	req.body = user;

	// Call next middleware
	next();
};
