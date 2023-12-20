'use client';

import React, { useState } from 'react';
import { faClose, faEdit, faLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import EditProfileImageModal from './Modals/EditProfileImageModal';
import DeleteProfileImageModal from './Modals/DeletePorfileImageModal';
import ChangePasswordModal from './Modals/ChangePasswordModal';

interface MiniUser {
	avatar: string;
}
interface ProfileBasicInfoType {
	miniUser: MiniUser;
}

function HoverButton({ icon, onClick }: { icon: any, onClick: () => void }) {
	return (
		<button
			className="profile-icons-avatar
                d-flex justify-content-center align-items-center
            "
			style={{
				width: '50px',
				height: '50px',
				borderRadius: '50%',
				padding: '10px',
				cursor: 'pointer',
			}}
			type="button"
			onClick={onClick}
		>
			<FontAwesomeIcon icon={icon} size="xl" />
		</button>
	);
}

export default function ProfileBasicInfo({ miniUser }: ProfileBasicInfoType) {
	const [isEditProfileModalOpen, setIsEditProfileModalOpen] = useState<boolean>(false);
	const [isDeleteImageModalOpen, setIsDeleteImageModalOpen] = useState<boolean>(false);
	const [isChangePasswordModalOpen, setIsChangePasswordModalOpen] = useState<boolean>(false);

	return (
		<>
			<div
				className="rounded-lg p-4 position-relative rounded"
				style={{ width: 'fit-content', borderStyle: 'dashed' }}
			>
				<Image
					width={1000}
					height={1000}
					alt="profile cover image border-dashed"
					src={miniUser.avatar}
					className="profile-cover-image"
					style={{ width: '250px', height: '250px' }}
				/>
				<div className="position-absolute top-0 left-0 d-flex flex-column mt-4 gap-1">
					<HoverButton icon={faEdit} onClick={() => { setIsEditProfileModalOpen(true); }} />
					<HoverButton icon={faClose} onClick={() => { setIsDeleteImageModalOpen(true); }} />
					<HoverButton icon={faLock} onClick={() => { setIsChangePasswordModalOpen(true); }} />
				</div>
			</div>
			<EditProfileImageModal
				isOpen={isEditProfileModalOpen}
				closeModal={() => { setIsEditProfileModalOpen(false); }}
			/>
			<DeleteProfileImageModal
				isOpen={isDeleteImageModalOpen}
				closeModal={() => { setIsDeleteImageModalOpen(false); }}
			/>
			<ChangePasswordModal
				isOpen={isChangePasswordModalOpen}
				closeModal={() => { setIsChangePasswordModalOpen(false); }}
			/>
		</>
	);
}
