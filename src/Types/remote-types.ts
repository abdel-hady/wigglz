import { Option } from '@/app/components/input/data';

export interface PaginationData<T> {
	items: T[];
	totalItems: number;
	totalPages: number;
	currentPage: number;
}

export interface VisualSettings {
	id: number;
	createdAt: string;
	updatedAt: string;
	settingKey: string;
	imageFileName: string;
	imageFileUrl: string;
	title: string;
	description: string;
}

export interface MultiTypeSettings {
	id: number;
	createdAt: string;
	updatedAt: string;
	settingKey: string;
	type: Option;
	value: string;
}

export type GeneralSettingsType = MultiTypeSettings | VisualSettings;
