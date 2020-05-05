import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';
import { SearchIdContext, TicketsContext } from './context';
import { GlobalStyle } from './assets/styled';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <SearchIdContext.Provider>
      <TicketsContext.Provider>
        <App />
      </TicketsContext.Provider>
    </SearchIdContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
