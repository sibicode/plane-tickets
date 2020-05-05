import { SortTypes } from '../../constants/sort';
import { SetSorting, SET_SORTING } from '../actions';

type SortingState = {
  sortBy: SortTypes;
};

export const initialSortingState: SortingState = {
  sortBy: SortTypes.cheapest,
};

export const sortingReducer = (
  state: SortingState,
  action: SetSorting
): SortingState => {
  switch (action.type) {
    case SET_SORTING:
      return {
        sortBy: action.payload,
      };

    default:
      return state;
  }
};
