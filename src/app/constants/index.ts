import { cardStatus } from "interfaces";

export const DEFAULT_RESSOURCE_LIMIT = 8;

export const EMPTY_RESOURCE = {
  docs: [],
  totalDocs: 0,
  offset: 0,
  limit: DEFAULT_RESSOURCE_LIMIT,
  totalPages: 1,
  page: 1,
  pagingCounter: 1,
  hasPrevPage: false,
  hasNextPage: false,
  prevPage: null,
  nextPage: null
};

export const STATUS_CLASS_MAP: Record<cardStatus, string> = {
  retired: 'color-blue',
  unknown: 'color-neutral',
  destroyed: 'color-error',
  active: 'color-success',
  inactive: 'color-blue-light',
  lost: 'color-black',
  'under construction': 'color-beige'
};