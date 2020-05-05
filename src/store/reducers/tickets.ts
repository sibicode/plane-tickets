import {
  FETCH_TICKETS_REQUEST,
  FETCH_TICKETS_SUCCESS,
  FETCH_TICKETS_FILED,
  TicketsActionTypes,
} from '../actions';
import { Tickets } from '../../types';

export type TicketsState = {
  data: Tickets;
  error: object | null;
  status: string;
};

export const initialTicketsState: TicketsState = {
  data: [],
  error: null,
  status: 'idle',
};

export const ticketsReducer = (
  state: TicketsState,
  action: TicketsActionTypes
): TicketsState => {
  switch (action.type) {
    case FETCH_TICKETS_REQUEST:
      return {
        ...state,
        status: 'loading',
      };
    case FETCH_TICKETS_SUCCESS:
      return {
        data: action.payload,
        status: 'success',
        error: null,
      };
    case FETCH_TICKETS_FILED:
      return {
        ...state,
        status: 'error',
        error: action.payload,
      };

    default:
      return state;
  }
};
