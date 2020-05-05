import React, { Fragment, useContext, useMemo, memo } from 'react';
import Ticket from '../Ticket';
import { TicketsContext } from '../../context';
import { getFilteredTickets, getSortedTickets } from '../../helpers/tickets';

const Tickets: React.FC = () => {
  const { tickets, filters, sorting } = useContext(TicketsContext.StateContext);
  const ticketsState = tickets.data;
  const activeFilters = filters.active;
  const sortBy = sorting.sortBy;

  const filteredTickets = useMemo(
    () => getFilteredTickets(activeFilters, ticketsState),
    [activeFilters, ticketsState]
  );
  const sortedTickets = useMemo(
    () => getSortedTickets(filteredTickets, sortBy),
    [filteredTickets, sortBy]
  );

  return (
    <Fragment>
      {sortedTickets.slice(0, 5).map((ticket) => {
        return <Ticket key={ticket.price} ticket={ticket} />;
      })}
    </Fragment>
  );
};

export default memo(Tickets);
