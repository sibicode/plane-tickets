import { SET_FILTERS, SetFilters } from '../actions';

type FilterState = {
  active: Array<string>;
};

export const initialFiltersState = {
  active: [],
};

export const filtersReducer = (
  state: FilterState,
  action: SetFilters
): FilterState => {
  switch (action.type) {
    case SET_FILTERS:
      return {
        active: action.payload,
      };

    default:
      return state;
  }
};
