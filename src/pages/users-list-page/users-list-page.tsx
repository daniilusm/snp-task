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
import React from 'react';
import { StyledTableCell } from './styleMUI';
import { UserItem } from '../../components/user-item/user-item';
import { Heading, Line } from './style';

export const UserListPage: React.FC = () => {

	return (
		<>
			<Heading>
				<Typography variant="h1" component="div" gutterBottom>Welcom to Contact List</Typography>
				<Button variant="outlined" startIcon={<PersonAddIcon />}>Add new User</Button>
			</Heading>
			<Line />
			<Container>
				<TableContainer component={Paper}>
					<Table sx={{ minWidth: 700 }} aria-label="customized table">
						<TableHead>
							<TableRow>
								<StyledTableCell>Full Name</StyledTableCell>
								<StyledTableCell align="center">Age</StyledTableCell>
								<StyledTableCell align="center">Number</StyledTableCell>
								<StyledTableCell align="center">Email</StyledTableCell>
								<StyledTableCell align="center">User Name</StyledTableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							<UserItem></UserItem>
							<UserItem></UserItem>
							<UserItem></UserItem>
						</TableBody>
					</Table>
				</TableContainer>
			</Container>
		</>
	)
}