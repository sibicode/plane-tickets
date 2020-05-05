import { Tickets } from '../../types';

export const FETCH_TICKETS_REQUEST = 'FETCH_TICKETS_REQUEST';
export const FETCH_TICKETS_SUCCESS = 'FETCH_TICKETS_SUCCESS';
export const FETCH_TICKETS_FILED = 'FETCH_TICKETS_FILED';

export type RequestTickets = {
  type: typeof FETCH_TICKETS_REQUEST;
};

export type RequestTicketsSuccess = {
  type: typeof FETCH_TICKETS_SUCCESS;
  payload: Tickets;
};

export type RequestTicketsFiled = {
  type: typeof FETCH_TICKETS_FILED;
  payload: Error;
};

export const fetchTickets = (): RequestTickets => ({
  type: FETCH_TICKETS_REQUEST,
});

export const setTickets = (tickets: Tickets): RequestTicketsSuccess => ({
  type: FETCH_TICKETS_SUCCESS,
  payload: tickets,
});

export const fetchTicketsFiled = (error: Error): RequestTicketsFiled => ({
  type: FETCH_TICKETS_FILED,
  payload: error,
});

export type TicketsActionTypes =
  | RequestTickets
  | RequestTicketsSuccess
  | RequestTicketsFiled;
