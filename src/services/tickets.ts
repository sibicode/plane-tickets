import ajax from 'axios';
import { SearchIdResponse, TicketsResponse } from './tickets.types';

export const requestSearchId = (): Promise<SearchIdResponse> => {
  return ajax
    .get('https://front-test.beta.aviasales.ru/search')
    .then(({ data }) => data);
};

export const requestTickets = (searchId: string): Promise<TicketsResponse> => {
  return ajax
    .get(`https://front-test.beta.aviasales.ru/tickets?searchId=${searchId}`)
    .then(({ data }) => data);
};
