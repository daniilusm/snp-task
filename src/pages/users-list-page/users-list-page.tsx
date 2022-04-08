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

import usersSetNewItem from '../../store/actions';
// import { selectUsers } from '../../store/selectors';

import { StyledTableCell } from './styleMUI';
import { Heading, Line } from './style';

const noItems: IUserData = {
	fullName: 'Exemple Name',
	email: 'exemple@exemple.com',
	userName: 'Exemple_User',
	id: 1234567890
}

export const UserListPage: React.FC = () => {

	const users: IUserData[] = useSelector((state: any) => state.users.users);

	const dispatch = useDispatch();

	const [tableItem, setTableItem] = useState<IUserData[]>([]);

	const [searchParams, setSearchParams] = useSearchParams();

	const searchValue: string | null = searchParams.get("search");

	const [value, setValue] = useState<string>('');
	const filterItems = (event: React.ChangeEvent<HTMLInputElement>) => {
		event.preventDefault();
		const inputValue: string = event.target.value;
		setValue(inputValue);
		const searchParamsValue: string = `?search=${inputValue}`;
		if (inputValue) {
			setSearchParams(searchParamsValue);
		}
		if (!inputValue) {
			setSearchParams('');
		}
	}

	const [openModal, setOpenModal] = useState<boolean>(false);
	const handleClickOpen = () => {
		setOpenModal(true);
	};
	const handleClose = () => {
		setOpenModal(false);
	};

	useEffect(() => {
		const saved: IUserData[] = JSON.parse(localStorage.getItem('users') || '[]') as IUserData[]
		const setLSUser = dispatch(usersSetNewItem(saved));
		setTableItem(saved)
	}, [])

	useEffect(() => {
		localStorage.setItem('users', JSON.stringify(tableItem));
		const setNewUser = dispatch(usersSetNewItem(tableItem));
	}, [tableItem])

	function addNewUser(data: IUserData) {
		setTableItem(prev => [data, ...prev])
	}

	function tableItemsContent() {
		if (!tableItem) {
			return <UserItem item={noItems} index={1} changeDataTable={changeItemInTable} deleteItemInTable={deleteItemInTable}></UserItem>
		}
		if (!value) {
			return tableItem.map((item, index) => (
				<UserItem item={item} key={item.id} index={index} changeDataTable={changeItemInTable} deleteItemInTable={deleteItemInTable}></UserItem>
			))
		}
		if (value) {
			let filteredUsers = tableItem.filter(item => item.fullName.includes(value));
			return filteredUsers.map((item, index) => (
				<UserItem item={item} key={item.id} index={index} changeDataTable={changeItemInTable} deleteItemInTable={deleteItemInTable}></UserItem>
			))
		}
	}

	function changeItemInTable(user: IUserData) {
		let data: IUserData[] = tableItem;
		const userIndex: number = data.findIndex(item => item.id === user.id);
		data[userIndex] = user;
		setTableItem(data);
	}

	function deleteItemInTable(id: number) {
		const newDataTable: IUserData[] = tableItem.filter(item => item.id !== id);
		setTableItem(newDataTable);
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
					onChange={filterItems}
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
							{tableItemsContent()}
						</TableBody>
					</Table>
				</TableContainer>
			</Container>
			<ModalForm open={openModal} handleClose={handleClose} addNewUser={addNewUser}></ModalForm>
		</>
	)
}