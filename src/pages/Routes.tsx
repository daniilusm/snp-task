import React from 'react';
import { Route, Routes } from 'react-router-dom';
import UserListPage from './users-list-page';


export const Routers = () => {
	return (
		<Routes>
			<Route path="/" element={<UserListPage />} />
			{/* <Route exact path="/item/:id" component={MoviePage} /> */}
		</Routes>
	);
};
