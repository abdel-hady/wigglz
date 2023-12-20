/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashArrowUp } from '@fortawesome/free-solid-svg-icons';
import { CartItem } from '@/app/providers/cart/CartProvider';
import useCartProvider from '@/app/providers/cart/useCartProvider';

export default function Item({
	id, price, name, image,
}: CartItem) {
	const { removeFromCart } = useCartProvider();
	const [quantity, setQuantity] = useState<number>(1);
	const [totalPrice, setTotalPrice] = useState<number>(Number(price));
	const incrementQuantity = () => {
		setQuantity(quantity + 1);
	};

	const decrementQuantity = () => {
		if (quantity > 1) {
			setQuantity(quantity - 1);
		}
	};
	useEffect(() => {
		setTotalPrice(price * quantity);
	}, [quantity, setTotalPrice]);

	return (
		<div className="row border-bottom py-4" style={{ direction: 'ltr' }}>
			<div className="col-3">
				<Image
					src={image}
					width={1000}
					height={1000}
					alt=""
					style={{ height: '100px', width: '100px' }}
				/>
			</div>
			<div className="col-9 d-flex flex-column justify-content-between">
				<div className="d-flex justify-content-between align-items-center">
					<span style={{ fontSize: '1.6rem' }}>{name}</span>
					<span style={{ fontSize: '1.4rem' }}>{totalPrice}</span>
				</div>
				<div className="d-flex flex-row justify-content-between align-items-end">

					<div className="d-flex flex-column">
						<span>{price}</span>
						<div
							className="border d-flex align-items-center mt-2"
							style={{ width: '100px', height: '35px', borderRadius: '10%' }}
						>
							<div
								className="minus-quantity text-center h-100 d-flex justify-content-center align-items-center"
								style={{ width: '33%', cursor: 'pointer' }}
								onClick={decrementQuantity}
							>
								-
							</div>
							<div className="text-center" style={{ width: '34%' }}>
								{quantity}
							</div>
							<div
								className="plus-quantity text-center h-100 d-flex justify-content-center align-items-center"
								style={{ width: '35%', cursor: 'pointer' }}
								onClick={incrementQuantity}
							>
								+
							</div>
						</div>
					</div>
					<div className="d-flex flex-column justify-content-between">
						<span
							className="text-danger scale-on-hover text-end"
							style={{ fontSize: '1.5rem', cursor: 'pointer' }}
							onClick={() => {
								removeFromCart(id);
							}}
						>
							<FontAwesomeIcon icon={faTrashArrowUp} />
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}
