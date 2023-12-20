'use client';

import React from 'react';
import CustomSlickSlider from '@/app/components/Common/Modal/CustomSlickSlider';
import CategoriesCard from './Categories/CategoriesCard';

interface CategoriesSectionProps {
	categoriesList: { name: string; image?: string }[];
}

export default function CategoriesSection({ categoriesList }: CategoriesSectionProps) {
	return (
		<div className="categories-parent-slider container py-1 px-2 mb-3 pb-md-4" style={{ width: '90%' }}>
			<h3 className="text-center">Shop by Category</h3>
			<CustomSlickSlider slidersLargeScreensNumber={5}>

				{categoriesList.map((cat) => (
					<CategoriesCard name={cat.name} image={cat.image} />
				))}
			</CustomSlickSlider>
		</div>
	);
}
