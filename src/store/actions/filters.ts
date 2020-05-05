export const SET_FILTERS = 'SET_FILTERS';

export type SetFilters = {
  type: typeof SET_FILTERS;
  payload: Array<string>;
};

export const setFilters = (filters: Array<string>): SetFilters => ({
  type: SET_FILTERS,
  payload: filters,
});
