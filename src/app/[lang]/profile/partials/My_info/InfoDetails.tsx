import React from 'react';

type InfoDetailsProps = {
	onEdit: () => void;
};
export default function InfoDetails({ onEdit }: InfoDetailsProps) {
	return (
		<div>
			<div className="w-100 d-flex flex-row gap-4 py-4">
				<div className="w-50">
					<h3 className="label-user">Name</h3>
					<h4 className="value-user">Mouaz Alkassam</h4>
				</div>
				<div className="w-50">
					<h3 className="label-user">Email</h3>
					<h4 className="value-user">wigles@gamil.com</h4>
				</div>
			</div>
			<div className="w-100 text-start">
				<button onClick={onEdit} type="button" className="info-btn w-25 p-2 rounded" style={{ fontWeight: 'bold', fontSize: '18px' }}>Edit Info</button>
			</div>
		</div>
	);
}
