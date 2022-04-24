import { IUserData } from "../interfaces";

const URL = `http://localhost:3000/users`;

export const loadData = async () => {
	const response = await fetch(URL);
	const result = response.json();
	return result;
}

export const loadUser = async (id: string) => {
	const response = await fetch(`${URL}/${id}`);
	const result = response.json();
	return result;
}

export const setNewItem = async (user: IUserData) => {
	await fetch(URL, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json;charset=utf-8'
		},
		body: JSON.stringify(user)
	});
}

export const deleteItem = async (id: string) => {
	await fetch(`${URL}/${id}`, { method: 'DELETE', });
}

export const changeItem = async (user: IUserData) => {
	const requestOptions = {
		method: 'PUT',
		headers: { 'Content-Type': 'application/json;charset=utf-8' },
		body: JSON.stringify(user)
	};
	await fetch(`${URL}/${user.id}`, requestOptions)
		.then(response => response.json());
}