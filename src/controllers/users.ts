import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { UserService } from "@/services/user";
import { validateLogin, validateRegister } from "@/validation/user";
import {
	sendConflict,
	sendCreated,
	sendNotFound,
	sendOk,
	sendUnauthorized,
} from "@/helpers/response";

/**
 * Handles the login request.
 *
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 * @returns {Promise<void>} - A promise that resolves when the response is sent.
 */
async function login(req: Request, res: Response) {
	// Parse the request body
	validateLogin(req);
	const { email, password } = req.body;

	// Find the user by email
	const user = await UserService.findOne(email);

	// If the user is not found, return an error response
	if (!user) {
		return sendNotFound(res, "Email not found");
	}

	// Compare the provided password with the user's hashed password
	const passwordMatch = await UserService.comparePassword(
		password,
		user.password
	);

	// If the passwords do not match, return an error response
	if (!passwordMatch) {
		return sendUnauthorized(res, "wrong password");
	}

	// Return a success response
	return sendOk(res, "Login success", user);
}

/**
 * Handles the registration request.
 *
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 * @returns {Promise<void>} - A promise that resolves when the response is sent.
 */
async function register(req: Request, res: Response) {
	// Parse the request body
	validateRegister(req);
	const { email, password, username } = req.body;

	// Check if a user with the provided email already exists
	const userExists = await UserService.findOne(email);

	// If a user with the email already exists, return an error response
	if (userExists) {
		return sendConflict(res, "User already exists");
	}

	// Hash the provided password
	const hashedPassword = await bcrypt.hash(password, 10);

	// Create a new user with the provided email, username, and hashed password
	const user = await UserService.create({
		email,
		username,
		password: hashedPassword,
	});

	// Return a success response with the created user
	return sendCreated(res, "Register success", user);
}

export default { login, register };
