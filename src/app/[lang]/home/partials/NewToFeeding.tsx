import React from 'react';


function SmComponent() {
	return (
		<div className="d-md-none " style={{ marginTop: '-50vw', position: 'relative', paddingTop: '50vw' }}>
			<div className="h-100 w-100 d-flex flex-column justify-content-between text-white align-items-center text-center pb-5">
				<h1 className=" line-height-1 pb-2">New to <br />Raw Feeding?</h1>
				<div className="font-weight-normal line-height-2 subtitle">
					Special Savings &amp; FREE Nutritional Advice<br />
					Personalised for Your Pet
				</div>
				<div className="pt-3 pb-2 text-center">
					<a href="ae-en/starter-pack.html" className="btn btn-fcp-primary btn-lg py-2" style={{ boxShadow: '1px 3px 10px rgb(31 73 44 / 30%)' }}>
						<strong>
							STARTER
							KIT
						</strong> AED99
					</a>
				</div>
			</div>
		</div>
	);
}

function MdComponent() {
	return (
		<div className="d-none d-md-block d-lg-none overflow-hidden text-white text-center">
			<h1 className="pt-3 line-height-1 pb-2" style={{ fontSize: '40px' }}>New to <br />Raw Feeding?</h1>
			<a href="ae-en/starter-pack.html" className="btn btn-xl btn-fcp-primary mb-3 home_page_starter_kit_banner_button home_page_starter_kit_aed_99_green_bg" style={{ boxShadow: '1px 3px 2px rgba(31,73,44,0.7)', borderRadius: '5px !important' }}>
				<strong>Starter Kit</strong> AED99
			</a>
			<h5 className="font-weight-normal line-height-2">
				Special Savings &amp; FREE Nutritional Advice<br />
				Personalised for Your Pet
			</h5>
			<img src="../media.furchildpets.com/images/Starter%20Kit%20Dog%20Cat226b.png?v220217095019&w=800" alt="Starter Kit" className="w-100" style={{ marginBottom: '-40px' }} />
		</div>
	);
}
function LgComponent() {
	return (
		<div className="d-none d-lg-block d-xl-none overflow-hidden py-3">
			<div className="d-flex align-items-center position-relative mx-5">
				<div className="col-5 pr-0" style={{ zIndex: 2 }}>
					<div className="text-white pl-0 py-4">
						<h1 className="line-height-1">New to <br />Raw Feeding?</h1>
						<div className="font-weight-normal subtitle line-height-2 mb-0">
							Special Savings &amp; FREE Nutritional Advice<br />
							Personalised for Your Pet
						</div>
					</div>
				</div>
				<div className="col-4 px" style={{ zIndex: 2 }}>
					<a href="ae-en/starter-pack.html" className="btn btn-xl btn-fcp-primary mb-3 home_page_starter_kit_banner_button home_page_starter_kit_aed_99_green_bg" style={{ boxShadow: '1px 3px 2px rgba(31,73,44,0.7)', borderRadius: '5px !important' }}>
						<strong>Starter&nbsp;Kit</strong>&nbsp;AED99
					</a>
				</div>
				<div className="col-2 " style={{ zIndex: 2 }} />
				<img
					src="https://media.furchildpets.com/images/Starter%20Kit%20Dog%20Cat.png?v220217095019&w=800"
					alt="Starter Kit"
					className="h-100 position-absolute"
					style={{
						marginBottom: '-7%', right: '-180px', height: '150% !important', zIndex: 1,
					}}
				/>
			</div>
		</div>
	);
}

function XlComponent() {
	return (
		<div className="d-none d-xl-block overflow-hidden">
			<div className="d-flex align-items-center position-relative mx-5">
				<div className="col-4 pr-0 py-xl-2" style={{ zIndex: 2 }}>
					<div className="pl-4 py-4 py-xl-5">
						<h3 className="line-height-1">New to Raw&nbsp;Feeding?</h3>
						<div className="font-weight-normal subtitle line-height-2 mb-0">
							Special Savings &amp; FREE Nutritional Advice<br />
							Personalised for Your Pet
						</div>
					</div>
				</div>
				<div className="col-4 text-center" style={{ zIndex: 2 }}>
					<a href="ae-en/starter-pack.html" className="btn btn-xl btn-fcp-primary shadow mb-3 home_page_starter_kit_banner_button home_page_starter_kit_aed_99_green_bg" style={{ borderRadius: '5px !important', transform: 'scale(1.2)' }}>
						<strong>Starter&nbsp;Kit</strong>&nbsp;AED99
					</a>
				</div>
				{/* <div className="col-4 text-center" style={{ zIndex: 2 }}>
					<img
						src="media/images/Pet Food Branding Presentation-10.webp"
						alt="Starter Kit"
						style={{
							height: '250px'
						}}
					/>
				</div> */}
				<div className="col-4 text-end" style={{ zIndex: 2 }}>
					<img
						src="https://images.unsplash.com/photo-1533738363-b7f9aef128ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3024&q=80"
						alt="Starter Kit"
						style={{
							height: '250px',
							width: '250px',
							objectFit: 'cover',
							borderRadius: '50%',
						}}
					/>
				</div>

			</div>
		</div>
	);
}
export default function NewToFeeding() {
	return (

		<div className="image_container1 w-100 " style={{ margin: '0 auto' }}>
			<div
				className="start_kit_container mt-1"
			>
				<SmComponent />
				<MdComponent />
				<LgComponent />
				<XlComponent />
			</div>
		</div>
	);
}
