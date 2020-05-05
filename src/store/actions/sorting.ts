import { SortTypes } from '../../constants/sort';

export const SET_SORTING = 'SET_SORTING';

export type SetSorting = {
  type: typeof SET_SORTING;
  payload: SortTypes;
};

export const setSorting = (sortBy: SortTypes): SetSorting => ({
  type: SET_SORTING,
  payload: sortBy,
});
