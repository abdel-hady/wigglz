'use client';

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faArrowRightFromBracket, faDollar, faHeart, faLocation, faUser,
} from '@fortawesome/free-solid-svg-icons';

interface ProfileTabsProps {
	activeTab: string;
	setActiveTab: (tab: string) => void;
}
export default function ProfileTabs({ activeTab, setActiveTab }: ProfileTabsProps) {
	const tabs = [
		{ title: 'My Info', icon: faUser },
		{ title: 'Addresses', icon: faLocation },
		{ title: 'Orders', icon: faDollar },
		{ title: 'Wishlist', icon: faHeart },
		{ title: 'Logout', icon: faArrowRightFromBracket },
	];
	return (
		<div className="w-100">
			<div className="">
				<div
					className="nav flex-column nav-pills text-center"
					id="v-pills-tab"
					role="tablist"
					aria-orientation="vertical"
				>
					{tabs.map((tab) => (
						<button
							type="button"
							className={`tabs-list nav-link my-1 ${activeTab === tab.title ? 'active' : ''}`}
							id="v-pills-link1-tab"
							data-mdb-toggle="pill"
							role="tab"
							aria-controls="v-pills-link1"
							aria-selected="true"
							onClick={() => setActiveTab(tab.title)}
							style={{ fontSize: '18px' }}
						>
							<div className="profile-tabs d-flex gap-2">
								<span><FontAwesomeIcon icon={tab.icon} /></span>
								<span className="">{tab.title}</span>
							</div>
						</button>
					))}
				</div>
			</div>
		</div>
	);
}
