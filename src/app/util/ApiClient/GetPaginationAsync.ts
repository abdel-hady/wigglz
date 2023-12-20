import { QueryParams } from '@/Types/local-types';


import { PaginationData } from '@/Types/remote-types';
import generateDefaultPaginated from '@/Types/default-generator';
import DefaultPaginationQueryParams from './helpers/DefaultPaginationQueryParams';
import CreateUrlWithQuery from './helpers/CreateUrlWithQuery';

interface GetPaginationAsyncProps {
	url: string;
	locale: string;
	params?: QueryParams;
}
const GetPaginationAsync = async<T>({
	url,
	locale,
	params = {},
}: GetPaginationAsyncProps): Promise<PaginationData<T>> => {
	try {
		const finalUrl = CreateUrlWithQuery(
			url,
			{ ...DefaultPaginationQueryParams, ...params },
		);


		const res = await fetch(finalUrl, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				accept: '*/*',
				'x-locale': locale,
			},
			cache: 'no-cache',
		});

		const parsedRes = await res.json();
		if (!res.ok) {
			throw new Error(parsedRes.message);
		}


		return parsedRes.data as PaginationData<T>;
	} catch (e: any) {
		return generateDefaultPaginated();
	}
};

export default GetPaginationAsync;
