import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

type CategoriesCardProps = {
	image: string | undefined;
	name: string;
};
export default function CategoriesCard({ name, image }:CategoriesCardProps) {
	return (
		<div key={Math.random()} className="d-flex justify-conten-center flex-column align-items-center">
			<Link
				href="shopb 302.html?category=balanced-meals"
				className="one_category category_balanced-meals d-flex align-items-center justify-content-center scale-on-hover"
				style={{
					height: '150px',
					width: '150px',
					borderRadius: '50%',
					backgroundColor: '#fff5e9',
				}}
			>
				<div className="category_name text-center">
					<div style={{ width: '120px', height: '120px' }}>
						<Image
							src={`${image || ''}`}
							width={120}
							height={120}
							alt=""
						/>
					</div>
				</div>
			</Link>
			<div className="text-center mt-3">{name}</div>
		</div>
	);
}
