import { DEFAULT_CAPSULE_LIMIT } from "./capsules";

export const EMPTY_RESOURCE = {
  docs: [],
  totalDocs: 0,
  offset: 0,
  limit: DEFAULT_CAPSULE_LIMIT,
  totalPages: 0,
  page: 1,
  pagingCounter: 1,
  hasPrevPage: false,
  hasNextPage: false,
  prevPage: null,
  nextPage: null
};