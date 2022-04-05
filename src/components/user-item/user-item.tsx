import React, { useState } from 'react';
import PersonIcon from '@mui/icons-material/Person';
import { Button } from '@mui/material';

import { IUserData } from '../../interfaces';

import { StyledTableCell, StyledTableRow } from '../../pages/users-list-page/styleMUI';
import { FullName } from './style';
import ModalUser from '../modal-user';
import ModalEditItem from '../modal-edit-item';

type UserItemProps = {
	item: IUserData
	changeDataTable(data: IUserData): void
	deleteItemInTable(id: number): void
}

export const UserItem: React.FC<UserItemProps> = ({ item, changeDataTable, deleteItemInTable }) => {

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
					<Button onClick={openInfoModal}>open</Button>
					<Button onClick={openEditModal}>edit</Button>
				</StyledTableCell>
			</StyledTableRow>
			<ModalUser open={openInfo} handleClose={closeInfoModal} item={itemInfo}></ModalUser>
			<ModalEditItem open={openEdit} handleClose={closeEditModal} item={itemInfo} editUserData={editUserData} deleteItemInTable={deleteItemInTable}></ModalEditItem>
		</>
	)
}