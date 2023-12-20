import React from 'react';
import {
	faBookmark, faCat, faDog, faIdBadge, faShop,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import useClickOutsideClose from '@/app/hooks/useClickOutsideClose';

export default function DropdownBurgerMenuLinks({ closeNavCb }: { closeNavCb: () => void }) {
	const { outlayRef } = useClickOutsideClose({ closeCb: closeNavCb });

	const links = [
		{ title: 'Dogs', icon: faDog, link: '/en/shop' },
		{ title: 'Cats', icon: faCat, link: '/en/shop' },
		{ title: 'Our story', icon: faBookmark, link: '/en/about-us/our-story' },
		{ title: 'Contact', icon: faIdBadge, link: '/en/about-us/contact-us' },
		{ title: 'Shop', icon: faShop, link: '/en/shop' },
	];

	const loginLink = [{ title: 'Login', link: '/en/auth/login' }];
	return (
		<div ref={outlayRef}>
			<ul className="ul-navbar w-100 text-center text-xl d-flex flex-column gap-4 py-4 xl:hidden border-t-2 border-t-gray-100">
				{links.map((link) => (
					<li className="w-120 mx-auto">
						<Link
							href={link.link}
							className="li-navbar d-flex"
							onClick={() => {
								closeNavCb();
							}}
						>
							<span>
								<FontAwesomeIcon icon={link.icon} />
							</span>
							<span>{link.title}</span>
						</Link>
					</li>
				))}
				<li className="d-flex justify-content-center">
					<hr className="w-75 border border-1" />
				</li>
				{loginLink.map((link) => (
					<li className="d-flex justify-content-center mx-auto">
						<Link
							href={link.link}
							className="li-navbar"
							onClick={() => {
								closeNavCb();
							}}
						>
							<span>{link.title}</span>
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
}
