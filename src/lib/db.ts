import { PrismaClient } from "@prisma/client";

/**
 * This file initializes the global Prisma client and exports it.
 * The Prisma client is used to interact with the database.
 */

// Define the global variable for the Prisma client
declare global {
	var prisma: PrismaClient | undefined;
}

// Create a new Prisma client instance if it doesn't already exist
const db = globalThis.prisma || new PrismaClient();

// If the environment is not production, set the global Prisma client variable
if (process.env.NODE_ENV !== "production") {
	globalThis.prisma = db;
}

// Export the Prisma client for use in other files
export default db;
