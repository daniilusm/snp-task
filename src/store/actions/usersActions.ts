import { IUserData } from "../../interfaces";
import { ADD_NEW_USER } from "./types";

export function usersSetNewItem(users: any) {
	return {
		type: ADD_NEW_USER,
		payload: users,
	};
}