import {
  FETCH_SEARCH_ID_REQUEST,
  FETCH_SEARCH_ID_SUCCESS,
  FETCH_SEARCH_ID_FILED,
  SearchIdActionTypes,
} from '../actions';

export type SearchIdState = {
  searchId: string;
  error: Error | null;
  status: string;
};

export const initialSearchIdState: SearchIdState = {
  searchId: '',
  error: null,
  status: 'idle',
};

const searchIdReducer = (
  state: SearchIdState,
  action: SearchIdActionTypes
): SearchIdState => {
  switch (action.type) {
    case FETCH_SEARCH_ID_REQUEST:
      return {
        ...state,
        error: null,
        status: 'loading',
      };
    case FETCH_SEARCH_ID_SUCCESS:
      return {
        searchId: action.payload,
        error: null,
        status: 'success',
      };
    case FETCH_SEARCH_ID_FILED:
      return {
        ...state,
        error: action.payload,
        status: 'error',
      };

    default:
      return state;
  }
};

export default searchIdReducer;
