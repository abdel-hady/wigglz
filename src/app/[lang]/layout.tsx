import React, { Suspense } from 'react';
import { NextIntlClientProvider } from 'next-intl';
import { Metadata } from 'next';
import getDictionary from '../../../locale/get-dictionary';
import { LocaleProvider } from '../providers/LocaleProvider';
import { AuthProvider } from '../providers/AuthProvider';
import { calculateDir } from '../util/RtlUtils';
import ClientToastContainer from '../components/toast-container/ClientToastContainer';
import PageLoader from '../components/loader/page-loader';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';

async function Content({ children, params, promise }: {
	children: React.ReactNode,
	params: { lang: string },
	promise: Promise<any>
}) {
	const [user] = await promise;
	const { lang } = params;
	const dic = (await import(`../../../dictionaries/${lang}.json`)).default;

	return (
		<AuthProvider user={user}>
			<NextIntlClientProvider locale={params.lang} messages={dic}>
				<div className="relative z-[5]" dir={calculateDir(lang)} lang={lang}>
					<LocaleProvider>
						<ClientToastContainer />
						<Header />
						<div lang={lang}>
							{children}
						</div>
						<Footer />
					</LocaleProvider>
				</div>
			</NextIntlClientProvider>
		</AuthProvider>
	);
}

export async function generateMetadata(
	{ params: { lang } }: { params: { lang: string } },
): Promise<Metadata> {
	const [dictionary] = await Promise.all([
		getDictionary(lang),
	]);

	return {
		title: dictionary.website_title,
	};
}

export default function LangLayout({ children, params }: {
	children: React.ReactNode,
	params: { lang: string }
}) {
	const promises = Promise.all([]);
	return (
		<Suspense fallback={<PageLoader />}>
			<Content promise={promises} params={params}>
				{children}
			</Content>
		</Suspense>
	);
}
