import { ADD_NEW_USER } from "../actions/types";

const initialState = {
	users: [],
};

export function users(state = initialState, action: any) {
	switch (action.type) {
		case ADD_NEW_USER:
			return { ...state, users: action.payload };

		default:
			return state;
	}
}