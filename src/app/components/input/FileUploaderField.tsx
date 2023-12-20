/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ControlledInputProps } from './data';

export default function FileUploaderField({
	name, register, errors, label,
}: ControlledInputProps) {
	return (
		<div className="form-control w-100">
			<label className="block font-bold mb-2 flex justify-start" style={{ fontSize: '18px' }} htmlFor={name}>
				{label}
			</label>
			<input
				dir="ltr"
				type="file"
				name={name}
				id={name}
				accept="image/jpeg, image/png, image/gif"
				className="p-3 file-input file-input-bordered w-100"
				style={{ border: '2px solid gray', borderRadius: '6px', fontSize: '18px' }}
				{...register(name)}
			/>
			{errors[name] && <p className="text-red-600 mt-1">{errors[name]?.message}</p>}
		</div>
	);
}
