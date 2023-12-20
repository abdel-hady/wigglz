/* eslint-disable react/jsx-props-no-spreading */

'use client';

import React, { useState } from 'react';
import { Steps } from 'primereact/steps';
import { TabPanel, TabView } from 'primereact/tabview';
import InformationStep from '@/app/[lang]/checkout/Steps/InfomationStep';
import { CheckoutData } from '@/app/[lang]/checkout/Data';
import DeliveryStep from '@/app/[lang]/checkout/Steps/DeliveryStep';
import Item from '@/app/components/cart/Item';
import cartItemsManual from '@/app/components/header/partials/CartItemData';
import { CartItem } from '@/app/providers/cart/CartProvider';
import Items from './Steps/StepsItems';

let index = 0;
const initialCheckoutData: CheckoutData = {
	information: {
		email: '',
		firstName: '',
		lastName: '',
		phoneNumber: '',
		country: '',
		city: '',
		streetName: '',
		buildingNumber: 0,
	},
	delivery: {
		dateTimeDelivery: '',
	},
};
export default function Checkout() {
	const [checkoutData, setCheckoutData] = useState<CheckoutData>(initialCheckoutData);
	const [activeStepperIndex, setActiveStepperIndex] = useState(0);
	const [formSubmit, setFormSubmit] = useState(false);

	const stepCheck = () => {
		if (index >= 1) {
			setFormSubmit(true);
		} else {
			index += 1;
			setActiveStepperIndex(index);
		}
	};

	const sendCheckoutData = (newCheckoutData: CheckoutData) => {
		setCheckoutData(newCheckoutData);
		if (index < 2) {
			index += 1;
			setActiveStepperIndex(index);
		}
		console.log(checkoutData);
	};

	const backStep = () => {
		index -= 1;
		setActiveStepperIndex(index);
	};

	return (
		<div className="checkout">
			<Steps
				model={Items}
				activeIndex={activeStepperIndex}
				onSelect={(e) => setActiveStepperIndex(e.index)}
			/>
			<TabView activeIndex={activeStepperIndex} onTabChange={(e) => setActiveStepperIndex(e.index)}>
				<TabPanel>
					<div
						className="container"
						style={{
							overflowY: 'auto', direction: 'rtl', scrollbarWidth: 'thin', height: '650px',
						}}
					>
						{cartItemsManual
							&& cartItemsManual.map((item: CartItem) => (
								<Item
									key={item.id}
									id={item.id}
									price={item.price}
									name={item.name}
									image={item.image}
								/>
							))}
					</div>
					<div className="form-group mt-5">
						<button onClick={stepCheck} type="button" className="btn btn-fcp-primary w-25">
							Next
						</button>
					</div>

				</TabPanel>
				<TabPanel>
					<InformationStep
						checkoutData={checkoutData}
						onCheckoutDataChange={sendCheckoutData}
						setSubmitForm={() => { setFormSubmit(false); }}
						submitForm={formSubmit}
					/>
					<div className="form-group d-flex justify-content-center gap-2 mt-5">
						<button onClick={backStep} type="button" className="btn btn-fcp-primary w-25">
							Back
						</button>
						<button onClick={stepCheck} type="button" className="btn btn-fcp-primary w-25">
							Next
						</button>
					</div>

				</TabPanel>
				<TabPanel>
					<DeliveryStep
						checkoutData={checkoutData}
						onCheckoutDataChange={sendCheckoutData}
						setSubmitForm={() => { setFormSubmit(false); }}
						submitForm={formSubmit}
					/>
					<div className="form-group mt-5 d-flex justify-content-center gap-2">
						<button onClick={backStep} type="button" className="btn btn-fcp-primary w-25">
							Back
						</button>
						<button onClick={stepCheck} type="button" className="btn btn-fcp-primary w-25">
							Finish
						</button>
					</div>

				</TabPanel>
			</TabView>
		</div>
	);
}
