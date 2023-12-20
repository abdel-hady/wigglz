/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import useCartProvider from '@/app/providers/cart/useCartProvider';

export default function CartHeader() {
	const { hideCart } = useCartProvider();
	return (
		<div
			className="container d-flex justify-content-between align-items-center border-bottom col-12 col-md-6 col-lg-5 col-xl-4"
			style={{
				height: '80px', backgroundColor: 'rgba(255, 245, 233, .5)', position: 'fixed', top: 0,
			}}
		>
			<span style={{ fontSize: '1.5rem' }}>My Cart</span>
			<span
				onClick={() => {
					hideCart();
				}}
				className="scale-on-hover"
			>
				<i className="fa fa-close" style={{ cursor: 'pointer' }} />
			</span>
		</div>
	);
}
