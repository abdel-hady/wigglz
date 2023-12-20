import React from 'react';
import { addressesData } from './Addresses/AddressesData';


export default function UserAddresses() {
	return (
		<div className="w-100" style={{ marginTop: '60px' }}>
			<h1 style={{ textAlign: 'center' }}>Delivery Addresses </h1>
			<div className="w-100 py-4">
				<table className="w-100">
					<thead>
						<tr className="">
							<th className="table-head">City</th>
							<th className="table-head">Building Number</th>
							<th className="table-head">Street</th>
						</tr>
					</thead>
					<tbody>
						{
							addressesData.map((cell) => (
								<tr>
									<td className="p-3">
										{cell.city}
									</td>
									<td className="p-3">
										{cell.building_number}
									</td>
									<td className="p-3">
										{cell.street}
									</td>
								</tr>
							))
						}
					</tbody>
				</table>
			</div>
		</div>
	);
}
