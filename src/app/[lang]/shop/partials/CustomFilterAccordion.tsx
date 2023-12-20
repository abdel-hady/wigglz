/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

'use client';

import React from 'react';
import { useSearchParams } from 'next/navigation';
import CustomAccordion from '@/app/components/CustomAccordion';
import { replaceSpacesWithHyphens } from '@/Helpers/StringHelpers';

interface FilterOption {
	label: string;
	id: string;
	slug?: string;
}
interface CustomFilterAccordionProps {
	filterOptions: FilterOption[];
	headerText: string;
	onClick: (option: FilterOption, headerText: string) => void;
}

export default function CustomFilterAccordion({
	filterOptions,
	headerText,
	onClick,
}: CustomFilterAccordionProps) {
	const params = useSearchParams();
	const tabs = [
		{
			header: (
				<div
					className="filter_header p-3 d-flex flex-row justify-content-between align-items-center collapsed"
					data-toggle="collapse"
					data-target="#collapsebrands"
				>
					<div>
						<strong>{headerText}</strong>
					</div>
				</div>
			),
			body: (
				<div
					className="filter_body py-2 collapse show"
					id="collapsebrands"
					aria-labelledby="headingbrands"
				>
					{filterOptions.map((option) => (
						<div
							key={option.id}
							className={`filter_option ${params
								.get('search')
								?.includes(replaceSpacesWithHyphens(option.label))
								? 'active' : ''} p-2 d-flex flex-row align-items-center filter_option_pet_type_${option.label}`}
							onClick={() => onClick(option, headerText)}
						>
							<div className="check_space mx-2">
								<i className="fa fa-check" />
							</div>
							<div className="filter_option_label">{option.label}</div>
						</div>
					))}
				</div>
			),
		},
	];

	return (
		<div className="filter_section">
			<CustomAccordion tabs={tabs} />
		</div>
	);
}
