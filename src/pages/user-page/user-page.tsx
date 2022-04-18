import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useLocation, useParams } from 'react-router-dom';

import { IUserData } from '../../interfaces';
import { GET_USER_BY_ID } from '../../store/actions/types';

import { Button, Typography } from '@mui/material';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

import { Content, Card } from './style';

const noData: IUserData = {
	fullName: '',
	email: '',
	userName: '',
	id: ''
}

export const UserPage: React.FC = () => {

	const dispatch = useDispatch();

	// const location = useLocation();

	// const id: string = location.state.id;

	const { id } = useParams();

	const [userData, setUserData] = useState<IUserData>(noData);

	// const users: IUserData[] = useSelector((state: any) => state.users.users);
	const user: IUserData = useSelector((state: any) => state.users.user);

	useEffect(() => {
		setUserData(user);
		// localStorage.setItem('user', JSON.stringify(user));
	}, [user])

	useEffect(() => {
		const fetchUser = dispatch({ type: GET_USER_BY_ID, id });
		// const saved: IUserData = JSON.parse(localStorage.getItem('user') || '[]') as IUserData;
		// setUserData(saved);
		// const findUser: IUserData = users.find(item => item.id === id);
		// setUserData(findUser);
	}, [])

	return (
		<Card>
			<Content>
				<Typography variant="h1" component="h1" gutterBottom>Welcom to User Page</Typography>
				<Typography variant="h2" component="h2" gutterBottom>{userData.fullName}</Typography>
				<Typography component="p"> <AlternateEmailIcon />{userData.email}</Typography>
				<Typography component="p">{userData.userName}</Typography>
				<Button component={Link} to={`/`} variant="contained">Back to Users List</Button>
			</Content>
		</Card>
	)
}