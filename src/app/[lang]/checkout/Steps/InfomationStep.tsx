/* eslint-disable react/jsx-props-no-spreading */

'use client';

import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import React, { useEffect } from 'react';
import {
	CheckoutData,
	CheckoutFormProps,
	InformationForm,
} from '@/app/[lang]/checkout/Data';


const informationSchema = yup.object({
	email: yup.string().required(),
	firstName: yup.string().required(),
	lastName: yup.string().required(),
	phoneNumber: yup.string().required(),
	country: yup.string().required(),
	city: yup.string().required(),
	streetName: yup.string().required(),
	buildingNumber: yup.number().required(),
});

export default function InformationStep({
	checkoutData,
	onCheckoutDataChange,
	submitForm,
	setSubmitForm,
}: CheckoutFormProps) {
	const {
		register,
		formState: { errors },
		trigger,
		getValues,
	} = useForm<InformationForm>({
		resolver: yupResolver(informationSchema),
		defaultValues: checkoutData.information,
	});
	const blockInvalidChar = (e: any) => ['e', 'E'].includes(e.key) && e.preventDefault();

	const onSubmit = (data: InformationForm) => {
		setSubmitForm();
		const newCheckoutData: CheckoutData = {
			...checkoutData,
			information: {
				...checkoutData.information,
				email: data.email,
				firstName: data.firstName,
				lastName: data.lastName,
				phoneNumber: data.phoneNumber,
				country: data.country,
				city: data.city,
				streetName: data.streetName,
				buildingNumber: data.buildingNumber,
			},
		};
		onCheckoutDataChange(newCheckoutData);
	};

	useEffect(() => {
		if (!submitForm) {
			return;
		}
		trigger().then((res) => {
			if (!res) {
				setSubmitForm();
				return;
			}
			onSubmit(getValues());
		});
	}, [submitForm]);


	return (
		<form>
			<div className="row">
				<p style={{ fontSize: '20px', fontWeight: 'bold' }}>Please provide your personal information</p>
				<div className="col-12">
					<input
						{...register<keyof InformationForm>('email')}
						placeholder="Email"
						className="w-100 form-control py-3"
						name="email"
						type="email"
					/>
					<p className="error-text">{errors.email?.message}</p>
				</div>
				<div className="col-12">
					<input
						{...register<keyof InformationForm>('firstName')}
						placeholder="First Name"
						className="w-100 form-control py-3"
						name="firstName"
						type="text"
					/>
					<p className="error-text">{errors.firstName?.message}</p>
				</div>
				<div className="col-12">
					<input
						{...register<keyof InformationForm>('lastName')}
						placeholder="Last Name"
						className="w-100 form-control py-3"
						name="lastName"
						type="text"
					/>
					<p className="error-text">{errors.lastName?.message}</p>

				</div>
				<div className="col-12">
					<input
						{...register<keyof InformationForm>('phoneNumber')}
						placeholder="Phone Number"
						className="w-100 form-control py-3"
						name="phoneNumber"
						type="tel"
						onKeyDown={blockInvalidChar}
					/>
					<p className="error-text">{errors.phoneNumber?.message}</p>
				</div>
				<div className="col-12">
					<select
						{...register<keyof InformationForm>('country')}
						className="form-select form-select-md mb-3 w-100 py-3"
						placeholder="Select a Country"
						name="country"
						aria-label=".form-select-lg example py-3"
						defaultValue=""
					>
						<option disabled value="">Select a Country</option>
						<option value="1">One</option>
						<option value="2">Two</option>
						<option value="3">Three</option>
					</select>
					<p className="error-text">{errors.country?.message}</p>
				</div>
				<div className="col-12">
					<select
						{...register<keyof InformationForm>('city')}
						className="form-select form-select-md mb-3 w-100 py-3"
						placeholder="Select a City"
						name="city"
						aria-label=".form-select-lg example"
					>
						<option value="" disabled>Select a City</option>
						<option value="1">One</option>
						<option value="2">Two</option>
						<option value="3">Three</option>
					</select>
					<p className="error-text">{errors.city?.message}</p>
				</div>
				<div className="col-12">
					<input
						{...register<keyof InformationForm>('streetName')}
						placeholder="Street Name"
						className="w-100 form-control py-3"
						name="streetName"
						type="text"
					/>
					<p className="error-text">{errors.streetName?.message}</p>
				</div>
				<div className="col-12">
					<input
						{...register<keyof InformationForm>('buildingNumber')}
						placeholder="Building Number"
						className="w-100 form-control py-3"
						name="buildingNumber"
						type="number"
						onKeyDown={blockInvalidChar}
					/>
					<p className="error-text">{errors.buildingNumber?.message}</p>
				</div>
			</div>
		</form>


	);
}
