import Image from 'next/image';
import React from 'react';

interface NoDataProp {
	text?: string;
	image?: string;
}

export default function NoData({ text = 'No Data', image = '/images/no-data.svg' }: NoDataProp) {
	return (
		<div className="text-center d-flex flex-column py-5">
			<Image
				src={image}
				width="1000"
				height="1000"
				alt="no data"
				className="w-100"
				style={{ width: '300px', height: '300px' }}
			/>
			<h3 className="text-4xl mt-5">
				{text}
			</h3>
		</div>
	);
}
