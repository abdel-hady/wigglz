import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import parseImageUrl from '@/PareseImageUrl';

export interface AwardsCardProps {
	name: string;
	image: string | undefined;
}

export default function CategoryCard({ name, image }: AwardsCardProps) {
	return (
		<div
			className="my-2 d-flex justify-content-center align-items-center"
			style={{ width: '80%' }}
		>
			<div className="one_category_container">
				<Link
					href="ae-en/shop2076.html?category=freeze-dried-treats"
					target="_blank"
					className="d-flex flex-column h-100 w-100 justify-content-center align-items-center text-center rounded-circle shadow-sm scale-on-hover"
				>
					{image && (
						<Image src={parseImageUrl(image)} height={200} width={200} alt="" />
					)}
					<div className="subtitle">{name}</div>
				</Link>
			</div>
		</div>
	);
}
