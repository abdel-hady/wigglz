import PostAsync from '@/app/util/ApiClient/PostAsync';
import GetSecureAsync from '@/app/util/ApiClient/secure/GetSecureAsync';
import PostSecureAsync from '@/app/util/ApiClient/secure/PostSecureAsync';
import { AUTH_URLS } from '@/app/util/ApiClient/url';

type User = {

} & any;
async function getProfile(locale: string) {
	const url = AUTH_URLS.profile;

	const user = await GetSecureAsync<User>({
		url,
		locale,
	});
	return user;
}


async function forgotPassword(email: string, locale: string) {
	const url = AUTH_URLS.forgotPassword;
	const res = await PostAsync({
		url,
		locale,
		data: { email },
	});
	return res;
}
async function register(
	firstName: string,
	lastName: string,
	email: string,
	password: string,
	phoneNumber: string,
	dateOfBirth: string,
	gender: string,
	country: number,
	subscribeNewsletter: boolean,
	locale: string,
) {
	const url = AUTH_URLS.register;
	const res = await PostAsync({
		url,
		locale,
		data: {
			firstName,
			lastName,
			email,
			password,
			phoneNumber,
			dateOfBirth,
			gender,
			country,
			subscribeNewsletter,
		},
	});
	return res;
}
async function login(email: string, password: string, locale: string) {
	const url = AUTH_URLS.login;
	const res = await PostAsync({
		url,
		locale,
		data: {
			email,
			password,
		},
	});
	return res;
}

async function changePassword(
	currentPassword: string,
	password: string,
	confirmPassword: string,
	locale: string,
) {
	const url = AUTH_URLS.changePassword;
	const res = await PostSecureAsync({
		url,
		locale,
		isClientSide: true,
		data: {
			currentPassword,
			password,
			confirmPassword,
		},

	});
	return res;
}
async function resetPassword(
	password: string,
	confirmPassword: string,
	token: string,
	locale: string,
) {
	const url = AUTH_URLS.resetPassword;
	const res = await PostSecureAsync({
		url,
		locale,
		isClientSide: true,
		data: {
			token,
			password,
			confirmPassword,
		},

	});
	return res;
}
async function editProfile(
	firstName: string,
	lastName: string,
	email: string,
	phoneNumber: string,
	gender: string,
	country: number | undefined,
	dateOfBirth: string,
	meditationPractice: boolean,
	exercisePractice: boolean,
	physicalDisability: boolean,
	medicationTaken: boolean,
	spiritualSessionsTaken: boolean,
	married: boolean,
	specialization: string,
	locale: string,
) {
	const url = AUTH_URLS.profile;
	const res = await PostSecureAsync({
		url,
		locale,
		isClientSide: true,
		isFormData: true,
		data: {
			firstName,
			lastName,
			email,
			phoneNumber,
			gender,
			country,
			dateOfBirth,
			meditationPractice,
			exercisePractice,
			physicalDisability,
			medicationTaken,
			spiritualSessionsTaken,
			married,
			specialization,
		},

	});
	return res;
}
async function editAvatar(
	avatar: File | null,
	locale: string,
) {
	console.log(avatar);
	const url = AUTH_URLS.profile;
	const res = await PostSecureAsync({
		url,
		locale,
		isClientSide: true,
		isFormData: true,
		data: {
			avatar,
		},

	});
	return res;
}
async function deleteAvatar(
	avatar: string,
	locale: string,
) {
	console.log(avatar);
	const url = AUTH_URLS.profile;
	const res = await PostSecureAsync({
		url,
		locale,
		isClientSide: true,
		isFormData: true,
		data: {
			avatar,
		},

	});
	return res;
}
async function verifyEmail(
	confirmationToken: string | null,
	locale: string,
) {
	const url = AUTH_URLS.verifyEmail;
	const res = await PostSecureAsync({
		url,
		locale,
		isClientSide: true,
		data: {
			confirmationToken,
		},

	});
	return res;
}


const UsersService = {
	getProfile,
	forgotPassword,
	changePassword,
	register,
	login,
	editProfile,
	resetPassword,
	editAvatar,
	deleteAvatar,
	verifyEmail,
};

export default UsersService;
