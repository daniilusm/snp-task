import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { IUserData } from '../../interfaces';

import { Paper, Typography } from '@mui/material';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

import { Content, Card } from './style';

export const UserPage: React.FC = () => {

	const { id } = useParams();

	const index: number = id - 1;

	const users: IUserData[] = useSelector((state: any) => state.users.users);

	return (
		<Card>
			<Content>
				<Typography variant="h1" component="h1" gutterBottom>Welcom to User Page</Typography>
				<Typography variant="h2" component="h2" gutterBottom>User Full name {users[index].fullName}</Typography>
				<Typography component="p"> <AlternateEmailIcon /> User email {users[index].email}</Typography>
				<Typography component="p">User name {users[index].userName}</Typography>
			</Content>
		</Card>
	)
}