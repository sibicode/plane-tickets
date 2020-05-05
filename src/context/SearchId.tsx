import React, { useEffect, useReducer } from 'react';
import { requestSearchId } from '../services/tickets';
import searchIdReducer, {
  initialSearchIdState,
  SearchIdState
} from '../store/reducers/searchId'
import {
  fetchSearchId,
  setSearchId,
  fetchSearchIdFiled,
} from '../store/actions';

const StateContext = React.createContext({} as SearchIdState);

const SearchIdProvider: React.FC = (props) => {
  const [state, dispatch] = useReducer(searchIdReducer, initialSearchIdState);

  useEffect(() => {
    dispatch(fetchSearchId());

    requestSearchId()
      .then(({ searchId }) => {
        dispatch(setSearchId(searchId));
      })
      .catch((error) => {
        dispatch(fetchSearchIdFiled(error));
      });
  }, []);

  return (
    <StateContext.Provider value={state}>
      {props.children}
    </StateContext.Provider>
  );
};

export { StateContext, SearchIdProvider as Provider };
