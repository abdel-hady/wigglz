import { Filter, FilterOption } from '@/Types/FilterTypes';

export const petTypes: FilterOption[] = [
	{
		label: 'Dogs',
		id: 'dogs',
	},
	{
		label: 'Cats',
		id: 'cats',
	},
];

export const brands: FilterOption[] = [
	{
		label: 'Furchild',
		id: 'furchild',
	},
	{
		label: 'Bark & Whiskers (Dr Mercola)',
		id: 'bark-whiskers',
	},
	{
		label: 'Dermadog',
		id: 'dermadog',
	},
	{
		label: 'Pet Play (Doggy Be)',
		id: 'pet-play',
	},
	{
		label: 'Natural Dog Company',
		id: 'natural-dog-company',
	},
	{
		label: 'LickiMat',
		id: 'lickimat',
	},
	{
		label: 'Messy Mutts/Cats',
		id: 'messy-mutts-cats',
	},
];

export const productCategories: FilterOption[] = [
	{
		label: 'Complete & Balanced Meals',
		id: 'complete-balanced-meals',
	},
	{
		label: 'Freeze-dried Treats',
		id: 'freeze-dried-treats',
	},
	{
		label: 'Bones & Chews',
		id: 'bones-chews',
	},
	{
		label: 'Toppers & Hydrators',
		id: 'toppers-hydrators',
	},
	{
		label: 'freshing',
		id: 'freshing',
	},
	{
		label: 'Supplements',
		id: 'supplements',
	},
	{
		label: 'Bowls & Food Preparation',
		id: 'bowls-food-preparation',
	},
	{
		label: 'Toys & More!',
		id: 'toys-more',
	},
];

export const filters: Filter[] = [
	{
		title: 'Pet Types',
		filterOptions: petTypes,
	},
	{
		title: 'Product Categories',
		filterOptions: productCategories,
	},
	{
		title: 'Brands',
		filterOptions: brands,
	},
];
