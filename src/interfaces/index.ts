export interface IRessource<T> {
  docs: T[];
  totalDocs: number;
  offset: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: number | null;
  nextPage: number | null;
}

export interface IRessourceRef<T> {
  docs: T[];
  total?: number;
  page?: number;
  limit?: number;
  [key: string]: any;
}