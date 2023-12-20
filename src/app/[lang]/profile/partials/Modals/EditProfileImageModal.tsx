import React, { useState } from 'react';
import { useForm } from 'react-hook-form';


import { toast } from 'react-toastify';
import GeneralModal from '@/app/components/Common/Modal/GeneralModal';
import UsersService from '@/app/lib/service/UsersService';
import FileUploaderField from '@/app/components/input/FileUploaderField';

interface IForm {
	avatar: FileList
}

export default function EditProfileImageModal(
	{ isOpen, closeModal }: { isOpen: boolean, closeModal: () => void },
) {
	const { register, handleSubmit, formState: { errors } } = useForm<IForm>({
	});

	const [isLoading, setIsLoading] = useState<boolean>(false);

	const onSubmit = (data: IForm) => {
		setIsLoading(true);
		const { avatar } = data;
		if (avatar.length > 0) {
			UsersService.editAvatar(avatar.item(0), 'ar').then(() => {
				toast.success('Image changed successfully', { position: 'top-right' });
				closeModal();
				setTimeout(() => {
					window.location.reload();
				}, 500);
			}).catch(() => {
				setIsLoading(false);
			});
		} else {
			setIsLoading(false);
			// console.log('no image assigned');
		}
	};

	return (
		<GeneralModal
			title="Edit profile image"
			description="Upload an image"
			isOpen={isOpen}
			closeModal={closeModal}
			hideText="hide"
			actionProps={{
				actionText: 'update',
				actionCb: handleSubmit(onSubmit),
				actionSubmit: true,
			}}
			isBtnLoading={isLoading}
		>
			<form onSubmit={handleSubmit(onSubmit)}>
				<FileUploaderField register={register} errors={errors} name="avatar" label="Profile image" />
			</form>
		</GeneralModal>
	);
}
