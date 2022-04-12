import { takeEvery, put, call, spawn } from 'redux-saga/effects';

import {
	ADD_NEW_USER,
	DELETE_USER,
	EDIT_USER,
	GET_USERS,
	GET_USER_BY_ID
} from '../actions/types';
import {
	changeItem,
	deleteItem,
	deleteUser,
	editUserData,
	loadData,
	setNewItem,
	setNewUser,
	setUsers,
	setUsersById
} from '../actions';


export function* getAllUsers() {
	const data = yield call(loadData, '');
	yield put(setUsers(data));
}

export function* getUserById(payload: any) {
	const data = yield call(loadData, payload.id);
	yield put(setUsersById(data));
}

export function* addNewUser(payload: any) {
	yield call(setNewItem, payload.user);
	yield put(setNewUser(payload.user));
}

export function* changeUserData(payload: any) {
	yield call(changeItem, payload.user);
	yield put(editUserData(payload.user));
}

export function* deleteUserById(payload: any) {
	yield call(deleteItem, payload.id);
	yield put(deleteUser(payload.id));
}

export function* usersSaga() {
	yield takeEvery(GET_USERS, getAllUsers);
}

export function* userSaga() {
	yield takeEvery(GET_USER_BY_ID, getUserById);
}

export function* addUserSaga() {
	yield takeEvery(ADD_NEW_USER, addNewUser);
}

export function* changeUserSaga() {
	yield takeEvery(EDIT_USER, changeUserData);
}

export function* deleteUserSaga() {
	yield takeEvery(DELETE_USER, deleteUserById);
}

export default function* rootSaga() {
	yield spawn(usersSaga);
	yield spawn(userSaga);
	yield spawn(addUserSaga);
	yield spawn(changeUserSaga);
	yield spawn(deleteUserSaga);
}
