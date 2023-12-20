import React from 'react';
import Slider from 'react-slick';

type ResponsiveSettings = {
	breakpoint: number;
	settings: Omit<Settings, 'responsive'>;
};

type Settings = {
	className: string;
	infinite: boolean;
	slidesToShow: number;
	slidesToScroll: number;
	initialSlide: number;
	centerPadding: string;
	speed: number;
	autoplay: boolean;
	responsive: (ResponsiveSettings | Omit<Settings, 'responsive'>)[];
};
interface CustomSlickSliderProps {
	children: React.ReactNode[];
	slidersLargeScreensNumber?: number
}
export default function CustomSlickSlider({
	slidersLargeScreensNumber, children,
}: CustomSlickSliderProps) {
	const responsiveSettings = [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
				infinite: true,
				centerMode: false,
			},
		},
		{
			breakpoint: 700,
			settings: {
				slidesToShow: 1,
				infinite: true,
				slidesToScroll: 1,
				initialSlide: 1,
				centerMode: false,
			},
		},
		{
			breakpoint: 374,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
				centerMode: true,
			},
		},
	];
	return (
		<Slider
			className="center"
			infinite
			slidesToShow={slidersLargeScreensNumber}
			slidesToScroll={slidersLargeScreensNumber}
			initialSlide={0}
			centerPadding="60px"
			speed={500}
			autoplay
			responsive={responsiveSettings}
		>
			{children}
		</Slider>
	);
}
