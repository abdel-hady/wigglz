/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

'use client';

import { useRouter } from 'next/navigation';
import React from 'react';
import ProductCardV2 from '@/app/components/product-card/ProductCardV2';
import { FilterOption } from '@/Types/FilterTypes';
import {
	replaceSpacesWithHyphens,
	replaceSpacesWithUnderscores,
} from '@/Helpers/StringHelpers';
import CategoriesSection from './partials/CategoriesSection';
import FilterSection from './partials/FilterSection';
import { filters } from './partials/Filters';

export default function ShopPage() {
	const categoriesList = [
		{
			name: 'Balanced Meals',
			image:
				'https://media.furchildpets.com/images/shop_categories_1/category_mid_6.png',
		},
		{
			name: 'Balanced Meals',
			image:
				'https://media.furchildpets.com/images/shop_categories_1/category_mid_6.png',
		},
		{
			name: 'Balanced Meals',
			image:
				'https://media.furchildpets.com/images/shop_categories_1/category_mid_6.png',
		},
		{
			name: 'Balanced Meals',
			image:
				'https://media.furchildpets.com/images/shop_categories_1/category_mid_6.png',
		},
		{
			name: 'Balanced Meals',
			image:
				'https://media.furchildpets.com/images/shop_categories_1/category_mid_6.png',
		},
	];
	const router = useRouter();

	const onFilteredClick = (option: FilterOption, headerText: string) => {
		const header = replaceSpacesWithUnderscores(headerText);
		const label = replaceSpacesWithHyphens(option.label);
		router.push(`?search=${header}=${label}`);
	};

	return (
		<div className="shop_page shop_page_2021">
			<div className="shop_container container-fluid">
				<div className="  pt-md-4">
					<CategoriesSection categoriesList={categoriesList} />
				</div>

				<div className="row row-md-3">
					<div className="col-12 col-md filters_container max-w-auto">
						<div className="shop_filters ">
							<FilterSection
								filters={filters}
								onFilteredClick={onFilteredClick}
							/>
						</div>
					</div>

					<div className="col-12 col-md">
						<div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
							{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((num) => (
								<div className="col-12 col-sm-6 mb-4">
									<ProductCardV2
										// id={num.toString()}
										name="Freshing Wipes"
										price="AED 49.00"
										PetColor="Pet Green"
										image={
											num % 2 === 0
												? 'https://media.furchildpets.com/images/products/skin-soother-wipes-8w61bnqrh0.jpg'
												: undefined
										}
									/>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
