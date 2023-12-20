import React from 'react';

export default function HealthyHome() {
	return (
		<section
			className="section_healthy_homes pt-5"
		>
			<div className="container-fluid">
				<h1 className="text-center">Bring healthy home</h1>
				{/* eslint-disable-next-line react/no-unescaped-entities */}
				<div className="subtitle text-center pb-3">From our kitchen to your pet's bowl, enjoy the Furchild
					experience as you like it.
				</div>
				<div className="section_healthy_homes_content pb-5">
					<div className="row">
						<div className="col-12 col-md-8">
							<div className="h4 font-weight-bold pt-3 pt-md-5 mb-2">Personalised Meal Plans</div>
							<p className=" d-flex align-items-start align-items-lg-center">
								<img
									src="https://media.furchildpets.com/images/furchild-green-check.png?v230301095110&w=100"
									alt="Furchild Check"
									width="20"
									height="15"
									style={{ marginRight: '8px', marginTop: '2px' }}
								/>
								<span>
									{/* eslint-disable-next-line react/no-unescaped-entities */}
									Tailored plans based on your pet's age, breed, weight, and health goals.
								</span>
							</p>
							<p className=" d-flex align-items-start align-items-lg-center">
								<img
									src="https://media.furchildpets.com/images/furchild-green-check.png?v230301095110&w=100"
									alt="Furchild Check"
									width="20"
									height="15"
									style={{ marginRight: '8px', marginTop: '2px' }}
								/>
								<span>
									Flexible, regular deliveries across the UAE so you will never run out of food.
								</span>
							</p>
							<p className=" d-flex align-items-start align-items-lg-center">
								<img
									src="https://media.furchildpets.com/images/furchild-green-check.png?v230301095110&w=100"
									alt="Furchild Check"
									width="20"
									height="15"
									style={{ marginRight: '8px', marginTop: '2px' }}
								/>
								<span>Up to 15% off on monthly meal plans and bulk orders.</span>
							</p>
							<div className="py-2">
								<a
									href="ae-en/starter-pack.html"
									className="btn btn-fcp-primary home_page_tell_us_about_your_pet"
								>
									Tell us about your pet
								</a>
							</div>

							<div className="">
								<div className="h4 font-weight-bold pt-5 mb-2">Buy Online</div>
								<p className=" d-flex align-items-start align-items-lg-center">
									<img
										src="https://media.furchildpets.com/images/furchild-green-check.png?v230301095110&w=100"
										alt="Furchild Check"
										width="20"
										height="15"
										style={{ marginRight: '8px', marginTop: '2px' }}
									/>
									<span>Earn loyalty points with every purchase online.</span>
								</p>
								<p className=" d-flex align-items-start align-items-lg-center">
									<img
										src="https://media.furchildpets.com/images/furchild-green-check.png?v230301095110&w=100"
										alt="Furchild Check"
										width="20"
										height="15"
										style={{ marginRight: '8px', marginTop: '2px' }}
									/>
									<span>Avail next-day delivery for your cats and dogs.</span>
								</p>
								<div className="py-2">
									<a href="ae-en/shop.html" className="btn btn-fcp-primary home_page_shop_now">
										Shop Now
									</a>
								</div>
							</div>

							<div className="">
								<div className="h4 font-weight-bold pt-5 mb-2">Visit Our Store</div>
								<p className="">
									<span>
										We invite you to visit our pet-friendly store, browse our menu,
										and speak with a qualified pet food advisor.
									</span>
								</p>
								<div className="py-2">
									<a
										href="https://www.google.com/maps/place/Furchild+Pet+Nutrition/@25.1621243,55.236473,18.13z/data=!4m5!3m4!1s0x0:0x5a67b24c953bd8e9!8m2!3d25.1623604!4d55.2357565"
										target="_blank"
										className="btn btn-fcp-primary home_page_shop_now"
										rel="noreferrer"
									>
										Directions
									</a>
								</div>
							</div>
						</div>
						<div className="col-12 col-md-4" />
					</div>
					<div
						className="image_container d-none d-md-block"
						style={{ width: '1006px', height: '600px', overflow: 'hidden' }}
					>
						<div>
							<img
								src="https://media.furchildpets.com/images//healthy-home-cat.jpg?v200811124607"
								alt="Bring Healthy Home"
								className="w-100"
							/>
						</div>
					</div>
					<div className="image_container_mobile d-none" style={{ margin: '0 - 15px' }}>
						<div>
							<img
								src="https://media.furchildpets.com/images//healthy-home-cat-mobile.jpg?v200811124607"
								alt="Bring Healthy Home"
								className="w-100"
							/>
						</div>
					</div>
				</div>


			</div>

		</section>

	);
}
