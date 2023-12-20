import React from 'react';

export default function Benefits() {
	return (
		<section
			className="section_invest"
			id="section_invest"
			style={{ backgroundImage: 'url(https://media.furchildpets.com/images//invest_background.jpg)' }}
		>
			<div className="invest_container py-5">
				<div className="container-fluid text-center py-5">
					<div className=" pb-2 text-uppercase">
						<h3>Day 1</h3>
					</div>
					<h1>Benefits include
						<span className="d-md-none"><br /></span>
						<span className="changing_text">Excitement at meal time</span>
					</h1>

					<div className="subtitle pt-3">
						Make the switch today for healthier, happier cats and dogs tomorrow.
					</div>
					<div className="pt-5 pb-2">
						<a
							href="ae-en/starter-pack.html"
							className="btn btn-fcp-primary home_page_invest_in_your_pets_future"
						>
							STARTER KIT AED99
						</a>
					</div>
				</div>

			</div>
		</section>
	);
}
