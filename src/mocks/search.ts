import { IRessource, ISearchService } from "interfaces";

export class MockSearchService implements ISearchService<any> {
  resource = {
    value: () => ({
      docs: [],
      totalDocs: 0,
      offset: 0,
      limit: 10,
      totalPages: 1,
      page: 1,
      pagingCounter: 0,
      hasPrevPage: false,
      hasNextPage: false,
      prevPage: null,
      nextPage: null,
    }),
    isLoading: () => false,
    error: () => null,
    set: (data: IRessource<any>) => {
      console.log('Set resource data:', data);
    },
    reload: () => {
      console.log('Resource reloaded');
    },
  };

  currentSearchQuery() {
    return 'mock-query';
  }

  setSearchQuery(query: string) {
    console.log('Search query set to:', query);
  }

  prevPage() {
    console.log('Navigating to previous page');
  }

  nextPage() {
    console.log('Navigating to next page');
  }

  get currentPage() {
    return 1;
  }

  get totalPages() {
    return 1;
  }
}
