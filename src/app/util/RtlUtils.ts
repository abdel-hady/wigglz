export function isRtl(locale: string) {
	return locale === 'ar';
}


export function calculateDir(locale: string) {
	if (isRtl(locale)) {
		return 'rtl';
	}
	return 'ltr';
}
