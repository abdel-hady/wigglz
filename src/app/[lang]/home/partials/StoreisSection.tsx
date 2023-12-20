'use client';

import React from 'react';
import { IPetStory } from '@/app/types/general';
import 'swiper/css';
import 'swiper/css/navigation';
import CustomSlickSlider from '../../../components/Common/Modal/CustomSlickSlider';
import StoryCard from './Story/StoryCard';

export default function StroiesSection() {
	const stories: IPetStory[] = [
		{
			id: '1',
			name: 'Caroline Stanbury',
			description: '"Their coat is very shiny and glossy, their eyes are bright, they\'re just happy, and they love the food!"',
			video: 'https://www.youtube.com/watch?v',
		}, {
			id: '2',
			name: 'Caroline Stanbury',
			description: '"Their coat is very shiny and glossy, their eyes are bright, they\'re just happy, and they love the food!"',
			video: 'https://www.youtube.com/watch?v',
		}, {
			id: '3',
			name: 'Caroline Stanbury',
			description: '"Their coat is very shiny and glossy, their eyes are bright, they\'re just happy, and they love the food!"',
			video: 'https://www.youtube.com/watch?v',
		}, {
			id: '4',
			name: 'Caroline Stanbury',
			description: '"Their coat is very shiny and glossy, their eyes are bright, they\'re just happy, and they love the food!"',
			video: 'https://www.youtube.com/watch?v',
		},
	];

	return (
		<div className="stories-section container-fluid p-0 p-sm-3 overflow-hidden">
			<div className="py-5 d-md-block ">
				<h1 className="text-center">Real stories. Real results.</h1>
				<div className="subtitle text-center mb-3">Trusted by 1000s of pet parents and loved by even more
					dogs and cats.
				</div>
				<div className="stories-parent px-5 justify-content-center row">
					<CustomSlickSlider slidersLargeScreensNumber={3}>
						{stories.map((story) => (
							<StoryCard
								name={story.name}
								description={story.description}
								image="/images/story-image.jpg"
							/>
						))}
					</CustomSlickSlider>
				</div>
			</div>
		</div>
	);
}
