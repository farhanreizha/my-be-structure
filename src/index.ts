import express from "express";
import { config } from "./config";
import server from "./app";

const port = config.port;
const app = express();

server(app);

app.listen(port, () => {
	console.log(`Server start on http://localhost:${port}`);
});
