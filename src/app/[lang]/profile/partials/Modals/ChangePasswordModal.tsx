/* eslint-disable react/jsx-props-no-spreading */

'use client';

import React, { useState } from 'react';
import { Resolver, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import UsersService from '@/app/lib/service/UsersService';
import GeneralModal from '@/app/components/Common/Modal/GeneralModal';

interface IForm {
	currentPassword: string,
	password: string,
	confirmPassword: string
}

function createSchema() {
	const changePasswordValidationSchema = yup.object().shape({
		currentPassword: yup.string().required('Current password is required').min(8, 'Password must be at least 8 characters'),
		password: yup.string().required('new password is required').min(8, 'password must be at least 8 characters'),
		confirmPassword: yup.string().required('confirm password is required').oneOf([yup.ref('password')], 'passwords must match'),
	});
	return changePasswordValidationSchema;
}

export default function ChangePasswordModal(
	{ isOpen, closeModal }: { isOpen: boolean, closeModal: () => void },
) {
	const schema = createSchema();
	const { register, handleSubmit, formState: { errors } } = useForm<IForm>({
		resolver: yupResolver(schema) as Resolver<IForm>,
	});
	const [isLoading, setIsLoading] = useState<boolean>(false);


	const onSubmit = (data: IForm) => {
		const { currentPassword, password, confirmPassword } = data;
		setIsLoading(true);
		// PostFormData(AUTH_URLS.changePassword, dataToSend, onSuccess, onError);
		UsersService.changePassword(currentPassword, password, confirmPassword, 'ar')
			.then(() => {
				toast.success('password changed successfully', { position: 'top-right' });
				closeModal();
			})
			.catch(() => {
				setIsLoading(false);
			});
	};

	return (
		<GeneralModal
			title="change password"
			description=""
			isOpen={isOpen}
			closeModal={closeModal}
			hideText="hide"
			actionProps={{
				actionText: 'submit',
				actionCb: handleSubmit(onSubmit),
				actionSubmit: true,
			}}
			isBtnLoading={isLoading}
		>
			<form className="d-flex flex-column gap-3" style={{ fontSize: '18px' }} onSubmit={handleSubmit(onSubmit)}>
				<div className="d-flex flex-column gap-2 w-100">
					<label htmlFor="current_password w-100">
						<div className="mb-2">Current password</div>
						<input
							id="current_password"
							className="input input-bordered p-2 w-100 rounded"
							type="password"
							placeholder="Current password"
							{...register('currentPassword')}
						/>
					</label>
					{errors.currentPassword && <span style={{ color: 'red', fontSize: '16px' }}>{errors.currentPassword?.message}</span>}
				</div>
				<div className="d-flex flex-column gap-2 w-100">
					<label htmlFor="new_passwordw-100">
						<div className="mb-2">New password</div>
						<input
							id="new_password"
							className="input input-bordered p-2 w-100 rounded"
							type="password"
							placeholder="New password"
							{...register('password')}
						/>
					</label>
					{errors.password && <p style={{ color: 'red', fontSize: '16px' }}>{errors.password?.message}</p>}
				</div>
				<div className="d-flex flex-column gap-2  w-100">
					<label htmlFor="confirm_password">
						<div className="mb-2">Confirm password</div>
						<input
							id="confirm_password"
							className="input input-bordered p-2 w-100 rounded"
							type="password"
							placeholder="Confirm password"
							{...register('confirmPassword')}
						/>
					</label>
				</div>
				{errors.confirmPassword && <p style={{ color: 'red', fontSize: '16px' }}>{errors.confirmPassword?.message}</p>}
			</form>
		</GeneralModal>
	);
}
