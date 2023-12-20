/* eslint-disable prefer-destructuring */
export const REMOTE_URLS = process.env.BASE_URL;
export const WEBSITE_BASE_URL = process.env.WEBSITE_BASE_URL;

export const AUTH_URLS = {
	login: `${REMOTE_URLS}/api/auth/login`,
	register: `${REMOTE_URLS}/api/auth/register`,
	profile: `${REMOTE_URLS}/api/auth/profile`,
	forgotPassword: `${REMOTE_URLS}/api/auth/forgot-password`,
	resetPassword: `${REMOTE_URLS}/api/auth/reset-password`,
	changePassword: `${REMOTE_URLS}/api/auth/change-password`,
	verifyEmail: `${REMOTE_URLS}/api/auth/verify-email`,

};

export const SESSIONS_URLS = {
	ALL_SEESIONS: `${REMOTE_URLS}/api/sessions`,
	USER_SESSIONS: `${REMOTE_URLS}/api/users/me/sessions`,
	SESSIONS_REVIEWS: `${REMOTE_URLS}/api/session-reviews`,
};

export const PROFILE_URL = {
	USER_SESSIONS: `${REMOTE_URLS}/api/users/me/sessions`,
};

export default {
	REMOTE_URLS,
	AUTH_URLS,
	SESSIONS_URLS,
};
