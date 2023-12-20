/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

export default function () {
	return (
		<div className="site-contact">
			<div className="content_container container">
				<div className="content">
					<div className="row">
						<div className="col-12 col-sm-7">
							<h2 className="my-2">How can we help you?</h2>
							<h3>
								If you have a question, please send us an enquiry here and we’ll be
								happy to help.
							</h3>
							<div className="form_content">
								<form
									id="w1"
									action="https://furchildpets.com/ae-en/contact"
									method="post"
								>
									<input
										type="hidden"
										name="_csrf"
										defaultValue="UW0VWPq8NaZM9LdndTA564iRLveiIuvovo98hFAKPKQWDiMVmP1Q1nrC-yJDX1Ce7Pd4p_1IrpjP_UvcKHt36Q=="
									/>
									<div className="row">
										<div className="col-12 col-sm-6">
											<div className="form-group field-inquiries-first_name required">
												<label htmlFor="inquiries-first_name">Name</label>
												<input
													type="text"
													id="inquiries-first_name"
													className="form-control"
													name="name"
													maxLength={300}
													aria-required="true"
												/>
												<div className="invalid-feedback" />
											</div>
										</div>
										<div className="col-12 col-sm-6">
											<div className="form-group field-inquiries-email required">
												<label htmlFor="inquiries-email">Email
												</label>
												<input
													type="text"
													id="inquiries-email"
													className="form-control"
													name="email"
													maxLength={500}
													aria-required="true"
												/>
												<div className="invalid-feedback" />
											</div>
										</div>
									</div>
									<div className="row">
										<div className="col-12 col-sm-6">
											<div className="form-group field-inquiries-phone required">
												<label htmlFor="inquiries-phone">Phone Number</label>
												<input
													type="text"
													id="inquiries-phone"
													className="form-control"
													name="Inquiries[phone]"
													maxLength={200}
													aria-required="true"
												/>
												<div className="invalid-feedback" />
											</div>
										</div>
									</div>
									<div className="row">
										<div className="col-12 ">
											<div className="form-group field-inquiries-message required">
												<label htmlFor="inquiries-message">Message</label>
												<textarea
													id="inquiries-message"
													className="form-control"
													name="Inquiries[message]"
													rows={6}
													aria-required="true"
													defaultValue=""
												/>
												<div className="invalid-feedback" />
											</div>
											<div className="form-group field-inquiries-recaptcha my-2">
												<label htmlFor="inquiries-recaptcha">
													Confirm that you are not a bot
												</label>
												<input
													type="hidden"
													id="inquiries-recaptcha"
													className="form-control"
													name="Inquiries[reCaptcha]"
												/>
												<div
													id="inquiries-recaptcha-recaptcha-w1"
													className="g-recaptcha"
													data-sitekey="6LeWkQoUAAAAAOggHbh40t4V3SZ_0xi_9rrcNBrc"
													data-input-id="inquiries-recaptcha"
													data-form-id="w1"
												/>
												<div className="invalid-feedback" />
											</div>
										</div>
									</div>
									<div className="row my-3">
										<div className="col-12 d-flex justify-content-end">
											<div className="form-group">
												<button type="submit" className="btn btn-fcp-primary">
													Submit
												</button>
											</div>
										</div>
									</div>
								</form>
							</div>
						</div>
						<div className="col-12 col-lg-4 col-md-5 offset-lg-1">
							<div
								style={{
									backgroundColor: '#faf3ed',
									margin: '20px auto',
									textAlign: 'start',
									border: '1px solid #E2D9D9',
									paddingBottom: 20,
									borderRadius: '5%',
								}}
							>
								{/* <img */}
								{/*	src="../uploads/content/vets_sign_up_dog30f4.jpg?v=3" */}
								{/*	alt="" */}
								{/*	width="100%" */}
								{/* /> */}
								{/* <p className="subtitle pt-2"> */}
								{/*	<span>Meal formulations</span> */}
								{/*	<br /> */}
								{/*	<span>for dogs and cats</span> */}
								{/* </p> */}
								{/* <a href="pet-food-ingredients.html" className="btn btn-fcp-primary"> */}
								{/*	Learn more */}
								{/* </a> */}
								<div className="site_info">
									<div className="row">
										<div className="col-1 col-lg-1 col-md-2 p-0  d-flex justify-content-center align-items-center" style={{ marginBottom: '30px' }}>
											<i className="fa fa-envelope px-1" />
										</div>
										<div className="col-11 col-lg-11 col-md-10">
											<div>
												<strong>Email</strong>
											</div>
											<div className="info_details">
												Email us at{' '}
												<a href="mailto:info@furchildpets.com">info@furchildpets.com</a>
											</div>
										</div>
									</div>

									<div className="row">
										<div className="col-1 col-lg-1 col-md-2 p-0  d-flex justify-content-center align-items-center" style={{ marginBottom: '30px' }}>
											<i className="fa fa-phone px-1" />
										</div>
										<div className="col-11 col-lg-11 col-md-10">
											<strong>Phone</strong>
											<div className="info_details">
												Phone us at <a href="tel:+97143390100">+971 4 339 0100</a>
											</div>
										</div>

									</div>

									<div className="row">
										<div className="col-1 col-lg-1 col-md-2 p-0  d-flex justify-content-center align-items-center" style={{ marginBottom: '30px' }}>
											<i className="fa fa-comments px-1" />
										</div>
										<div className="col-11 col-lg-11 col-md-10">
											<strong>Feedback</strong>
											<div className="info_details">
												Email us at{' '}
												<a href="mailto:feedback@furchildpets.com">
													feedback@furchildpets.com
												</a>
											</div>
										</div>
									</div>

									<div className="row">
										<div className="col-1 col-lg-1 col-md-2 p-0 d-flex justify-content-center align-items-center" style={{ marginBottom: '30px' }}>
											<i className="fa fa-history px-1" />

										</div>
										<div className="col-11 col-lg-11 col-md-10">
											<strong>Contact Hours</strong>
											<div className="info_details">
												Monday to Friday 9:30 am to 6:00 pm
												<br />
												Saturday 10:00 am to 3:00 pm
											</div>
										</div>
									</div>

									<div className="row">
										<div className="col-1 col-lg-1 col-md-2 p-0  d-flex justify-content-center align-items-center" style={{ marginBottom: '30px' }}>
											<i className="fa fa-location-arrow px-1" />
										</div>
										<div className="col-11 col-lg-11 col-md-10">
											<strong>Location</strong>
											<div className="info_details">
												We are located in G15/ST15. The Curve Building. Al Quoz 3. Dubai.
											</div>
										</div>
									</div>

									<div>
										<strong>Find us on social media</strong>
									</div>
									<ul className="social_links">
										<li>
											<a
												href="https://www.facebook.com/furchildpets/"
												target="_blank"
												rel="noreferrer"
											>
												<i className="fa fa-facebook" />
											</a>
										</li>
										<li>
											<a href="https://twitter.com/furchildpets" target="_blank" rel="noreferrer">
												<i className="fa fa-twitter" />
											</a>
										</li>
										<li>
											<a
												href="https://www.instagram.com/furchildpets/"
												target="_blank"
												rel="noreferrer"
											>
												<i className="fa fa-instagram" />
											</a>
										</li>
										<li>
											<a
												href="https://www.pinterest.com/furchildpets/"
												target="_blank"
												rel="noreferrer"
											>
												<i className="fa fa-pinterest" />
											</a>
										</li>
										<li>
											<a
												href="https://www.youtube.com/channel/UC16i-OmOKMc95ECM7IXCJtA"
												target="_blank"
												rel="noreferrer"
											>
												<i className="fa fa-youtube" />
											</a>
										</li>
									</ul>
									<div className="clearfix" />
								</div>
								{/*
							<div
							 class="p-2"
							 style="max-width: 400px; border: 1px solid #341F0F; border-radius: 2px"
							 >
							*/}
								{/*
								<p><strong>We are experiencing a technical issue with our phone lines.</strong></p>
								*/}
								{/*	<p style="max-width: 300px">For urgent matters, please contact via */}
								{/*	<a href="tel:00971509373493">+971 50 937 3493</a>, */}
								{/*	WhatsApp <a href="https://wa.me/97143390100">+971&nbsp;4&nbsp;339&nbsp;0100</a> (<a href="https://wa.me/97143390100">https://wa.me/97143390100</a>) or email (<a href="mailto:info@furchildpets.com">info@furchildpets.com</a>).</p> */}
								{/*	</div> */}

							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
