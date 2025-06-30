import { Signal } from '@angular/core';
import { ICapsule } from './capsules';
import { ILaunch } from './launches';
import { IDragon } from './dragons';

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

export interface ISearchService<T> {
  resource: {
    value: () => IRessource<T> | null;
    isLoading: () => boolean;
    error: () => any;
    set: (data: IRessource<T>) => void;
    reload: () => void;
  };
  currentSearchQuery(): string;
  setSearchQuery(query: string): void;
  nextPage(): void;
  prevPage(): void;
  totalPages: number;
  currentPage: number;
}

export type SearchableEntity = ICapsule | ILaunch | IDragon;
export type cardStatus = 'retired' | 'unknown' | 'destroyed' | 'active' | 'inactive' | 'lost' | 'under construction'
export type buttonColor = 'primary' | 'accent' | 'warn' | 'default';
export type buttonSize = 'small' | 'medium' | 'large';
export type buttonVariant = 'flat' | 'outline' | 'default';
export type iconPosition = 'start' | 'end' | 'center';
