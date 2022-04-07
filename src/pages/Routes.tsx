import React from 'react';
import { Route, Routes } from 'react-router-dom';

import UserPage from './user-page';
import UserListPage from './users-list-page';


export const Routers = () => {
	return (
		<Routes>
			<Route path="/" element={<UserListPage />} />
			<Route path="/items/:id" element={<UserPage />} />
		</Routes>
	);
};
