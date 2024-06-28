import { loginSchema, registerSchema } from "@/schemas/user";
import { Request } from "express";

export const validateRegister = (req: Request) => {
	return registerSchema.parse(req.body);
};

export const validateLogin = (req: Request) => {
	return loginSchema.parse(req.body);
};
