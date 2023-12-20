'use client';

import React from 'react';
import ReactImageGallery from 'react-image-gallery';
import CustomAccordion from '@/app/components/CustomAccordion';
import 'react-image-gallery/styles/css/image-gallery.css';
import ProductCardV2 from '@/app/components/product-card/ProductCardV2';
import {
	IngredientsTabs,
	ApplicationTabs,
	FAQsTabs,
	ProvidedByTabs,
} from './AccordionTabs';
import ProductDescription from './ProductDescription';
import ImagesGallery from './ImagesGallery';


export default function SingleProduc() {
	const products = [1, 2, 3, 4];
	return (
		<div className="product-page container">
			<div className="container">
				<div className="main_details">
					<div className="row image_row_container">
						<div className="col-12 col-md-6 pt-md-5 pb-md-3 px-0 px-md-3 image_side_container">
							<div className="">
								<ReactImageGallery
									showPlayButton={false}
									showFullscreenButton={false}
									autoPlay
									items={ImagesGallery}
								/>
							</div>
						</div>
						<div className="col-12 col-md-6 mt-5 mt-md-0 py-5 details_section px-5">
							<div className="main_content_details">
								<h1 className="product_name mb-2">Freshing Wipes </h1>
								<ProductDescription />
								<div className="cart_function">
									<div className="d-flex no-gutters flex-row action_section justify-content-between align-items-stretch mb-3">
										<div className="stock_quantity col-3">
											<div className="no-gutters d-flex justify-content-between align-items-center h-100">
												<div className="minus_quantity text-center">-</div>
												<input
													type="text"
													id="product_quantity"
													defaultValue={1}
													min={1}
													max={99}
													maxLength={2}
													style={{ width: 50 }}
												/>
												<div className="plus_quantity text-center">+</div>
											</div>
										</div>
										<div className="col-5 ">
											<div className="stock_selection dropdown h-100">
												<div
													className="selected_stock"
													style={{ textAlign: 'center' }}
												>
													<span className="optional_name" />
												</div>
											</div>
										</div>
										<div className="col-4 d-flex flex-column text-right justify-content-center pr-3 ">
											<div className="old_price" />
											<span className="total_amount font-weight-normal">
												<span className="total_amount_text">
													AED <span>49.00</span>
												</span>
											</span>
										</div>
									</div>
									<div className="add_to_cart_button btn btn-fcp-primary mb-3 btn-lg ">
										<span className="add_to_cart_text">ADD</span>
									</div>
								</div>

								<div className="filter_section bg-white">
									<CustomAccordion tabs={IngredientsTabs} />
								</div>
								<div className="filter_section bg-white">
									<CustomAccordion tabs={ApplicationTabs} />
								</div>
								<div className="filter_section bg-white">
									<CustomAccordion tabs={FAQsTabs} />
								</div>
								<div className="filter_section bg-white">
									<CustomAccordion tabs={ProvidedByTabs} />
								</div>
							</div>
						</div>
					</div>
					<div className="scroll_sign" />
				</div>
			</div>
			<div className="container py-5 row">
				<h3 className="pb-4 text-center">Your pet will also love...</h3>
				{products.map((num) => (
					<div className="col-3">
						<ProductCardV2
							// id=""
							name="Freshing Wipes"
							price="AED 49.00"
							PetColor="Pet Green"
							image={
								num % 2 === 0
									? 'https://media.furchildpets.com/images/products/skin-soother-wipes-8w61bnqrh0.jpg'
									: undefined
							}
						/>
					</div>
				))}
			</div>
			<div className="container">
				<div className="main_details">
					<div className="meal_plan_section text-center py-5">
						<h3>Let’s find the perfect meal plan for your pet!</h3>
						<div className="subtitle pb-5 justify-content-center row">
							<div className="col-12 col-md-6">
								Answer a few questions about your dog or cat to get
								started—don’t worry, this should only take a few minutes!
							</div>
						</div>
						<div className="text-center">
							<a
								href="../ae-en/starter-pack.html"
								className="btn btn-fcp-primary btn-lg"
							>
								GET STARTED
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
