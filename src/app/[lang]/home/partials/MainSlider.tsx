'use client';

import React from 'react';
import Image from 'next/image';
import { IMainSlider } from '@/app/types/general';
import 'swiper/css/navigation';
import parseImageUrl from '@/PareseImageUrl';
import CustomSlickSlider from '../../../components/Common/Modal/CustomSlickSlider';

export default function MainSlider({ sliders }: { sliders: IMainSlider[] }) {
	return (
		<div className="main-slider-parent w-100">
			<CustomSlickSlider slidersLargeScreensNumber={1}>
				{sliders.map((slider) => (
					<div style={{ height: '600px', maxHeight: '600px', width: '100%' }}>
						<Image
							width={1000}
							height={1000}
							style={{
								height: '600px', maxHeight: '600px', objectFit: 'cover', width: '100%',
							}}
							src={parseImageUrl(slider.image)}
							alt="Main Slider"
						/>
					</div>
				))}
			</CustomSlickSlider>
		</div>
	);
}
