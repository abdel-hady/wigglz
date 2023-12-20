
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import GeneralModal from '@/app/components/Common/Modal/GeneralModal';
import UsersService from '@/app/lib/service/UsersService';

export default function DeleteProfileImageModal(
	{ isOpen, closeModal }: { isOpen: boolean, closeModal: () => void },
) {
	const [isLoading, setIsLoading] = useState<boolean>(false);


	const handleDeleteClick = () => {
		setIsLoading(true);

		const avatar = '';
		UsersService.deleteAvatar(avatar, 'ar').then(() => {
			toast.success('Image deleted successfully', { position: 'top-right' });
			closeModal();
			setTimeout(() => {
				window.location.reload();
			}, 500);
		}).catch(() => {
			setIsLoading(false);
		});
	};

	return (
		<GeneralModal
			title="Delete profile image"
			description="Are you sure you want to delete image"
			isOpen={isOpen}
			closeModal={closeModal}
			hideText="hide"
			actionProps={{
				actionText: 'delete',
				actionCb: handleDeleteClick,
				actionSubmit: true,

			}}
			isBtnLoading={isLoading}
		/>
	);
}
