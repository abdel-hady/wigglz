import React from 'react';

import { INutritionFact } from '@/app/types/general';
import parseImageUrl from '@/PareseImageUrl';

interface NutritionFactsProps {
	facts: INutritionFact[];
}

export default function NutritionFacts({ facts }: NutritionFactsProps) {
	return (
		<section
			className="section_family"
			style={{
				// backgroundColor: 'rgb(255, 245, 233)', //yellow wheat
				// backgroundColor: 'rgb(195 171 227 / 39%)', //purple
				// backgroundColor: '#5e92934a', //light green
				// backgroundColor: '#5E9293', // blue
				// color: 'white'
			}}
		>

			<div className="container-fluid pt-5 pt-md-0 pb-3">
				<div className="text-center py-2 py-md-5">
					{/* eslint-disable-next-line react/no-unescaped-entities */}
					<h1 className="family_header d-none d-md-block">Because they're <span className="family_text"><span className="static_white">my dogs.&nbsp;</span><span className="family_text_container ">my dogs.</span></span></h1>
					{/* eslint-disable-next-line react/no-unescaped-entities */}
					<h1 className="family_header d-md-none">Because they're
						<span className="family_text" style={{ display: 'inline-block', textAlign: 'left' }}>
							<span className="static_white">
								my
								dogs.&nbsp;
							</span>
							<span className="family_text_container text-center">
								my
								dogs.
							</span>
						</span>
					</h1>
					<div className="subtitle row justify-content-center">
						<div className="col-12 col-xl-9">
							As pet parents of dogs and cats, you can now relax with peace of mind, knowing that
							your furchild is getting the highest quality nutrition essential for a longer and
							more vibrant life!
						</div>
					</div>
				</div>
			</div>
			<div className="container pb-5">
				<div className="bowl_container">
					<div className="d-flex flex-row flex-wrap row">
						<div className="d-none d-md-block col-12 order-1 order-lg-2 col-lg-6">
							<div className="d-flex flex-row align-items-center h-100">
								<div className="bowl_animation_container bowl_animation_container_desktop position-relative w-100">
									<img
										src="media/images/nutrition-facts-image.webp"
										alt="Ingredients"
										height="600px"
										style={{ objectFit: 'contain' }}
									/>
								</div>
							</div>
						</div>
						<div className="d-none d-lg-block col-12 order-2 order-lg-1 col-lg-3 text-center">
							<div className="row">
								{
									facts.slice(0, 3).map((fact) => (
										<div className="one_feature col-6 col-lg-12 py-3 px-1">
											<div className="feature_icon">
												<img
													src={parseImageUrl(fact.image)}
													alt={fact.title.en}
													style={{ width: '100%' }}
												/>
											</div>
											<div className="feature_name subtitle font-weight-bold">
												{fact.title.en}
											</div>
											<div
												className="feature_description"
												dangerouslySetInnerHTML={{ __html: fact.description.en }}
											/>
										</div>
									))
								}
							</div>
						</div>
						<div className="d-none d-lg-block col-12 order-3 col-lg-3 text-center">
							<div className="row">
								{
									facts.slice(3, 6).map((fact) => (
										<div className="one_feature col-6 col-lg-12 py-3 px-1">
											<div className="feature_icon">
												<img
													src={parseImageUrl(fact.image)}
													alt={fact.title.en}
													style={{ width: '100%' }}
												/>
											</div>
											<div className="feature_name subtitle font-weight-bold">
												{fact.title.en}
											</div>
											<div
												className="feature_description"
												dangerouslySetInnerHTML={{ __html: fact.description.en }}
											/>
										</div>
									))
								}
							</div>
						</div>
					</div>
					<div className="d-lg-none">
						<div className="row ">
							{
								facts.map((fact) => (
									<div className="one_feature col-12 py-3 d-flex">
										<div style={{ width: '50px' }}>
											<img
												src={parseImageUrl(fact.image)}
												alt="Complete & Balanced"
												style={{ width: '50px' }}
											/>
										</div>
										<div className="col">
											<div className="feature_name subtitle font-weight-bold">
												{fact.title.en}
											</div>
											<div className="feature_description" dangerouslySetInnerHTML={{ __html: fact.description.en }} />
										</div>
									</div>
								))
							}
						</div>
					</div>
					<div className="d-md-none col-12 order-1 order-lg-2 col-lg-6">
						<div className="d-flex flex-row align-items-center h-100">
							<div className="bowl_animation_container bowl_animation_container_mobile position-relative w-100">
								<img src="https://media.furchildpets.com/images//bowl-meals-v3.png?v200810062353" alt="Ingredients" />
								<div className="bowl_mixed bowl_mixed_mobile position-absolute" style={{ backgroundImage: 'url("../media.furchildpets.com/images/bowl-ingredients-v30f2d.png?v200810062351")', width: 0 }} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
