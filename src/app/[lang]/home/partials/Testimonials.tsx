/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

'use client';

import 'swiper/css/navigation';
import React from 'react';
import { ITestimonial } from '@/app/types/general';
import CustomSlickSlider from '../../../components/Common/Modal/CustomSlickSlider';
import TestimonialsCard from './Testimonials/TestimonialsCard';

export default function Testimonials({
	testimonials,
}: {
	testimonials: ITestimonial[];
}) {
	return (
		<section className="section_testimonials_mobile d-flex justify-content-center py-5">
			<div className="testimonials-container d-flex justify-content-center align-items-center">
				<CustomSlickSlider slidersLargeScreensNumber={3}>
					{testimonials.map((testimonial) => (
						<TestimonialsCard
							image={testimonial.image}
							name={testimonial.name.en}
							description={testimonial.description.en}
						/>
					))}
				</CustomSlickSlider>
			</div>
		</section>
	);
}
