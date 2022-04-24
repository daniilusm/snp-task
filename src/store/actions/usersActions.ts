import { IUserData } from "../../interfaces";

import {
	ADD_NEW_USER,
	SET_USERS,
	DELETE_USER,
	EDIT_USER,
	GET_USERS,
	GET_USER_BY_ID,
	SET_USER_BY_ID,
	SET_NEW_USER,
	SET_EDIT_USER,
	DELETE_USER_BY_ID,
} from "./types";

export function getUsers() {
	return {
		type: GET_USERS,
	};
}

export function setUsers(users: IUserData[]) {
	return {
		type: SET_USERS,
		payload: users,
	};
}

export function getUsersById(id: string) {
	return {
		type: GET_USER_BY_ID,
		id
	};
}

export function setUsersById(user: IUserData) {
	return {
		type: SET_USER_BY_ID,
		payload: user,
	};
}

export function addNewUser(user: IUserData) {
	return {
		type: ADD_NEW_USER,
		user,
	};
}

export function setNewUser(user: IUserData) {
	return {
		type: SET_NEW_USER,
		user,
	};
}

export function deleteUser(id: string) {
	return {
		type: DELETE_USER,
		id,
	};
}

export function deleteUserById(id: string) {
	return {
		type: DELETE_USER_BY_ID,
		id,
	};
}

export function editUserData(user: IUserData) {
	return {
		type: EDIT_USER,
		user,
	};
}

export function setEditUserData(user: IUserData) {
	return {
		type: SET_EDIT_USER,
		user,
	};
}