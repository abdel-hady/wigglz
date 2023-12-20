'use client';

import React, { useState } from 'react';
import { GeneralPageProp } from '@/Types/local-types';
import ProfileBasicInfo from './partials/ProfileBasicInfo';
import ProfileTabs from './partials/ProfileTabs';
import UserInformation from './partials/UserInformation';
import UserAddresses from './partials/UserAddresses';
import UserOrders from './partials/UserOrders';
import UserWishlist from './partials/UserWishlist';

export default function Profile({ params: { lang } }: GeneralPageProp) {
	const [activeTab, setActiveTab] = useState<string>('My Info');
	console.log(lang);
	return (
		<div className="container bg-white d-flex flex-column flex-lg-row gap-5">
			<div className="image-tab-side d-flex flex-column flex-md-row-reverse flex-lg-column gap-5 justify-content-center" style={{ marginTop: '60px' }}>
				<div className="d-flex justify-content-center">
					<ProfileBasicInfo
						miniUser={{
							avatar: '/images/balls.jpg' || '',
						}}
					/>
				</div>
				<div className="tabs-parent">
					<ProfileTabs activeTab={activeTab} setActiveTab={setActiveTab} />
				</div>
			</div>
			{activeTab === 'My Info' && <UserInformation />}
			{activeTab === 'Addresses' && <UserAddresses />}
			{activeTab === 'Orders' && <UserOrders />}
			{activeTab === 'Wishlist' && <UserWishlist />}
		</div>
	);
}
