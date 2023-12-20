import React from 'react';

const IngredientsTabs = [
	{
		header: (
			<div
				className="filter_header p-3 d-flex flex-row justify-content-between align-items-center collapsed"
				data-toggle="collapse"
				data-target="#productInfo1"
			>
				<span className="subtitle">Ingredients</span>
			</div>
		),
		body: (
			<div
				id="productInfo1"
				className="filter_body py-2 collapse show bg-unset"
				aria-labelledby="productInfoHeading1"
			>
				<div className="filter_option">
					<p>
						Freshing wipes are not medicated wipes; they are not meant to treat
						yeast, bacterial, or fungal infections. The ingredients in these
						wipes work together to gently clean pups who need a refresh!
					</p>
					<p>The stars of the show include:</p>
					<p>
						<strong>Aloe Vera:</strong>
						<span> </span>Soothes irritated skin; calms inflammation on the
						surface
					</p>
					<p>
						<strong>Witch Hazel:</strong>
						<span> </span>Astringent; reduces topical inflammation; cleanses the
						skin
					</p>
					<p>
						<strong>Decyl Glucoside:</strong>
						<span> </span>Gentle cleaning agent; rids the skin of irritants
						&amp; dirt; a score of 2 on the EWG Skin Deep analysis
					</p>
					<p>
						Other Ingredients: Purified Water, Gluconolactone, Potassium
						Sorbate, Sodium Benzoate
					</p>
				</div>
			</div>
		),
	},
];
const ApplicationTabs = [
	{
		header: (
			<div
				className="filter_header p-3 d-flex flex-row justify-content-between align-items-center collapsed"
				data-toggle="collapse"
				data-target="#productInfo2"
			>
				<span className="subtitle">Application</span>
			</div>
		),
		body: (
			<div
				id="productInfo2"
				className="filter_body py-2 collapse show bg-unset"
				aria-labelledby="productInfoHeading2"
			>
				<div className="card-body">
					<p data-pm-slice="1 1 []">
						Use one wipe on any dirty or irritated area as needed. Because of
						its gentle formula, wipes can be used on paws, fur, skin, wrinkles,
						ears, and booties!
					</p>
					<p>
						Avoid contact with eyes. Flush thoroughly with clean water if eye
						contact occurs. If irritation occurs, stop use and contact your
						veterinarian.
					</p>
				</div>
			</div>
		),
	},
];
const FAQsTabs = [
	{
		header: (
			<div
				className="filter_header p-3 d-flex flex-row justify-content-between align-items-center collapsed"
				data-toggle="collapse"
				data-target="#productInfo3"
			>
				<span className="subtitle">FAQs</span>
			</div>
		),
		body: (
			<div
				id="productInfo3"
				className="filter_body py-2 collapse show bg-unset"
				aria-labelledby="productInfoHeading3"
			>
				<div className="card-body">
					<p>
						<strong>Are Freshing Wipes safe to use in ears?</strong>
					</p>
					<p>
						<span>
							Yes, Freshing Wipes are safe to use on and around the ears.
							However, we do not recommend shoving the wipe deep into the ear
							canal. As a rule of thumb, don’t use the wipe on any areas you
							cannot see while looking at your dog head-on.
						</span>
					</p>
					<p>
						<strong>Are they scented?</strong>
					</p>
					<p>
						<span>
							Freshing Wipes do not contain fragrance; however, they do have a
							light, fresh scent from the Witch Hazel.
						</span>
					</p>
					<p>
						<strong>Can they be used in place of a bath?</strong>
					</p>
					<p>
						<span>
							Freshing Wipes can be used in place of a bath to remove dirt &amp;
							other light grime. However, we still recommend bathing your pup if
							they are extremely dirty or you need to remove allergens like
							pollen.
						</span>
					</p>
					<p>
						<strong>
							Can they be used to prevent or help with yeast or skin?
						</strong>
					</p>
					<p>
						<span>
							These wipes are not formulated to be antifungal or antibacterial,
							but they can remove any irritants that are resting on the skin.
							Contact our Furchild pet food advisors for personalised
							recommendations to help fight yeast problems with your dog.
						</span>
					</p>
				</div>
			</div>
		),
	},
];
const ProvidedByTabs = [
	{
		header: (
			<div
				className="filter_header p-3 d-flex flex-row justify-content-between align-items-center collapsed"
				data-toggle="collapse"
				data-target="#productInfo4"
			>
				<span className="subtitle">Provided By</span>
			</div>
		),
		body: (
			<div
				id="productInfo4"
				className="filter_body py-2 collapse show bg-unset"
				aria-labelledby="productInfoHeading4"
			>
				<div className="card-body">
					<p>
						<img
							src="../uploads/content/logo-natural-dog-company.jpg"
							alt="logo-natural-dog-company"
							style={{ float: 'right' }}
						/>
					</p>
					<p>This great product is provided via our exclusive partner,</p>
					<p>
						<i>
							<span>
								Natural Dog Company is an award-winning company that provides
								healing solutions that are natural and effective. They strive to
								provide the best holistic and natural healing products for your
								dog at affordable prices.
							</span>
							<span>The</span>
						</i>
						<span />
						<i>
							<span>
								only ingredients to touch your pet’s coat and skin should be
								organic, natural, non-toxic, and as gentle as possible
							</span>
							<span>.</span>
						</i>
					</p>
					<p>
						At Furchild we work daily to find, source, and develop relationships
						with the best pet food, care, and welfare specialist around the
						world. We are thrilled to be a quality partner with Natural Dog
						Company and we hope that you enjoy this product as we do!
					</p>
				</div>
			</div>
		),
	},
];

export {
	IngredientsTabs, ApplicationTabs, FAQsTabs, ProvidedByTabs,
};
