import z from "zod";

export const registerSchema = z.object({
	email: z.string().email().min(6),
	password: z.string().min(8),
	username: z.string().min(4),
});

export const loginSchema = z.object({
	email: z.string().email().min(6),
	password: z.string().min(8),
});
