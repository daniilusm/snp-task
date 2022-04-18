import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

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
	TextField,
} from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

import UserItem from '../../components/user-item';
import ModalForm from '../../components/modal-form';

import { IUserData } from '../../interfaces';

// import { selectUsers } from '../../store/selectors';

import { deleteUser, editUserData, setNewUser } from '../../store/actions';
import { GET_USERS } from '../../store/actions/types';

import { StyledTableCell } from './styleMUI';
import { Heading, Line } from './style';

export const UserListPage: React.FC = () => {

	const users: IUserData[] = useSelector((state: any) => state.users.users);

	const dispatch = useDispatch();

	const [tableItem, setTableItem] = useState<IUserData[]>([]);

	const [searchParams, setSearchParams] = useSearchParams();

	const searchValue: string | null = searchParams.get("search");

	const [value, setValue] = useState<string>('');

	const [openModal, setOpenModal] = useState<boolean>(false);

	useEffect(() => {
		const fetchUsers = dispatch({ type: GET_USERS });
		// console.log(searchValue);
		// const saved: IUserData[] = JSON.parse(localStorage.getItem('users') || '[]') as IUserData[];
		// const setLSUser = dispatch(usersSetNewItem(saved));
	}, [])

	useEffect(() => {
		setTableItem(users);
		if (searchValue) {
			filterItems(searchValue);
		}
		// localStorage.setItem('users', JSON.stringify(tableItem));
		// const setNewUser = dispatch(usersSetNewItem(tableItem));
	}, [users])

	const handleClickOpen = () => {
		setOpenModal(true);
	};
	const handleClose = () => {
		setOpenModal(false);
	};

	const enteredString = (event: React.ChangeEvent<HTMLInputElement>) => {
		event.preventDefault();
		const inputValue: string = event.target.value;
		setValue(inputValue);
		const val: string = (inputValue).toLocaleLowerCase();
		const searchParamsValue: string = `?search=${val}`;
		setSearchParams(val ? searchParamsValue : '');
		filterItems(val);
	}

	const filterItems = (val: string) => {
		let filteredUsers = users.filter(item => item.fullName.toLocaleLowerCase().includes(val));
		setTableItem(val ? filteredUsers : users);
	}

	const addNewUser = (data: IUserData) => {
		dispatch(setNewUser(data));
	}

	const changeItemInTable = (user: IUserData) => {
		dispatch(editUserData(user));
	}

	const deleteItemInTable = (id: string) => {
		dispatch(deleteUser(id));
	}

	return (
		<>
			<Heading>
				<Typography variant="h1" component="div" gutterBottom>Welcom to Contact List</Typography>
				<Button variant="outlined" startIcon={<PersonAddIcon />} onClick={handleClickOpen}>Add new User</Button>
			</Heading>
			<Line />
			<Container>
				<TextField
					defaultValue={searchValue}
					id="filter-item"
					value={value}
					onChange={enteredString}
					label="Search user"
					variant="standard"
					margin='normal'
					fullWidth
				/>
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
							{tableItem.map((item) => (
								<UserItem item={item} key={item.id} changeDataTable={changeItemInTable} deleteItemInTable={deleteItemInTable}></UserItem>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			</Container>
			<ModalForm open={openModal} handleClose={handleClose} addNewUser={addNewUser}></ModalForm>
		</>
	)
}