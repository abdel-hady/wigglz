/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useForm } from 'react-hook-form';

type FormValues = {
	first_name: string;
	last_name: string;
};

type EditInfoDetailsProps = {
	onCancel: () => void;
	onSubmit: (data: FormValues) => void;
};

export default function EditInfoDetails({
	onCancel,
	onSubmit,
}: EditInfoDetailsProps) {
	const { register, handleSubmit } = useForm<FormValues>();

	return (
		<form className="w-100 " onSubmit={handleSubmit(onSubmit)}>
			<div className="d-flex justify-content-center gap-2 w-100 py-4">
				<div className="d-flex flex-column gap-2 w-50">
					<label htmlFor="first_name">
						<div className="mb-2">First Name</div>
						<input
							id="first_name"
							className="input input-bordered p-2 w-100 rounded"
							type="text"
							placeholder="First Name"
							{...register('first_name')}
						/>
					</label>
				</div>
				<div className="d-flex flex-column gap-2  w-50">
					<label htmlFor="last_name">
						<div className="mb-2">Last Name</div>
						<input
							id="last_name"
							className="input input-bordered p-2 rounded"
							type="text"
							placeholder="Last Name"
							{...register('last_name')}
						/>
					</label>
				</div>
			</div>
			<div className="w-100 d-flex justify-content-end">
				<div className="d-flex justify-content-end gap-2 w-50">
					<button
						onClick={onCancel}
						type="button"
						className="info-btn w-50 p-2 rounded"
						style={{ color: 'white' }}
					>
						Cancel
					</button>
					<button
						type="submit"
						className="info-btn w-50 p-2 rounded"
						style={{ color: 'white' }}
					>
						Edit
					</button>
				</div>
			</div>
		</form>
	);
}
