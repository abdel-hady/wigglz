export interface FilterOption {
	label: string;
	id: string;
	slug?: string;
}
export interface Filter {
	title: string;
	filterOptions: FilterOption[];
}
