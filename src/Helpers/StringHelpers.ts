function replaceSpacesWithUnderscores(str: string) {
	return str.split(' ').join('_');
}

function replaceSpacesWithHyphens(str: string) {
	return str.split(' ').join('-');
}

export { replaceSpacesWithUnderscores, replaceSpacesWithHyphens };
