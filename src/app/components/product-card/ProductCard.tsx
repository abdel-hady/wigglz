'use client';

import React from 'react';
// import useCartProvider from '@/app/providers/cart/useCartProvider';

interface ProductCardProps {
	// id: string;
	name: string;
	price: string;
	image?: string;
	big?: boolean;

}
function ProductCard({
	// id,
	name, price, image = '/images/balls.jpg',
	big = false,
}: ProductCardProps) {
	// const { addToCart } = useCartProvider();

	return (
		<div style={{
			height: big ? '450px' : '350px',
			backgroundColor: '#fff5e9',
			border: '1px solid lightgray',
			borderRadius: '5%',
			overflow: 'hidden',

		}}
		>

			<div style={{
				height: '75%',
				backgroundColor: 'white',
			}}
			>
				<img src={image} height="100%" width="100%" style={{ objectFit: 'cover', objectPosition: 'center' }} alt="" />
			</div>
			<div className="d-flex align-items-center justify-content-between px-3 bg-custom-primary color-custom-thirdary" style={{ height: '25%' }}>
				<div>
					<h4>{name}</h4>
					<span>{price}</span>
				</div>
				<button
					type="button"
					className="btn btn-fcp-primary mt-2"
					// onClick={() => {
					// 	addToCart({
					// 		id,
					// 		price,
					// 		name,
					// 	});
					// }}
				>Add
				</button>
			</div>

		</div>
	);
}

export default ProductCard;
