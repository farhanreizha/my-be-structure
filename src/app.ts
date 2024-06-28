import express, { Response } from "express";
import router from "./router/users";
import errorHandler from "./middlewares/errorHandler";

export default function server(app: express.Application) {
	// Parse request body as JSON
	app.use(express.json());

	// Route for testing
	app.get("/", (_, res: Response) => {
		res.status(200).json({ message: "Welcome to this API" });
	});

	// API route
	app.use("/api", router);

	// Error handling
	app.use(errorHandler);
}
