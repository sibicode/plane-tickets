import { Segment, Tickets } from '../types';
import { stopsFilters } from '../constants/filters';
import { SortTypes } from '../constants/sort';

const getTicketSegmentsDuration = (segments: Array<Segment>): number =>
  segments.reduce((totalDuration, segment) => {
    return totalDuration + segment.duration;
  }, 0);

export const getSortedTickets = (tickets: Tickets, sortBy: number): Tickets => {
  switch (sortBy) {
    case SortTypes.cheapest:
      return tickets.sort((a, b) => a.price - b.price);

    case SortTypes.fastest:
      return tickets.sort(
        (a, b) =>
          getTicketSegmentsDuration(a.segments) -
          getTicketSegmentsDuration(b.segments)
      );

    default:
      return tickets;
  }
};

export const getFilteredTickets = (
  filters: Array<string>,
  tickets: Tickets
): Tickets => {
  if (!filters.length || filters.length === Object.keys(stopsFilters).length) {
    return tickets;
  }

  return tickets.filter((ticket) => {
    return filters.includes(
      String(ticket.segments[0].stops.length + ticket.segments[1].stops.length)
    );
  });
};
