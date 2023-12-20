import React from 'react';
import CustomFilterAccordion from './CustomFilterAccordion';
import ShopSearchFilters from './ShopSearchFilters';

interface FilterOption {
	label: string;
	id: string;
	slug?: string;
}

interface Filter {
	title: string;
	filterOptions: FilterOption[];
}

interface FilterSectionProps {
	filters: Filter[];
	onFilteredClick: (option: FilterOption, headerText: string) => void;
}
export default function FilterSection({
	filters,
	onFilteredClick,
}: FilterSectionProps) {
	return (
		<>
			<ShopSearchFilters />
			<div>
				{filters.map((filter) => (
					<CustomFilterAccordion
						key={filter.title}
						filterOptions={filter.filterOptions}
						headerText={filter.title}
						onClick={onFilteredClick}
					/>
				))}
			</div>
		</>
	);
}
