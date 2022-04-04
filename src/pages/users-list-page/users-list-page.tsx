import React, { useEffect, useState } from 'react';
import {
	Button,
	Typography,
	Container,
	TableContainer,
	Table,
	Paper,
	TableHead,
	TableRow,
	TableBody,
} from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

import UserItem from '../../components/user-item';
import ModalForm from '../../components/modal-form';

import { IUserData } from '../../interfaces';

import { StyledTableCell } from './styleMUI';
import { Heading, Line } from './style';

const noItems: IUserData = {
	fullName: 'Exemple Name',
	email: 'exemple@exemple.com',
	userName: 'Exemple_User',
	id: 1234567890
}

export const UserListPage: React.FC = () => {

	const [tableItem, setTableItem] = useState<IUserData[]>([]);
	const [openModal, setOpenModal] = useState<boolean>(false);

	useEffect(() => {
		const saved = JSON.parse(localStorage.getItem('users') || '[]') as IUserData[]
		setTableItem(saved)
	}, [])

	useEffect(() => {
		localStorage.setItem('users', JSON.stringify(tableItem))
	}, [tableItem])

	function addNewUser(data: IUserData) {
		setTableItem(prev => [data, ...prev])
	}

	const handleClickOpen = () => {
		setOpenModal(true);
	};

	const handleClose = () => {
		setOpenModal(false);
	};

	function isNoItems() {
		if (tableItem.length === 0) {
			return <UserItem item={noItems}></UserItem>
		}
	}

	return (
		<>
			<Heading>
				<Typography variant="h1" component="div" gutterBottom>Welcom to Contact List</Typography>
				<Button variant="outlined" startIcon={<PersonAddIcon />} onClick={handleClickOpen}>Add new User</Button>
			</Heading>
			<Line />
			<Container>
				<TableContainer component={Paper}>
					<Table sx={{ minWidth: 700 }} aria-label="customized table">
						<TableHead>
							<TableRow>
								<StyledTableCell>Full Name</StyledTableCell>
								<StyledTableCell align="center">Email</StyledTableCell>
								<StyledTableCell align="center">User Name</StyledTableCell>
								<StyledTableCell align="center"></StyledTableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{isNoItems() || tableItem.map((item) => (
								<UserItem item={item} key={item.id}></UserItem>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			</Container>
			<ModalForm open={openModal} handleClose={handleClose} addNewUser={addNewUser}></ModalForm>
		</>
	)
}