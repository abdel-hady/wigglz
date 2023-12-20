'use client';

import React from 'react';
import CustomSlickSlider from '../../../components/Common/Modal/CustomSlickSlider';
import ProductCardV2 from '../../../components/product-card/ProductCardV2';

export default function ProductsSection() {
	const products = [
		{
			id: '1',
			name: 'freshing Wipes',
			price: 'AED 49.00',
			image:
				'https://media.furchildpets.com/images/products/skin-soother-wipes-8w61bnqrh0.jpg',
		},
		{
			id: '2',
			name: 'freshing Wipes',
			price: 'AED 49.00',
			image: '/images/balls.jpg',
		},
		{
			id: '3',
			name: 'freshing Wipes',
			price: 'AED 49.00',
			image:
				'https://media.furchildpets.com/images/products/skin-soother-wipes-8w61bnqrh0.jpg',
		},
		{
			id: '4',
			name: 'freshing Wipes',
			price: 'AED 49.00',
			image: '/images/products/product-img-1.webp',
		},
	];

	return (
		<div
			className="container-fluid "
			style={{
				backgroundColor: 'white',
				// color: '#416f6f',
			}}
		>
			<div className="py-5 d-flex flex-column align-items-center">
				<h2 className="text-center color-secondary">Discover Our Products.</h2>
				<div className="subtitle text-center mb-4">
					Trusted by 1000s of pet parents and loved by even more dogs and cats.
				</div>
				<div
					className="products-card d-flex justify-content-center"
					style={{ width: '90%' }}
				>
					<CustomSlickSlider slidersLargeScreensNumber={4}>
						{products.map((product) => (
							<div className="mb-4 w-full" key={product.id}>
								<ProductCardV2
									// id={product.id}
									name={product.name}
									price={product.price}
									image={product.image}
									PetColor="Pet Green"
								/>
							</div>
						))}
					</CustomSlickSlider>
				</div>
			</div>
		</div>
	);
}
