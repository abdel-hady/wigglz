import React from 'react';
import CustomAccordion from '@/app/components/CustomAccordion';

const tabs = [
	{
		header: (
			<div className="card-header" id="headingFAQ1">
				<button
					className="btn btn-link collapsed subtitle"
					type="button"
					data-toggle="collapse"
					data-target="#collapseFAQ1"
					aria-expanded="false"
					aria-controls="collapseFAQ1"
				>
					How do I store and serve the meals?
				</button>
			</div>
		),
		body: (
			<div className="card-body">
				<p>
					All our meals are delivered raw and are meant to be eaten raw. They
					can as well be gently warmed or slightly seared for special occasions.
				</p>
				<p>
					Most cats and dogs thrive on our balanced Raw Meals. Moreover, they
					even prefer its taste.
				</p>
				<p>
					In some cases, certain cats and dogs might require more time to adapt
					to the new flavours and textures. As a solution, introducing our raw
					dog food and raw cat food recipes in a slightly warmed state can be
					more appealing to these fussy eaters.
				</p>
				<p>
					We DON’T recommend defrosting or warming our meals in a microwave.
				</p>
				<p>
					If you have any further questions, please feel free to contact us.
				</p>
			</div>
		),
	},
	{
		header: (
			<div className="card-header" id="headingFAQ2">
				<button
					className="btn btn-link subtitle collapsed"
					type="button"
					data-toggle="collapse"
					data-target="#collapseFAQ2"
					aria-expanded="false"
					aria-controls="collapseFAQ2"
				>
					How do I make the switch to Furchild Meals?
				</button>
			</div>
		),
		body: (
			<div className="card-body">
				<p>
					All our meals are delivered raw and are meant to be eaten raw. They
					can as well be gently warmed or slightly seared for special occasions.
				</p>
				<p>
					Most cats and dogs thrive on our balanced Raw Meals. Moreover, they
					even prefer its taste.
				</p>
				<p>
					In some cases, certain cats and dogs might require more time to adapt
					to the new flavours and textures. As a solution, introducing our raw
					dog food and raw cat food recipes in a slightly warmed state can be
					more appealing to these fussy eaters.
				</p>
				<p>
					We DON’T recommend defrosting or warming our meals in a microwave.
				</p>
				<p>
					If you have any further questions, please feel free to contact us.
				</p>
			</div>
		),
	},
	{
		header: (
			<div className="card-header" id="headingFAQ3">
				<button
					className="btn btn-link subtitle collapsed"
					type="button"
					data-toggle="collapse"
					data-target="#collapseFAQ3"
					aria-expanded="false"
					aria-controls="collapseFAQ3"
				>
					Where do you deliver?
				</button>
			</div>
		),
		body: (
			<div className="card-body">
				<p>
					All our meals are delivered raw and are meant to be eaten raw. They
					can as well be gently warmed or slightly seared for special occasions.
				</p>
				<p>
					Most cats and dogs thrive on our balanced Raw Meals. Moreover, they
					even prefer its taste.
				</p>
				<p>
					In some cases, certain cats and dogs might require more time to adapt
					to the new flavours and textures. As a solution, introducing our raw
					dog food and raw cat food recipes in a slightly warmed state can be
					more appealing to these fussy eaters.
				</p>
				<p>
					We DON’T recommend defrosting or warming our meals in a microwave.
				</p>
				<p>
					If you have any further questions, please feel free to contact us.
				</p>
			</div>
		),
	},
	{
		header: (
			<div className="card-header" id="headingFAQ4">
				<button
					className="btn btn-link subtitle collapsed"
					type="button"
					data-toggle="collapse"
					data-target="#collapseFAQ4"
					aria-expanded="false"
					aria-controls="collapseFAQ4"
				>
					Are all your Meals raw, and can they be heated?
				</button>
			</div>
		),
		body: (
			<div className="card-body">
				<p>
					All our meals are delivered raw and are meant to be eaten raw. They
					can as well be gently warmed or slightly seared for special occasions.
				</p>
				<p>
					Most cats and dogs thrive on our balanced Raw Meals. Moreover, they
					even prefer its taste.
				</p>
				<p>
					In some cases, certain cats and dogs might require more time to adapt
					to the new flavours and textures. As a solution, introducing our raw
					dog food and raw cat food recipes in a slightly warmed state can be
					more appealing to these fussy eaters.
				</p>
				<p>
					We DON’T recommend defrosting or warming our meals in a microwave.
				</p>
				<p>
					If you have any further questions, please feel free to contact us.
				</p>
			</div>
		),
	},
	{
		header: (
			<div className="card-header" id="headingFAQ5">
				<button
					className="btn btn-link subtitle collapsed"
					type="button"
					data-toggle="collapse"
					data-target="#collapseFAQ5"
					aria-expanded="false"
					aria-controls="collapseFAQ5"
				>
					How are Furchild Raw Meals packaged?
				</button>
			</div>
		),
		body: (
			<div className="card-body">
				<p>
					All our meals are delivered raw and are meant to be eaten raw. They
					can as well be gently warmed or slightly seared for special occasions.
				</p>
				<p>
					Most cats and dogs thrive on our balanced Raw Meals. Moreover, they
					even prefer its taste.
				</p>
				<p>
					In some cases, certain cats and dogs might require more time to adapt
					to the new flavours and textures. As a solution, introducing our raw
					dog food and raw cat food recipes in a slightly warmed state can be
					more appealing to these fussy eaters.
				</p>
				<p>
					We DON’T recommend defrosting or warming our meals in a microwave.
				</p>
				<p>
					If you have any further questions, please feel free to contact us.
				</p>
			</div>
		),
	},
	{
		header: (
			<div className="card-header" id="headingFAQ6">
				<button
					className="btn btn-link subtitle collapsed"
					type="button"
					data-toggle="collapse"
					data-target="#collapseFAQ6"
					aria-expanded="false"
					aria-controls="collapseFAQ6"
				>
					Is Furchild suitable for puppies and kittens?
				</button>
			</div>
		),
		body: (
			<div className="card-body">
				<p>
					All our meals are delivered raw and are meant to be eaten raw. They
					can as well be gently warmed or slightly seared for special occasions.
				</p>
				<p>
					Most cats and dogs thrive on our balanced Raw Meals. Moreover, they
					even prefer its taste.
				</p>
				<p>
					In some cases, certain cats and dogs might require more time to adapt
					to the new flavours and textures. As a solution, introducing our raw
					dog food and raw cat food recipes in a slightly warmed state can be
					more appealing to these fussy eaters.
				</p>
				<p>
					We DON’T recommend defrosting or warming our meals in a microwave.
				</p>
				<p>
					If you have any further questions, please feel free to contact us.
				</p>
			</div>
		),
	},
];

export default function FaqSection() {
	return (
		<div className="section_faq py-5 mx-auto" style={{ maxWidth: '1000px' }}>
			<div className="container-fluid">
				<div className="row">
					<div className="col-12 col-lg-12 pb-3">
						<h1>FAQs</h1>
						<CustomAccordion tabs={tabs} />
					</div>
				</div>
			</div>
		</div>
	);
}
