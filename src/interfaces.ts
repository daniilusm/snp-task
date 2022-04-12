export interface IUserData {
	fullName: string
	email: string,
	userName: string,
	id: string
}

export interface IState {
	users: IUserData[],
	user: IUserData
}