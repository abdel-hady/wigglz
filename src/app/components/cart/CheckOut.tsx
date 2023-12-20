import React from 'react';

export default function CheckOut() {
	return (
		<div
			className="container mx-auto p-3 col-12 col-md-6 col-lg-5 col-xl-4"
			style={{
				height: '120px', background: 'rgb(255, 245, 233)', position: 'fixed', bottom: 0,
			}}
		>
			<div
				className="w-100 d-flex align-items-center justify-content-between"
				style={{ height: '50px' }}
			>
				<span style={{ fontSize: '1.3rem' }}>Subtotal</span>
				<span style={{ fontSize: '1.3rem', fontWeight: 'bold' }}>
					120 AED
				</span>
			</div>
			<div className="w-50 mx-auto">
				<button className="btn btn-fcp-primary w-100" type="button">
					Check Out
				</button>
			</div>
		</div>
	);
}
