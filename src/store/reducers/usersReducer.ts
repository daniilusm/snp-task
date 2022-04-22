import { IState } from "../../interfaces";
import {
	ADD_NEW_USER,
	SET_USERS,
	DELETE_USER,
	SET_USER_BY_ID,
	SET_EDIT_USER
} from "../actions/types";

const initialState: IState = {
	users: [],
	user: {
		fullName: '',
		email: '',
		userName: '',
		id: ''
	}
};

export function users(state = initialState, action: any) {
	switch (action.type) {
		case SET_USERS:
			return { ...state, users: action.payload };
		case SET_USER_BY_ID:
			return { ...state, user: action.payload };
		case ADD_NEW_USER:
			return { ...state, users: [...state.users, action.user] };
		case SET_EDIT_USER:
			const { user } = action;
			return { ...state, users: state.users.map(item => item.id === user.id ? { ...item, user } : item) };
		case DELETE_USER:
			return { ...state, users: state.users.filter(item => item.id !== action.id) };

		default:
			return state;
	}
}