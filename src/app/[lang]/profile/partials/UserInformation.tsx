import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import InfoDetails from './My_info/InfoDetails';
import EditInfoDetails from './My_info/EditInfoDetails';

export default function UserInformation() {
	const [isEditing, setIsEditing] = useState(false);

	const handleEdit = () => {
		setIsEditing(true);
	};

	const handleCancel = () => {
		setIsEditing(false);
	};
	const onSubmit = () => {
		setIsEditing(false);
	};
	const t = useTranslations();
	return (
		<div className="w-100" style={{ marginTop: '60px' }}>
			{/* <h1 style={{ textAlign: 'center' }}>{t('my_information')}</h1> */}
			<h1 style={{ textAlign: 'center' }}>{t('my_information')}</h1>
			{isEditing ? (
				<EditInfoDetails onCancel={handleCancel} onSubmit={onSubmit} />
			) : (
				<InfoDetails onEdit={handleEdit} />
			)}
		</div>
	);
}
