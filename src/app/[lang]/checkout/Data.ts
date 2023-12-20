export interface InformationForm {
	email: string;
	firstName: string;
	lastName: string;
	phoneNumber: string;
	country: string;
	city: string;
	streetName: string;
	buildingNumber: number;
}
export interface DeliveryForm {
	// ringBell: boolean;
	dateTimeDelivery: string;
}

export interface CheckoutData {
	information: InformationForm;
	delivery: DeliveryForm;
}
export interface CheckoutFormProps {
	checkoutData: CheckoutData;
	onCheckoutDataChange: (newCheckoutData: CheckoutData) => void;
	setSubmitForm: () => void;
	submitForm?: boolean;
}
