'use client';

import React, { useEffect, useState } from 'react';
// import Benefits from '@/app/components/home/partials/Benefits';
import HealthyHome from '@/app/[lang]/home/partials/HealthyHome';
import MainSlider from './partials/MainSlider';
import Awards from './partials/Awards';
import NutritionFacts from './partials/NutritionFacts';
import NewToFeeding from './partials/NewToFeeding';
import Testimonials from './partials/Testimonials';
import CategoriesSection from './partials/CategoriesSection';
import StroiesSection from './partials/StoreisSection';
import FaqSection from './partials/FaqSection';
// import FoodBanner from './components/home/partials/FoodBanner';
import ProductsSection from './partials/ProductsSection';
import { HomeDataType } from '../../types/general';
/* eslint-disable prefer-destructuring */
const BACKEND_BASE_URL = process.env.BACKEND_BASE_URL;

console.log(BACKEND_BASE_URL);

export default function Home() {
	const [data, setData] = useState<HomeDataType | null>(null);

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(`${BACKEND_BASE_URL}/api/website`, {
				// headers: {
				// 	// 'Access-Control-Allow-Origin': '*',
				// 	// 'Access-Control-Allow-Methods': '*',
				// 	// 'Access-Control-Allow-Headers': '*',
				// },
				// credentials: 'include',
			});
			const res = await response.json();
			setData(res.data);
		};

		fetchData();
	}, []);
	if (!data) {
		return <>loading</>;
	}
	return (
		<main>
			<MainSlider sliders={data.sliders} />
			<Awards awards={data.awards} />
			<NutritionFacts facts={data.facts} />
			{/* <Benefits /> */}
			<NewToFeeding />
			<CategoriesSection categories={data.categories} />
			<HealthyHome />
			<StroiesSection />
			<FaqSection />
			<Testimonials testimonials={data.testimonials} />
			{/* <FoodBanner /> */}
			<ProductsSection />
		</main>
	);
}
