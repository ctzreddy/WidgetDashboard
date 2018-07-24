export interface UserInfo {
	firstName: string;
	lastName: string;
	fullName: string;
	middleName: string;
	centralId: string;
	email: string;
	position: string;
	loginToken: LoginToken;
	initials: string;
}

export interface LoginToken {
	expire: string;
	origin: string;
	token: string;
}