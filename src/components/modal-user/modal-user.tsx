import { Box, Modal, Typography } from "@mui/material";
import React from "react";
import { IUserData } from "../../interfaces";

const style = {
	position: 'absolute' as 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'background.paper',
	border: '2px solid #000',
	boxShadow: 24,
	p: 4,
};

type ModalUserProps = {
	open: boolean
	item: IUserData
	handleClose(): void
}

export const ModalUser: React.FC<ModalUserProps> = ({ open, item, handleClose }) => {
	return (
		<>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={style}>
					<Typography id="modal-modal-title" variant="h6" component="h2">Full name: {item.fullName}</Typography>
					<Typography id="modal-modal-description" sx={{ mt: 2 }}>
						{item.fullName} email: {item.email}
					</Typography>
					<Typography id="modal-modal-description" sx={{ mt: 2 }}>
						{item.fullName} user name: {item.userName}
					</Typography>
				</Box>
			</Modal>
		</>
	)
}