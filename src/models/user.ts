export interface User {
	id?: string;
	email: string;
	token?: string;
	username: string;
	password: string;
	createdAt?: Date;
	updatedAt?: Date;
}
