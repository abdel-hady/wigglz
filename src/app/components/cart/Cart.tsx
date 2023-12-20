/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

'use client';

import React from 'react';
import { CartItem } from '@/app/providers/cart/CartProvider';
import Item from './Item';
import CartHeader from './CartHeader';
import CheckOut from './CheckOut';

export default function CartContent({ cartItemsManual }: { cartItemsManual: CartItem[] }) {
	return (
		<div
			style={{
				zIndex: '100',
				height: '100vh',
				position: 'fixed',
				right: 0,
				top: 0,
				backgroundColor: 'white',
				borderLeft: '1px solid lightgray',
				borderTopRightRadius: '15px',
				borderBottomRightRadius: '15px',
				overflow: 'auto',

			}}
			className="border-left col-12 col-md-6 col-lg-5 col-xl-4 d-flex align-items-center flex-column"
		>
			<CartHeader />
			<div
				className="container"
				style={{
					overflowY: 'auto', direction: 'rtl', scrollbarWidth: 'thin', marginTop: '80px', marginBottom: '120px',
				}}
			>
				{cartItemsManual
					&& cartItemsManual.map((item: CartItem) => (
						<Item
							key={item.id}
							id={item.id}
							price={item.price}
							name={item.name}
							image={item.image}
						/>
					))}
			</div>
			<CheckOut />
		</div>
	);
}
