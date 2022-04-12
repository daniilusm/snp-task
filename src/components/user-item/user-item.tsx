import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import ModalUser from '../modal-user';
import ModalEditItem from '../modal-edit-item';

import { IUserData } from '../../interfaces';

import PersonIcon from '@mui/icons-material/Person';
import InfoIcon from '@mui/icons-material/Info';
import EditIcon from '@mui/icons-material/Edit';
import { Button } from '@mui/material';

import { StyledTableCell, StyledTableRow } from '../../pages/users-list-page/styleMUI';
import { FullName } from './style';

type UserItemProps = {
	index: number
	item: IUserData
	changeDataTable(data: IUserData): void
	deleteItemInTable(id: string): void
}

export const UserItem: React.FC<UserItemProps> = ({ item, index, changeDataTable, deleteItemInTable }) => {

	const navigate = useNavigate();

	const [itemInfo, setItemInfo] = useState<IUserData>(item)

	const [openInfo, setOpenInfo] = useState<boolean>(false);
	const openInfoModal = () => setOpenInfo(true);
	const closeInfoModal = () => setOpenInfo(false);

	const [openEdit, setOpenEdit] = useState<boolean>(false);
	const openEditModal = () => setOpenEdit(true);
	const closeEditModal = () => setOpenEdit(false);

	const editUserData = (data: IUserData) => {
		setItemInfo(data);
		changeDataTable(data);
	}

	const goToUserDetails = () => navigate(`/users/${index + 1}`, { state: item })

	return (
		<>
			<StyledTableRow>
				<StyledTableCell component="th" scope="row">
					<FullName>
						<PersonIcon color='primary' /> {itemInfo.fullName}
					</FullName>
				</StyledTableCell>
				<StyledTableCell align="center">{itemInfo.email}</StyledTableCell>
				<StyledTableCell align="center">{itemInfo.userName}</StyledTableCell>
				<StyledTableCell align="center">
					{/* <Button component={Link} to={`/items/${item.id}`}>open</Button> */}
					<Button onClick={goToUserDetails}>open</Button>
					<Button onClick={openInfoModal}><InfoIcon color='primary' /></Button>
					<Button onClick={openEditModal}><EditIcon color='primary' /></Button>
				</StyledTableCell>
			</StyledTableRow>
			<ModalUser open={openInfo} handleClose={closeInfoModal} item={itemInfo}></ModalUser>
			<ModalEditItem open={openEdit} handleClose={closeEditModal} item={itemInfo} editUserData={editUserData} deleteItemInTable={deleteItemInTable}></ModalEditItem>
		</>
	)
}