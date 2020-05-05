import React, { useReducer } from 'react';
import rootReducer, { initialState } from '../store/reducers';
import {
    SetFilters,
    SetSorting,
    TicketsActionTypes,
    SearchIdActionTypes
} from '../store/actions'

type InitialState = typeof initialState
type Actions = React.Dispatch<TicketsActionTypes | SearchIdActionTypes | SetFilters | SetSorting>

const StateContext = React.createContext<InitialState>({} as InitialState);
const DispatchContext = React.createContext({} as Actions);

const TicketsProvider: React.FC = (props) => {
  const [state, dispatch] = useReducer(rootReducer, initialState);

  return (
    <StateContext.Provider value={state as InitialState}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
};

export { StateContext, DispatchContext, TicketsProvider as Provider };
