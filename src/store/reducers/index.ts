import { combineReducers } from '../combineReducers';
import { ticketsReducer, initialTicketsState } from './tickets';
import { sortingReducer, initialSortingState } from './sorting';
import { filtersReducer, initialFiltersState } from './filters';

export const initialState = {
  tickets: initialTicketsState,
  sorting: initialSortingState,
  filters: initialFiltersState,
};

export default combineReducers({
  tickets: ticketsReducer,
  sorting: sortingReducer,
  filters: filtersReducer,
});
