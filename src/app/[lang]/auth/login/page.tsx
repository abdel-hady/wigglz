/* eslint-disable jsx-a11y/label-has-associated-control */
import Link from 'next/link';
import React from 'react';

export default function LoginPage() {
	return (
		<div
			style={{
				backgroundImage: 'url("/images/login-bg.webp")',
			}}
		>

			<div
				className="mb-3 shadow"
				style={{ backgroundColor: '#b6a2ce66' }}
			>

				<div
					className="container d-flex justify-content-center align-items-center py-5"
					style={{ height: '600px' }}
				>
					<div className="col-4">
						<div
							className="login_panel"
							style={{
								backgroundColor: 'white',
								padding: '3rem',
								borderRadius: '5%',
							}}
						>
							<div className="login_header">
								<h3>Login to our site</h3>
								<div
									className="subtitle"
									style={{
										fontSize: '1.1rem',
									}}
								>
									If you have an account with us, log in using your email address.
								</div>
							</div>
							<div className="login_form mt-3">
								<form
									id="login-form"
								>
									<div className="row">
										<div className="mt-2 col-12">
											<div className="form-group field-loginform-emailaddress required">
												<label htmlFor="loginform-emailaddress">Email</label>
												<input
													type="text"
													id="loginform-emailaddress"
													className="form-control"
													name="LoginForm[emailAddress]"
													aria-required="true"
												/>
												<div className="invalid-feedback" />
											</div>
											<div className="form-group field-loginform-password required">
												<label htmlFor="loginform-password">Password</label>
												<input
													type="password"
													id="loginform-password"
													className="form-control"
													name="LoginForm[password]"
													aria-required="true"
												/>
												<div className="invalid-feedback" />
											</div>
										</div>
										<div className="mt-2 col-12">
											<div className="col-6">
												<div className="form-group field-loginform-rememberme">
													<div className="custom-control custom-checkbox w-100">
														<input
															type="checkbox"
															id="loginform-rememberme"
															className="custom-control-input"
															name="LoginForm[rememberMe]"
															defaultValue={1}
														/>
														<label
															className="custom-control-label mb-2"
															htmlFor="loginform-rememberme"
														>
															Remember Me
														</label>
														<div className="invalid-feedback" />
													</div>
												</div>
											</div>
										</div>

										<div className="mt-2 col-12">
											<button
												type="submit"
												className="btn btn-fcp-primary w-100 col-xs-12"
												name="login-button"
											>
												Login
											</button>
										</div>
										<div className="d-flex justify-content-between">

											<div className="forgot_password mt-3">
												<a href="forgot-password.html" style={{ color: '#9a89b1' }}>Forgot Password?</a>
											</div>
											<div className="forgot_password mt-3">
												<Link href="/en/auth/register" style={{ color: '#9a89b1' }}>Create New Account</Link>
											</div>
										</div>

									</div>
								</form>
								<div className="clearfix" />
							</div>
						</div>
					</div>
					<div className="col-6 text-end">
						<img src="/images/dog-login.png" alt="" />
					</div>

				</div>
			</div>
		</div>

	);
}
