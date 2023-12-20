import React from 'react';

export default function FoodBanner() {
	return (
		<>
			<div className="d-none d-md-block">
				<img
					loading="lazy"
					alt="Furchild Meals"
					src="/images/banner.webp"
					className="w-100"
					style={{
						height: '800px',
						objectFit: 'cover',
					}}
				/>
			</div>
			<div className="d-md-none">
				<img
					loading="lazy"
					src="/images/banner.webp"
					alt="Raw Dog Food and Raw Cat Food"
					className="w-100"
				/>
			</div>

		</>
	);
}
