/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import DropdownBurgerMenuLinks from './DropdownBurgerMenuLinks';
import CartContent from '../../cart/Cart';
import cartItemsManual from './CartItemData';
import DropdownLocale from './DropdownLocale';

export default function MobileHeader() {
	const [navbarOpen, setNavbarOpen] = useState(false);
	const [showCart, setShowCart] = useState(false);
	return (
		<div className="mobile_header d-lg-none">
			<div className="mobile_header_container">
				<div
					className="w-100 d-flex px-4 mobile_top_container justify-content-between align-items-stretch "
					style={{ height: '60px' }}
				>
					<div className="col-5 px-0  d-flex align-items-center mobile_menu_bars justify-content-start">
						<button
							type="button"
							className="menu_bars"
							onClick={() => setNavbarOpen(!navbarOpen)}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="23"
								height="13"
								viewBox="0 0 23 13"
							>
								<g transform="translate(-15.5 -17)">
									<line
										className="menu_bars"
										x2="23"
										transform="translate(15.5 17.5)"
									/>
									<line
										className="menu_bars"
										x2="23"
										transform="translate(15.5 23.5)"
									/>
									<line
										className="menu_bars"
										x2="23"
										transform="translate(15.5 29.5)"
									/>
								</g>
							</svg>
						</button>
						<DropdownLocale />
						<div className="menu_close">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="18.707"
								height="18.707"
								viewBox="0 0 18.707 18.707"
							>
								<g transform="translate(-80.146 -17.146)">
									<line
										className="menu_close"
										x1="18"
										y2="18"
										transform="translate(80.5 17.5)"
									/>
									<line
										className="menu_close"
										x2="18"
										y2="18"
										transform="translate(80.5 17.5)"
									/>
								</g>
							</svg>
						</div>
					</div>
					<div className="col-5 px-0  d-flex justify-content-center align-items-center">
						<div className="mobile_logo_container" style={{ paddingTop: 0 }}>
							<div className="main_header_logo_container">
								<Link href="/" className="d-block">
									<Image
										src="/logo-blue.png"
										alt="Furchild Pet Nutrition"
										width={200}
										height={120}
										className="small-logo"
									/>
								</Link>
							</div>
						</div>
					</div>
					<div className="cart-icon col-5 px-0 d-flex align-items-center justify-content-end">
						<div
							className="mobile_cart_icon text-center border-none"
							style={{ cursor: 'pointer' }}
							onClick={() => setShowCart(true)}
						>
							<div className="mobile_cart_icon_container">
								<div className="cart_items">{cartItemsManual.length}</div>
								<i className="fa fa-shopping-cart" />
							</div>
							<div className="mobile_cart_icon_container_close">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="18.707"
									height="18.707"
									viewBox="0 0 18.707 18.707"
								>
									<g transform="translate(-80.146 -17.146)">
										<line
											className="menu_close"
											x1="18"
											y2="18"
											transform="translate(80.5 17.5)"
										/>
										<line
											className="menu_close"
											x2="18"
											y2="18"
											transform="translate(80.5 17.5)"
										/>
									</g>
								</svg>
							</div>
						</div>
					</div>
					{showCart && <CartContent cartItemsManual={cartItemsManual} />}
				</div>
			</div>

			<div className="mobile_header_spacer " />
			<div id="example-navbar-warning">
				{navbarOpen && (
					<DropdownBurgerMenuLinks
						closeNavCb={() => {
							setNavbarOpen(false);
						}}
					/>
				)}
			</div>
		</div>
	);
}
