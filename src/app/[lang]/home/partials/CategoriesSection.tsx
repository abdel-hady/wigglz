import React from 'react';

import { IProductCategory } from '@/app/types/general';
import CustomSlickSlider from '../../../components/Common/Modal/CustomSlickSlider';
import CategoryCard from './Category/CategoryCard';

export default function CategoriesSection({
	categories,
}: {
	categories: IProductCategory[];
}) {
	return (
		<div
			style={{
				backgroundImage:
					'url("/media/images/Pet Food Branding Presentation-5.webp")',
			}}
		>
			<div
				className="py-5 container-fluid d-flex justify-content-center align-items-center flex-column"
				style={{
					backgroundColor: '#ffffffa1',
				}}
			>
				<h1 className="text-center px-3">Everything your pet needs</h1>
				<div className="subtitle text-center mb-5 px-3">
					With the widest range of holistic pet offerings, delight
					{/* eslint-disable-next-line react/no-unescaped-entities */}
					your pet's tastebuds while upgrading their health.
				</div>
				<div
					className="row d-flex justify-content-center categories-height"
					style={{ width: '90%' }}
				>
					<CustomSlickSlider slidersLargeScreensNumber={3}>
						{categories.slice(0, 4).map((cat) => (
							<CategoryCard
								key={cat.id}
								image={cat?.image}
								name={cat?.name.en}
							/>
						))}
					</CustomSlickSlider>
				</div>
			</div>
		</div>
	);
}
