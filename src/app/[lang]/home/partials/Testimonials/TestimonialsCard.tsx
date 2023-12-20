import React from 'react';
import Image from 'next/image';
import parseImageUrl from '@/PareseImageUrl';

interface TestimonialsProps {
	name: string;
	description: string;
	image: string;
}
export default function TestimonialsCard({
	name, description, image,
}: TestimonialsProps) {
	return (
		<div
			className="h-100 container d-flex flex-column align-items-center justify-content-center"
			style={{
				paddingTop: '80px!important',
				gap: '5rem',
				maxWidth: '800px',
			}}
		>
			<div className="testimonials_image image_container d-flex mb-3">
				<Image
					height={1000}
					width={1000}
					src={parseImageUrl(image)}
					alt="Michael McBurney and Hank"
					style={{ borderRadius: '50%', height: '200px' }}
				/>
			</div>

			<div className="d-flex flex-column">
				<div className="source">
					<h3>{name}</h3>
				</div>
				<div>{description}</div>
				<div className="source pt-3 text-end">
					{' '}
					-<span className="parent_name">{name}</span>-
				</div>
			</div>
		</div>
	);
}
