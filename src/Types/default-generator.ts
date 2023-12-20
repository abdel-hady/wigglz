import { PaginationData } from './remote-types';

function generateDefaultPaginated(): PaginationData<any> {
	return {
		items: [],
		totalItems: 0,
		totalPages: 0,
		currentPage: 0,
	} as PaginationData<any>;
}
export default generateDefaultPaginated;
