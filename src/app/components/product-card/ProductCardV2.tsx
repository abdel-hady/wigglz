/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

'use client';

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface ProductCardV2Props {
	// id: string;
	name: string;
	price: string;
	image?: string;
	PetColor?: string;
}

function ProductCardV2({
	// id,
	name,
	price,
	PetColor,
	image = '/images/balls.jpg',
}: ProductCardV2Props) {
	const router = useRouter();
	const handleClick = () => {
		router.push('/en/products/1');
	};
	return (
		<div
			className="main-card position-relative product-card bg-white border-none d-flex flex-column"
			onClick={handleClick}
		>
			<div className="card-image">
				<Image width={1000} height={1000} src={image} alt="" />
				<div className="image-overlay">
					<OverlayTrigger
						overlay={<Tooltip id="tooltip">cart</Tooltip>}
						placement="top"
					>
						<div className="bg-warning rounded-circle text-white fs-6 p-1 m-1 opacity-1 transition d-flex justify-content-center align-items-center">
							<FontAwesomeIcon icon={faCartShopping} />
						</div>
					</OverlayTrigger>
					<OverlayTrigger
						overlay={<Tooltip id="tooltip">wishlist</Tooltip>}
						placement="top"
					>
						<div className="position-relative bg-warning rounded-circle text-white fs-6 p-1 m-1 opacity-1 transition d-flex justify-content-center align-items-center">
							<FontAwesomeIcon icon={faHeart} />
						</div>
					</OverlayTrigger>
				</div>
			</div>
			<div className="card-details d-flex justify-content-center align-items-center flex-column">
				<h3 className="text-center">{name}</h3>
				<div className="caption-with-letter-spacing light">{PetColor}</div>
				<div className="price">{price}</div>
			</div>
		</div>
	);
}

export default ProductCardV2;
