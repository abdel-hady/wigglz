import React from 'react';
import ProductCardV2 from '@/app/components/product-card/ProductCardV2';
import products from './Wishlist/products';

export default function UserWishlist() {
	return (
		<div className="w-100" style={{ marginTop: '60px' }}>
			<h1 style={{ textAlign: 'center' }}>Product Wishlist</h1>
			<div className="row py-4">
				{products.map((product) => (
					<div className="col-12 col-lg-4 col-md-5" key={product.id}>
						<ProductCardV2
							// id={product.id}
							name={product.name}
							price={product.price}
							image={product.image}
							PetColor="Pet Green"
						/>
					</div>
				))}
			</div>
		</div>
	);
}
