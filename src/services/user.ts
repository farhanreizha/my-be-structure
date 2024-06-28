import prisma from "@/lib/db";
import { User } from "@/models/user";
import { compareSync } from "bcrypt";

/**
 * Class representing the user service.
 * Provides methods for performing CRUD operations on the user model.
 */
export class UserService {
	/**
	 * Retrieves a user by their email.
	 * @param email - The email of the user.
	 * @returns The user object if found, otherwise null.
	 */
	public static async findOne(email: string) {
		const user = await prisma.user.findUnique({
			where: {
				email,
			},
		});
		return user;
	}

	/**
	 * Retrieves a user by their id.
	 * @param id - The id of the user.
	 * @returns The user object if found, otherwise null.
	 */
	public static async findById(id: string) {
		const user = await prisma.user.findUnique({
			where: {
				id,
			},
		});
		return user;
	}

	/**
	 * Retrieves a user by their id.
	 * @param username - The id of the user.
	 * @returns The user object if found, otherwise null.
	 */
	public static async findByUsername(username: string) {
		const user = await prisma.user.findFirst({
			where: {
				username,
			},
		});
		return user;
	}

	/**
	 * Compares a plain text password with a hashed password.
	 * @param password - The plain text password.
	 * @param hashedPassword - The hashed password.
	 * @returns True if the passwords match, false otherwise.
	 */
	public static async comparePassword(
		password: string,
		hashedPassword: string
	) {
		return compareSync(password, hashedPassword);
	}

	/**
	 * Creates a new user.
	 * @param data - The user data.
	 * @returns The created user object.
	 */
	public static async create(data: User) {
		const user = await prisma.user.create({
			data,
		});
		return user;
	}

	/**
	 * Updates an existing user.
	 * @param id - The id of the user.
	 * @param data - The updated user data.
	 * @returns The updated user object.
	 */
	public static async update(id: string, data: any) {
		const user = await prisma.user.update({
			where: {
				id,
			},
			data,
		});
		return user;
	}

	/**
	 * Deletes a user by their id.
	 * @param id - The id of the user.
	 * @returns The deleted user object.
	 */
	public static async delete(id: string) {
		const user = await prisma.user.delete({
			where: {
				id,
			},
		});
		return user;
	}
}
