/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

export default function RegisterPage() {
	return (
		<div
			style={{
				backgroundImage: 'url("/images/register-bg.webp")',
			}}
		>

			<div
				className="mb-3"
				style={{ backgroundColor: '#b6a2ce66' }}
			>

				<div className="container d-flex justify-content-center align-items-center py-5" style={{ height: '600px' }}>
					<div className="col-4">
						<div
							className="register_panel shadow"
							style={{
								backgroundColor: 'white',
								padding: '3rem',
								borderRadius: '5%',

							}}
						>
							<div className="register_header">
								<h3>Register Now</h3>
								<div
									className="subtitle"
									style={{
										fontSize: '1.1rem',
									}}
								>
									By creating an account with our store, you will be able to move through
									the checkout process faster, store multiple shipping addresses.
								</div>
							</div>
							<div className="register_form mt-3">
								<form id="w0" action="https://furchildpets.com/login" method="post">
									<input
										type="hidden"
										name="_csrf"
										defaultValue="OhViXclyN1h6FQ8iKBgEJkzfgfBqGB7Iz-rBBwrKjgR9dlQQqzNSKEwjQ2ced21TKLnXoDVyW7i-mPZfcrvFSQ=="
									/>
									<div className="row">
										<div className="col-12 ">
											<div className="form-group field-users-first_name required">
												<label htmlFor="users-first_name">Name</label>
												<input
													type="text"
													id="users-first_name"
													className="form-control"
													name="Users[first_name]"
													maxLength={500}
													aria-required="true"
												/>
												<div className="invalid-feedback" />
											</div>
										</div>
										<div className="col-12 mt-2">
											<div className="form-group field-users-email required">
												<label htmlFor="users-email">Email</label>
												<input
													type="text"
													id="users-email"
													className="form-control"
													name="Users[email]"
													maxLength={500}
													aria-required="true"
												/>
												<div className="invalid-feedback" />
											</div>
										</div>
										<div className="col-12 mt-2">
											<div className="form-group field-users-password">
												<label htmlFor="users-password">Password</label>
												<input
													type="password"
													id="users-password"
													className="form-control"
													maxLength={200}
													autoComplete="new-password"
													aria-required="true"

												/>
												<div className="invalid-feedback" />
											</div>
										</div>
										<div className="col-12 mt-4">
											<button
												type="submit"
												className="btn btn-fcp-primary w-100 col-xs-12"
											>
												Register
											</button>
										</div>
									</div>
								</form>
							</div>
						</div>

					</div>
					<div className="col-6 text-end">
						<img src="/images/cat-register.png" alt="" />
					</div>

				</div>
			</div>
		</div>
	);
}
