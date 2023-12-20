/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';
import CartContent from '../../cart/Cart';
import cartItemsManual from './CartItemData';
import DropdownLocale from './DropdownLocale';

export default function DesktopHeader() {
	// const { showCart, cartItems } = useCartProvider();
	const [showCart, setShowCart] = useState<boolean>(false);

	return (
		<div className="w-100 desktop_header d-none d-lg-block">
			<div className="desktop_header_container">
				<div className="desktop_header">
					<div className="desktop_header_container">
						<div className="main_header_container">
							<div className="container-fluid">
								<div className="main_menu_left d-flex flex-row justify-content-start align-items-stretch">
									<Link
										href="/en/shop"
										className="main_menu_item_link d-flex align-items-center"
									>
										Dogs
									</Link>
									<Link
										href="/en/shop"
										className="main_menu_item_link d-flex align-items-center"
									>
										Cats
									</Link>
									<Link
										href="/en/about-us/our-story"
										className="main_menu_item_link d-flex align-items-center"
									>
										Our Story
									</Link>
								</div>
								<div className="main_header_logo_container">
									<Link href="/" className="d-block">
										<Image
											src="/logo-blue.png"
											alt="Furchild Pet Nutrition"
											width={1000}
											height={1000}
										/>
									</Link>
								</div>
								<div className="main_menu_right d-flex flex-row justify-content-end align-items-stretch">
									<Link
										href="/en/about-us/contact-us"
										className="main_menu_item_link d-flex align-items-center"
									>
										Contact
									</Link>
									<Link
										href="/en/shop"
										className="main_menu_item_link d-flex align-items-center"
									>
										Shop
									</Link>
									<Link
										href="/en/auth/login"
										className="main_menu_item_link d-flex align-items-center"
									>
										Login
									</Link>
									<div className=" d-flex align-items-center main_menu_item cart_button_container">
										<div
											className="cart_button  text-center "
											onClick={() => {
												setShowCart(!showCart);
											}}
										>
											<div className="cart_items">{cartItemsManual.length}</div>
											<i className="fa fa-shopping-cart" />
										</div>
									</div>
									<DropdownLocale />
								</div>
							</div>
						</div>
					</div>
					<div className="container-fluid">
						<div className="main_dd_container">
							{showCart && <CartContent cartItemsManual={cartItemsManual} />}
							<div
								className="header_desktop_details header_desktop_dogs"
								data-id="header_desktop_dogs"
							>
								<div className="sub_menu_container">
									<a
										href="ae-en/shopc451.html?category=balanced-meals&amp;pet_type%5B%5D=dog&amp;filter=on"
										className="smc_item_section"
										data-firstitemid="137"
										data-menutype="header_desktop_dogs"
										data-menupid="24"
										data-sectiontwo=""
									>
										<i className="fa fa-angle-right" />
										Balanced Meals
									</a>
								</div>
								<div className="sub_menu_items_container">
									<div
										className="menu_item_section_container secid_24"
										data-secid="24"
									>
										<a
											href="product/chicken-veg-2-pack-dogs.html"
											className="smc_item smc_item_137"
											data-miid="137"
										>
											Chicken & Organic Vegetables
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
