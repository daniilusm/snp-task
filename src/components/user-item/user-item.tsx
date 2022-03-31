import PersonIcon from '@mui/icons-material/Person';
import React from 'react';
import { StyledTableCell, StyledTableRow } from '../../pages/users-list-page/styleMUI';
import { FullName } from './style';

export const UserItem: React.FC = () => {
	return (
		<>
			<StyledTableRow key="123">
				<StyledTableCell component="th" scope="row">
					<FullName>
						<PersonIcon color='primary' /> Jhon Smith
					</FullName>
				</StyledTableCell>
				<StyledTableCell align="center">28</StyledTableCell>
				<StyledTableCell align="center">+7 4822 9379992</StyledTableCell>
				<StyledTableCell align="center">wait.for.me@mail.ru</StyledTableCell>
				<StyledTableCell align="center">aaaa/tttt</StyledTableCell>
			</StyledTableRow>
		</>
	)
}