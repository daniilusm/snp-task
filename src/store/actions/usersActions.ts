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

export const loadData = async () => {
	const response = await fetch(`http://localhost:3000/users`);
	const result = response.json();
	return result;
}

export const loadUser = async (id: string) => {
	const response = await fetch(`http://localhost:3000/users/${id}`);
	const result = response.json();
	return result;
}

export const setNewItem = async (user: IUserData) => {
	await fetch('http://localhost:3000/users', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json;charset=utf-8'
		},
		body: JSON.stringify(user)
	});
}

export const deleteItem = async (id: string) => {
	await fetch(`http://localhost:3000/users/${id}`, { method: 'DELETE', });
}

export const changeItem = async (user: IUserData) => {
	const requestOptions = {
		method: 'PUT',
		headers: { 'Content-Type': 'application/json;charset=utf-8' },
		body: JSON.stringify(user)
	};
	await fetch(`http://localhost:3000/users/${user.id}`, requestOptions)
		.then(response => response.json());
}