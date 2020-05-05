export const FETCH_SEARCH_ID_REQUEST = 'FETCH_SEARCH_ID_REQUEST';
export const FETCH_SEARCH_ID_SUCCESS = 'FETCH_SEARCH_ID_SUCCESS';
export const FETCH_SEARCH_ID_FILED = 'FETCH_SEARCH_ID_FILED';

export type RequestSearchId = {
  type: typeof FETCH_SEARCH_ID_REQUEST;
};

export type RequestSearchIdSuccess = {
  type: typeof FETCH_SEARCH_ID_SUCCESS;
  payload: string;
};

export type RequestSearchIdFiled = {
  type: typeof FETCH_SEARCH_ID_FILED;
  payload: Error;
};

export const fetchSearchId = (): RequestSearchId => ({
  type: FETCH_SEARCH_ID_REQUEST,
});

export const setSearchId = (searchId: string): RequestSearchIdSuccess => ({
  type: FETCH_SEARCH_ID_SUCCESS,
  payload: searchId,
});

export const fetchSearchIdFiled = (error: Error): RequestSearchIdFiled => ({
  type: FETCH_SEARCH_ID_FILED,
  payload: error,
});

export type SearchIdActionTypes =
  | RequestSearchId
  | RequestSearchIdSuccess
  | RequestSearchIdFiled;
