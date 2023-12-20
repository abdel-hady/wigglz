export interface QueryParams {
	[key: string]: string | number | Array<any>;
}

export interface GeneralPageProp {
	params: {
		lang: string;
	};
	searchParams: any;
}

export interface MiniUser {
	name: string;
	avatar: string;
	email: string;
}

export interface User {
	id: number;
	createdAt: string;
	updatedAt: string;
	firstName: string;
	lastName: string;
	email: string;
	phoneNumber: string;
	active: boolean;
	dateOfBirth: string;
	genderLabel: string;
	avatarFileSize: number | null;
	avatarFileName: string | null;
	avatarFileUrl: string | null;
	subscribeNewsletter: boolean;
	meditationPractice?: boolean;
	exercisePractice?: boolean;
	physicalDisability?: boolean;
	medicationTaken?: boolean;
	spiritualSessionsTaken?: boolean;
	married?: boolean;
	specialization?: string;
	verifiedAt: string | null;
}
