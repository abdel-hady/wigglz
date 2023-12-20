/* eslint-disable max-len */
import React from 'react';

require('../../assets/css/footer.css');

export default function Footer() {
	return (

		<footer>
			{/* <img src="/media/images/footer.png" width="100%" alt="" /> */}

			<div
				className="w-100 d-flex responsive-min-height justify-content-center align-items-center"
				style={{
					backgroundImage: 'url(../../../../media/images/footer.png)',
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'cover',
				}}
			>
				<div
					className="row w-100 mt-14rem mt-10rem"
				>
					<div className="col-4">
						<img
							className="w-60 w-75 ml-4rem ml-2rem mt-1rem"
							src="/logo-blue.png"
							alt="logo"
						/>
					</div>
					<div className="col-5">
						<div className="row">
							<div className="col-6">
								<p className="mb-3">Contact Us</p>
								<p className="f-20 f-11 fw-500">feedback@wigglz.com <br /> +971 4 339 0100 </p>
							</div>
							<div className="col-6">
								<p className="mb-3">Location</p>
								<p className="f-20 f-11 fw-500">We are located in G15/ST15. <br /> The Curve Building. Dubai. </p>
							</div>
						</div>
					</div>
					<div className="col-3 d-flex justify-content-center align-items-center">
						<div
							className="site_info"
						>
							<ul
								className="social_links"
							>
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
					</div>
				</div>

			</div>
			{/* <div className="d-md-none py-5" style={{ backgroundColor: '#f29c52' }}> */}
			{/*	<div className="container py-5 text-center footerMobileForm"> */}
			{/*		<p className="text-white subtitle">Get instant access to all the latest natural pet health tips</p> */}
			{/*		<div className="text-white"> */}
			{/*			<div className="px-3 active" id="mobile_footer_newsletter"> */}
			{/*				<div */}
			{/*					className="error_message_newsletter" */}
			{/*					style={{ */}
			{/*						backgroundColor: '#eedad9', border: '1px solid #a94442', color: '#a94442', borderRadius: '4px', */}
			{/*					}} */}
			{/*				> */}
			{/*					<div className="d-flex justify-content-between px-3 py-1 align-items-center"> */}
			{/*						<span>Invalid Email Address</span> */}
			{/*						<div className="btn btn-outline-danger" style={{ border: 'none !important', borderRadius: '50% !important' }}> */}
			{/*							<i className="fa fa-times-circle" /> */}
			{/*						</div> */}
			{/*					</div> */}
			{/*				</div> */}
			{/*				<div */}
			{/*					className="success_message_newsletter" */}
			{/*					style={{ */}
			{/*						backgroundColor: '#dbeee1', border: '1px solid #4aaa6a', color: '#4aaa6a', borderRadius: '4px', */}
			{/*					}} */}
			{/*				> */}
			{/*					<div className="d-flex justify-content-between px-3 py-1 align-items-center"> */}
			{/*						<span>Signup Successful!</span> */}
			{/*						<div className="btn btn-outline-success" style={{ border: 'none !important', borderRadius: '50% !important' }}> */}
			{/*							<i className="fa fa-times-circle" /> */}
			{/*						</div> */}
			{/*					</div> */}
			{/*				</div> */}
			{/*				<div */}
			{/*					className="process_message_newsletter" */}
			{/*					style={{ */}
			{/*						backgroundColor: '#d6d2cf', border: '1px solid #341f0f', color: '#341f0f', borderRadius: '4px', */}
			{/*					}} */}
			{/*				> */}
			{/*					<div className="d-flex justify-content-between px-3 py-2 align-items-center"> */}
			{/*						<span>Submitting...</span> */}
			{/*					</div> */}
			{/*				</div> */}
			{/*				<form action="#"> */}
			{/*					<div className="form-group highlight-addon mobile_footer_newsletter_form required"> */}
			{/*						<div className="input-group"> */}
			{/*							<input type="email" id="mobile_footer_newsletter_email" className="form-control" name="SubscriptionList[email]" maxLength={1000} placeholder="Email" style={{ border: 'none' }} aria-required="true" required /> */}
			{/*							<div className="input-group-append"> */}
			{/*								<button type="submit" className="btn btn-success rounded-2">SUBMIT</button> */}
			{/*							</div> */}
			{/*						</div> */}
			{/*					</div> */}
			{/*				</form> */}
			{/*			</div> */}
			{/*			<style dangerouslySetInnerHTML={{ __html: '\n                                #mobile_footer_newsletter.active .mobile_footer_newsletter_form {\n                                    display: block;\n                                }\n\n                                #mobile_footer_newsletter.active .success_message_newsletter,\n                                #mobile_footer_newsletter.active .process_message_newsletter,\n                                #mobile_footer_newsletter.active .error_message_newsletter {\n                                    display: none;\n                                }\n\n                                #mobile_footer_newsletter.error .error_message_newsletter {\n                                    display: block;\n                                }\n\n                                #mobile_footer_newsletter.error .success_message_newsletter,\n                                #mobile_footer_newsletter.error .process_message_newsletter,\n                                #mobile_footer_newsletter.error .mobile_footer_newsletter_form {\n                                    display: none;\n                                }\n\n                                #mobile_footer_newsletter.success .success_message_newsletter {\n                                    display: block;\n                                }\n\n                                #mobile_footer_newsletter.success .error_message_newsletter,\n                                #mobile_footer_newsletter.success .process_message_newsletter,\n                                #mobile_footer_newsletter.success .mobile_footer_newsletter_form {\n                                    display: none;\n                                }\n\n                                #mobile_footer_newsletter.loading .process_message_newsletter {\n                                    display: block;\n                                }\n\n                                #mobile_footer_newsletter.loading .error_message_newsletter,\n                                #mobile_footer_newsletter.loading .success_message_newsletter,\n                                #mobile_footer_newsletter.loading .mobile_footer_newsletter_form {\n                                    display: none;\n                                }\n                            ' }} /> */}
			{/*		</div> */}
			{/*	</div> */}
			{/* </div> */}
			{/* <div className="section_footer_1" style={{ backgroundColor: 'rgba(255, 245, 233, .5)', borderTop: 'none' }}> */}
			{/*	<div className="container-fluid pt-5"> */}
			{/*		<div className="d-md-none"> */}
			{/*			<ul className="social_links social_links_new p-0 m-0 d-flex mb-3"> */}
			{/*				<li><a href="https://www.instagram.com/furchildpets/" target="_blank" aria-label="Visit Furchild Instagram Account" rel="noreferrer"><i className="fa fa-instagram" /></a></li> */}
			{/*				<li><a href="https://www.facebook.com/furchildpets/" target="_blank" aria-label="Visit Furchild Facebook Account" rel="noreferrer"><i className="fa fa-facebook" /></a> */}
			{/*				</li> */}
			{/*				<li><a href="https://www.youtube.com/channel/UC16i-OmOKMc95ECM7IXCJtA" target="_blank" aria-label="Visit Furchild Youtube Account" rel="noreferrer"><i className="fa fa-youtube-play" /></a></li> */}
			{/*				<li> */}
			{/*					<a href="https://www.tiktok.com/@furchildpets" target="_blank" className="d-block tiktok_footer_icon" aria-label="Visit Furchild Tiktok Account" rel="noreferrer"> */}
			{/*						<div> */}
			{/*							<svg style={{ transform: 'scale(1.5) translateY(-1px)' }} xmlns="http://www.w3.org/2000/svg" width="8.575" height={10} viewBox="0 0 8.575 10"> */}
			{/*								<path d="M6.833,0A2.376,2.376,0,0,0,9.167,2.355v1.6a3.648,3.648,0,0,1-2.31-.675V6.261c0,3.792-4.134,4.977-5.8,2.259C-.007,6.771.647,3.7,4.073,3.579V5.262a4.957,4.957,0,0,0-.8.2A1.356,1.356,0,0,0,2.2,7.05C2.435,8.682,5.429,9.165,5.18,5.976V0H6.833Z" transform="translate(-0.592)" fill="#341f0f" fillRule="evenodd" /> */}
			{/*							</svg> */}
			{/*						</div> */}
			{/*					</a> */}
			{/*				</li> */}
			{/*			</ul> */}
			{/*			<style dangerouslySetInnerHTML={{ __html: '\n                                .social_links_new li {\n                                    margin-right: 10px;\n                                    width: 30px;\n                                    height: 30px;\n                                    font-size: 1.5rem;\n                                    display: flex;\n                                    justify-content: center;\n                                    align-items: center;\n                                }\n                            ' }} /> */}
			{/*		</div> */}
			{/*		<div className="row"> */}
			{/*			<div className="col-12 col-lg-4"> */}
			{/*				<div className="mb-4"> */}
			{/*					<div className="mb-1"><strong>MEDIA INQUIRIES</strong></div> */}
			{/*					<p><a className="text-reset" href="mailto:press@furchildpets.com">press@furchildpets.com</a></p> */}
			{/*				</div> */}
			{/*				<div className="mb-4"> */}
			{/*					<div className="mb-1"><strong>NEED HELP? WE HAVE ANSWERS</strong></div> */}
			{/*					<p style={{ lineHeight: '180%' }}> */}
			{/*						<span><i className="fa fa-envelope" /></span> <a className="text-reset" href="mailto:info@furchildpets.com">info@furchildpets.com</a> <br /> */}
			{/*						<span><i className="fa fa-phone" /></span> <a className="text-reset" href="tel:+97143390100">+971 4 339 0100</a> <br /> */}
			{/*						<a href="https://wa.me/97143390100" className="btn btn-success mt-2 text-decoration-none whatsapp_button" target="_blank" style={{}} rel="noreferrer"> */}
			{/*							<span><i className="fa fa-whatsapp" /></span> */}
			{/*							WHATSAPP */}
			{/*						</a> */}
			{/*					</p> */}
			{/*				</div> */}
			{/*			</div> */}
			{/*			<div className="col-12 col-lg-4"> */}
			{/*				<div className="mb-5"> */}
			{/*					<p> */}
			{/*						Furchild is award-winning and provides convenient access to the highest quality */}
			{/*						raw pet food and holistic pet products while also providing advice and education */}
			{/*						for the community. */}
			{/*					</p> */}
			{/*					<ul className="social_links p-0 m-0 d-none d-md-flex " style={{ gap: '1rem' }}> */}
			{/*						<li><a href="https://www.instagram.com/furchildpets/" target="_blank" aria-label="Visit Furchild Instagram Account" rel="noreferrer"><i className="fa fa-instagram" /></a></li> */}
			{/*						<li><a href="https://www.facebook.com/furchildpets/" target="_blank" aria-label="Visit Furchild Facebook Account" rel="noreferrer"><i className="fa fa-facebook" /></a></li> */}
			{/*						<li><a href="https://www.youtube.com/channel/UC16i-OmOKMc95ECM7IXCJtA" target="_blank" aria-label="Visit Furchild Youtube Account" rel="noreferrer"><i className="fa fa-youtube-play" /></a></li> */}
			{/*						<li> */}
			{/*							<a href="https://www.tiktok.com/@furchildpets" target="_blank" className="d-block tiktok_footer_icon" aria-label="Visit Furchild Tiktok Account" rel="noreferrer"> */}
			{/*								<div> */}
			{/*									<svg xmlns="http://www.w3.org/2000/svg" width="8.575" height={10} viewBox="0 0 8.575 10"> */}
			{/*										<path d="M6.833,0A2.376,2.376,0,0,0,9.167,2.355v1.6a3.648,3.648,0,0,1-2.31-.675V6.261c0,3.792-4.134,4.977-5.8,2.259C-.007,6.771.647,3.7,4.073,3.579V5.262a4.957,4.957,0,0,0-.8.2A1.356,1.356,0,0,0,2.2,7.05C2.435,8.682,5.429,9.165,5.18,5.976V0H6.833Z" transform="translate(-0.592)" fill="#341f0f" fillRule="evenodd" /> */}
			{/*									</svg> */}
			{/*								</div> */}
			{/*								<style dangerouslySetInnerHTML={{ __html: '\n                                                    .tiktok_footer_icon svg path {\n                                                        transition: fill 0.3s;\n                                                    }\n\n                                                    .tiktok_footer_icon:hover svg path {\n                                                        fill: #ef8122;\n                                                    }\n                                                ' }} /> */}
			{/*							</a> */}
			{/*						</li> */}
			{/*					</ul> */}
			{/*				</div> */}
			{/*			</div> */}
			{/*			<div className="col-12 col-lg-4 d-flex justify-content-end"> */}
			{/*				<div style={{ maxWidth: '400px' }}> */}
			{/*					<div className="subscription_form d-none d-md-block"> */}
			{/*						<p> */}
			{/*							Get instant access to all the latest natural pet health tips */}
			{/*						</p> */}
			{/*						<div className=" active" id="desktop_footer_newsletter"> */}
			{/*							<div */}
			{/*								className="error_message_newsletter" */}
			{/*								style={{ */}
			{/*									backgroundColor: '#eedad9', border: '1px solid #a94442', color: '#a94442', borderRadius: '4px', */}
			{/*								}} */}
			{/*							> */}
			{/*								<div className="d-flex justify-content-between px-3 py-1 align-items-center"> */}
			{/*									<span>Invalid Email Address</span> */}
			{/*									<div className="btn btn-outline-danger" style={{ border: 'none !important', borderRadius: '50% !important' }}> */}
			{/*										<i className="fa fa-times-circle" /> */}
			{/*									</div> */}
			{/*								</div> */}
			{/*							</div> */}
			{/*							<div */}
			{/*								className="success_message_newsletter" */}
			{/*								style={{ */}
			{/*									backgroundColor: '#dbeee1', border: '1px solid #4aaa6a', color: '#4aaa6a', borderRadius: '4px', */}
			{/*								}} */}
			{/*							> */}
			{/*								<div className="d-flex justify-content-between px-3 py-1 align-items-center"> */}
			{/*									<span>Signup Successful!</span> */}
			{/*									<div className="btn btn-outline-success" style={{ border: 'none !important', borderRadius: '50% !important' }}> */}
			{/*										<i className="fa fa-times-circle" /> */}
			{/*									</div> */}
			{/*								</div> */}
			{/*							</div> */}
			{/*							<div */}
			{/*								className="process_message_newsletter" */}
			{/*								style={{ */}
			{/*									backgroundColor: '#d6d2cf', border: '1px solid #341f0f', color: '#341f0f', borderRadius: '4px', */}
			{/*								}} */}
			{/*							> */}
			{/*								<div className="d-flex justify-content-between px-3 py-2 align-items-center"> */}
			{/*									<span>Submitting...</span> */}
			{/*								</div> */}
			{/*							</div> */}
			{/*							<form action="#"> */}
			{/*								<div className="form-group highlight-addon desktop_footer_newsletter_form required"> */}
			{/*									<div className="input-group"> */}
			{/*										<input type="email" id="desktop_footer_newsletter_email" className="form-control" name="SubscriptionList[email]" maxLength={1000} placeholder="Email" style={{ border: 'none' }} aria-required="true" required /> */}
			{/*										<div className="input-group-append"> */}
			{/*											<button type="submit" className="btn btn-success rounded-2">SUBMIT</button> */}
			{/*										</div> */}
			{/*									</div> */}
			{/*								</div> */}
			{/*							</form> */}
			{/*						</div> */}
			{/*						<style dangerouslySetInnerHTML={{ __html: '\n                                            #desktop_footer_newsletter.active .desktop_footer_newsletter_form {\n                                                display: block;\n                                            }\n\n                                            #desktop_footer_newsletter.active .success_message_newsletter,\n                                            #desktop_footer_newsletter.active .process_message_newsletter,\n                                            #desktop_footer_newsletter.active .error_message_newsletter {\n                                                display: none;\n                                            }\n\n                                            #desktop_footer_newsletter.error .error_message_newsletter {\n                                                display: block;\n                                            }\n\n                                            #desktop_footer_newsletter.error .success_message_newsletter,\n                                            #desktop_footer_newsletter.error .process_message_newsletter,\n                                            #desktop_footer_newsletter.error .desktop_footer_newsletter_form {\n                                                display: none;\n                                            }\n\n                                            #desktop_footer_newsletter.success .success_message_newsletter {\n                                                display: block;\n                                            }\n\n                                            #desktop_footer_newsletter.success .error_message_newsletter,\n                                            #desktop_footer_newsletter.success .process_message_newsletter,\n                                            #desktop_footer_newsletter.success .desktop_footer_newsletter_form {\n                                                display: none;\n                                            }\n\n                                            #desktop_footer_newsletter.loading .process_message_newsletter {\n                                                display: block;\n                                            }\n\n                                            #desktop_footer_newsletter.loading .error_message_newsletter,\n                                            #desktop_footer_newsletter.loading .success_message_newsletter,\n                                            #desktop_footer_newsletter.loading .desktop_footer_newsletter_form {\n                                                display: none;\n                                            }\n                                        ' }} /> */}
			{/*					</div> */}
			{/*				</div> */}
			{/*			</div> */}
			{/*		</div> */}
			{/*	</div> */}
			{/* </div> */}
			{/* /!* <div className="section_footer_2  pb-5"> */}
			{/*	<div className="container py-3"> */}
			{/*		<div className="d-flex justify-content-center align-items-center"> */}
			{/*			<strong>Made with</strong> */}
			{/*			<svg width={23} height={21} viewBox="0 0 23 21" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ margin: '0 5px' }}> */}
			{/*				<path id="05478e1c32536f3146fb32b8113dbff8" d="M11.8536 2.08298L11.4996 2.43598L11.1456 2.08198C9.92281 0.881493 8.27547 0.21241 6.56193 0.220284C4.84839 0.228157 3.20727 0.912351 1.9956 2.12402C0.783933 3.33569 0.0997392 4.97681 0.0918656 6.69035C0.083992 8.40389 0.753075 10.0512 1.95356 11.274L2.30756 11.628L11.4996 20.82L20.6916 11.628L21.0456 11.274C22.2365 10.0493 22.8975 8.40505 22.8855 6.69684C22.8735 4.98862 22.1896 3.35378 20.9816 2.14593C19.7736 0.938072 18.1387 0.254305 16.4305 0.242525C14.7223 0.230745 13.0781 0.891898 11.8536 2.08298Z" fill="#EF8122" /> */}
			{/*			</svg> */}
			{/*			<strong>for UAE</strong> */}
			{/*		</div> */}
			{/*		<div> */}
			{/*			<small>© 2016 - 2023 Furchild Pet Nutrition, All Rights Reserved.</small> */}
			{/*		</div> */}
			{/*	</div> */}
			{/* </div> *!/ */}
		</footer>
	);
}
