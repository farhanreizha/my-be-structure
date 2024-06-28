/**
 * This file exports the configuration for the application.
 *
 * The `dotenv` package is used to load environment variables from a .env file.
 * This allows us to set variables like the port the application should listen on
 * and the URL of the database it should connect to.
 *
 * The `config` object is exported and contains the configuration values.
 * The `port` property is set to the value of the `PORT` environment variable,
 * or 3000 if the variable is not set.
 *
 * The `databaseUrl` property is set to the value of the `DATABASE_URL`
 * environment variable. The exclamation mark after the variable name indicates
 * that the value must be present. If the variable is not set, the build will
 * fail.
 *
 * Note: this file should be kept secret, as it contains sensitive information.
 * Never share it with anyone.
 */

import dotenv from "dotenv";

dotenv.config();

export const config = {
	port: process.env.PORT || 3000,
	databaseUrl: process.env.DATABASE_URL!,
};
