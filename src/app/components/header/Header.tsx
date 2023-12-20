import React from 'react';
import DesktopHeader from './partials/DesktopHeader';
import MobileHeader from './partials/MobileHeader';

export default function Header() {
	return (
		<header>
			<DesktopHeader />
			<MobileHeader />
		</header>
	);
}
