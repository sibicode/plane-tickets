import { Tickets } from '../types'

export type SearchIdResponse = {
  searchId: string;
};

export type TicketsResponse = {
  stop: boolean;
  tickets: Tickets;
};
