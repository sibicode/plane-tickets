import React, { Fragment, useEffect, useContext } from 'react';
import Error from '../Error';
import Spinner from '../Spinner';
import Filters from '../Filters';
import Tickets from '../Tickets';
import Tabs from '../Tabs';
import { requestTickets } from '../../services/tickets';
import { SearchIdContext, TicketsContext } from '../../context';
import {
  setTickets,
  fetchTickets,
  fetchTicketsFiled
} from '../../store/actions'
import { Page, Header, Wrapper, Sidebar, Content } from './App.styled';
import logo from '../../assets/images/plane.svg';

function App() {
  const { searchId, status: SearchIdStatus } = useContext(
    SearchIdContext.StateContext
  );
  const { tickets } = useContext(TicketsContext.StateContext);
  const dispatch = useContext(TicketsContext.DispatchContext);

  const { status } = tickets;
  const isLoading = status === 'loading';
  const isSearchIdLoading = SearchIdStatus === 'loading';
  const isError = status === 'error';

  useEffect(() => {
    if (!searchId) return;
    dispatch(fetchTickets());

    requestTickets(searchId)
      .then(({ tickets }) => {
        dispatch(setTickets(tickets));
      })
      .catch((error) => {
        dispatch(fetchTicketsFiled(error));
      });
  }, [searchId, dispatch]);

  return (
    <Page>
      <Header>
        <img src={logo} alt='aviasales' />
      </Header>
      <Wrapper>
        {isSearchIdLoading ? (
          <Spinner />
        ) : isError ? (
          <Error />
        ) : (
          <Fragment>
            <Sidebar>
              <Filters />
            </Sidebar>
            <Content>
              <Tabs />
              {isLoading ? <Spinner /> : <Tickets />}
            </Content>
          </Fragment>
        )}
      </Wrapper>
    </Page>
  );
}

export default App;
