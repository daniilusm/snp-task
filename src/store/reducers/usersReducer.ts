import { IState } from "../../interfaces";
import { ADD_NEW_USER, SET_USERS, DELETE_USER, EDIT_USER, SET_USER_BY_ID } from "../actions/types";

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
			return { ...state, users: [...state.users, action.payload] };
		case EDIT_USER:
			const findItemIndex = state.users.findIndex(item => item.id === action.user.id)
			return { ...state, users: state.users[findItemIndex] = action.user };
		case DELETE_USER:
			return { ...state, users: state.users.filter(item => item.id !== action.id) };

		default:
			return state;
	}
}