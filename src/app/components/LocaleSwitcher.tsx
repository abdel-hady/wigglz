'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import React from 'react';
import { i18n } from '../../../locale/i18n-config';

export default function LocaleSwitcher() {
	const pathName = usePathname();
	const redirectedPathName = (locale: string) => {
		if (!pathName) return '/';
		const segments = pathName.split('/');
		segments[1] = locale;
		return segments.join('/');
	};

	return (
		<div>
			<p>Locale switcher:</p>
			<ul>
				{i18n.locales.map((locale) => (
					<li key={locale}>
						<Link href={redirectedPathName(locale)}>{locale}</Link>
					</li>
				))}
			</ul>
		</div>
	);
}
