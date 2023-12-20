'use client';

import { Calendar } from 'primereact/calendar';
import { useForm, Controller } from 'react-hook-form';
import React, { useEffect } from 'react';
import { classNames } from 'primereact/utils';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import {
	CheckoutData,
	CheckoutFormProps,
	DeliveryForm,
} from '@/app/[lang]/checkout/Data';

const deliverySchema = yup.object({
	dateTimeDelivery: yup.string().required(),
});

export default function DeliveryStep(
	{
		checkoutData,
		onCheckoutDataChange,
		submitForm,
		setSubmitForm,
	}: CheckoutFormProps,
) {
	const {
		formState: { errors },
		trigger,
		getValues,
		control,
		handleSubmit,
	} = useForm<DeliveryForm>({
		resolver: yupResolver(deliverySchema),
		defaultValues: checkoutData.delivery,
	});

	const onSubmit = (data: DeliveryForm) => {
		setSubmitForm();
		const newCheckoutData: CheckoutData = {
			...checkoutData,
			delivery: {
				...checkoutData.delivery,
				dateTimeDelivery: data.dateTimeDelivery.toString(),
			},
		};
		onCheckoutDataChange(newCheckoutData);
	};

	useEffect(() => {
		console.log(getValues().dateTimeDelivery);
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
		<div className="flex justify-content-center">
			<p style={{ fontSize: '20px', fontWeight: 'bold' }}>Please select the date and time for your delivery below</p>

			<form className="flex flex-column gap-2" onSubmit={handleSubmit(onSubmit)}>
				<Controller
					name="dateTimeDelivery"
					control={control}
					defaultValue={getValues().dateTimeDelivery}
					render={({ field, fieldState }) => (
						<>
							<span className="p-float-label">
								<Calendar
									inputId={field.name}
									value={field.value}
									onChange={field.onChange}
									dateFormat="dd/mm/yy"
									name="dateTimeDelivery"
									className={`w-100 ${classNames({ 'p-invalid': fieldState.error })}`}
									showTime
									hourFormat="12"
								/>
								{/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
								<label htmlFor={field.name}>Delivery Date & Time</label>
							</span>
							<p className="error-text">{errors.dateTimeDelivery?.message}</p>
						</>
					)}
				/>
			</form>
		</div>
	);
}
