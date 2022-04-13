import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { IUserData } from "../../interfaces";

import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	TextField
} from "@mui/material";
import { ErrorMessage, BoxItem } from "./style";

type ModalFormProps = {
	item: IUserData
	open: boolean
	handleClose(): void
	editUserData(data: IUserData): void
	deleteItemInTable(id: string): void
}

const formStyle = {
	height: '550px',
	width: '400px'
}

export const ModalEditItem: React.FC<ModalFormProps> = ({ item, open, handleClose, editUserData, deleteItemInTable }) => {

	const schema = yup.object({
		fullName: yup.string().min(4, 'The number of characters must be at least 4').required('Full name is a required field'),
		email: yup.string().email('Email must be exemple@exemple.com').required('Email is a required field'),
		userName: yup.string().min(4, 'The number of characters must be at least 4').required('User name is a required field'),
	}).required();

	const { register, formState: { errors, isDirty, isValid }, reset, handleSubmit } = useForm<IUserData>({
		resolver: yupResolver(schema), mode: 'onChange',
		defaultValues: {
			fullName: item.fullName,
			email: item.email,
			userName: item.userName,
			id: item.id
		}
	});
	const onSubmit: SubmitHandler<IUserData> = (data: IUserData) => {
		editUserData(data);
	};
	const deleteItem = () => {
		deleteItemInTable(item.id)
	}

	return (
		<Dialog open={open} onClose={handleClose}>
			<form style={formStyle} onSubmit={handleSubmit(onSubmit)}>
				<DialogTitle>Add new user</DialogTitle>
				<DialogContent>
					<DialogContentText>
						To add a new user, please enter the data.
					</DialogContentText>
					<BoxItem>
						<TextField
							{...register("fullName")}
							autoFocus
							margin="dense"
							id="fullName"
							label="Full Name"
							type="text"
							fullWidth
							variant="standard"
						/>
						<ErrorMessage>{errors.fullName?.message}</ErrorMessage>
					</BoxItem>
					<BoxItem>
						<TextField
							{...register("email")}
							margin="dense"
							id="email"
							label="Email Address"
							type="text"
							fullWidth
							variant="standard"
						/>
						<ErrorMessage>{errors.email?.message}</ErrorMessage>
					</BoxItem>
					<BoxItem>
						<TextField
							{...register("userName")}
							margin="dense"
							id="userName"
							label="User Name"
							type="text"
							fullWidth
							variant="standard"
						/>
						<ErrorMessage>{errors.userName?.message}</ErrorMessage>
					</BoxItem>
				</DialogContent>
				<DialogActions>
					<Button onClick={deleteItem} color='error'>Delete</Button>
					<Button type='submit' disabled={!isDirty || !isValid} onClick={handleClose}>Save</Button>
				</DialogActions>
			</form>
		</Dialog >
	)
}
