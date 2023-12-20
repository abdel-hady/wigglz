import Image from 'next/image';
import React from 'react';
import parseImageUrl from '@/PareseImageUrl';
import { AwardsCardProps } from '@/Types/home.types';

export default function AwardsCard({ name, image }: AwardsCardProps) {
	return (
		<div className="one_press_container_static p-3 w-full">
			<div
				className="px-3 d-flex justify-content-center align-items-center"
				style={{ gap: '1rem' }}
			>
				<Image
					loading="lazy"
					width={100}
					height={100}
					src={parseImageUrl(image)}
					alt="Customer Focus of the Year"
					style={{ height: '70px' }}
				/>
				<div className="line-height-1 text-uppercase pl-2">{name}</div>
			</div>
		</div>
	);
}
