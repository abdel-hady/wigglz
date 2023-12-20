import React from 'react';
import { IAward } from '@/app/types/general';
import CustomSlickSlider from '../../../components/Common/Modal/CustomSlickSlider';
import AwardsCard from './Awards/AwardsCard';

export default function Awards({ awards }: { awards: IAward[] }) {
	return (
		<section
			className="section_press py-5 d-md-block"
		>
			<div className="container-fluid d-flex flex-row flex-wrap awards-parent">
				<CustomSlickSlider slidersLargeScreensNumber={3}>
					{awards.map((award) => (
						<AwardsCard
							key={award.id}
							image={award.image}
							name={award?.name.en}
						/>
					))}
				</CustomSlickSlider>
			</div>
		</section>
	);
}
