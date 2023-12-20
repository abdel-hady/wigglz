/* eslint-disable prefer-destructuring */
const BACKEND_BASE_URL = process.env.BACKEND_BASE_URL;
const parseImageUrl = (url: string) => {
	if (!url) {
		return '/assets/images/person-placeholder.jpeg';
	}
	return `${BACKEND_BASE_URL}${url}`;
};

export default parseImageUrl;
