import { takeEvery, put, call, spawn } from 'redux-saga/effects';

import {
	DELETE_USER_BY_ID,
	EDIT_USER,
	GET_USERS,
	GET_USER_BY_ID,
	SET_NEW_USER
} from '../actions/types';

import {
	deleteUser,
	setUsers,
	setUsersById,
	addNewUser,
	setEditUserData
} from '../actions';

import {
	loadData,
	loadUser,
	setNewItem,
	changeItem,
	deleteItem,
} from '../../api';


export function* getAllUsers() {
	const data = yield call(loadData, null);
	yield put(setUsers(data));
}

export function* getUserById(payload: any) {
	const data = yield call(loadUser, payload.id);
	yield put(setUsersById(data));
}

export function* addUser(payload: any) {
	yield call(setNewItem, payload.user);
	yield put(addNewUser(payload.user));
}

export function* changeUserData(payload: any) {
	yield call(changeItem, payload.user);
	yield put(setEditUserData(payload.user));
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
	yield takeEvery(SET_NEW_USER, addUser);
}

export function* changeUserSaga() {
	yield takeEvery(EDIT_USER, changeUserData);
}

export function* deleteUserSaga() {
	yield takeEvery(DELETE_USER_BY_ID, deleteUserById);
}

export default function* rootSaga() {
	yield spawn(usersSaga);
	yield spawn(userSaga);
	yield spawn(addUserSaga);
	yield spawn(changeUserSaga);
	yield spawn(deleteUserSaga);
}
