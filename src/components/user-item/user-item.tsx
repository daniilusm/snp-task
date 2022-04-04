import React, { useState } from 'react';
import PersonIcon from '@mui/icons-material/Person';
import { Button } from '@mui/material';

import { IUserData } from '../../interfaces';

import { StyledTableCell, StyledTableRow } from '../../pages/users-list-page/styleMUI';
import { FullName } from './style';
import ModalUser from '../modal-user';

type UserItemProps = {
	item: IUserData
}

export const UserItem: React.FC<UserItemProps> = ({ item }) => {

	const [open, setOpen] = useState<boolean>(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);


	return (
		<>
			<StyledTableRow>
				<StyledTableCell component="th" scope="row">
					<FullName>
						<PersonIcon color='primary' /> {item.fullName}
					</FullName>
				</StyledTableCell>
				<StyledTableCell align="center">{item.email}</StyledTableCell>
				<StyledTableCell align="center">{item.userName}</StyledTableCell>
				<StyledTableCell align="center">
					<Button onClick={handleOpen}>open</Button>
				</StyledTableCell>
			</StyledTableRow>
			<ModalUser open={open} handleClose={handleClose} item={item}></ModalUser>
		</>
	)
}