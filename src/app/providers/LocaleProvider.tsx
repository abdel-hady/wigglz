'use client';

import React, { createContext, useContext } from 'react';

import { i18n } from '../../../locale/i18n-config';
import useLocaleManager, { ArObj, EngObj, LocaleNamingAndIcon } from '../hooks/useLocaleManager';


interface LocaleContextProps {
	currentLocaleInfo: LocaleNamingAndIcon;
	otherLocaleInfoList: LocaleNamingAndIcon[];
	locale: string;
	setNewLocale: (newLocale: string) => void;
	getLocaleFromUrl: () => string;
	isRtl: boolean;
	makeLocaleUrl: (url: string) => string,

}

export const LocaleContext = createContext<LocaleContextProps>({
	currentLocaleInfo: EngObj,
	otherLocaleInfoList: [ArObj],
	locale: i18n.defaultLocale,
	setNewLocale: () => { },
	getLocaleFromUrl: () => '',
	isRtl: false,
	makeLocaleUrl: () => '',
});

export function LocaleProvider({ children }: { children: React.ReactNode }) {
	const localeManager = useLocaleManager();

	return (
		<LocaleContext.Provider value={localeManager}>
			{children}
		</LocaleContext.Provider>
	);
}

export const useLocaleProvider = (): LocaleContextProps => useContext(LocaleContext);
