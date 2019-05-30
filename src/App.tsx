import { StylesProvider } from '@material-ui/styles';
import history from 'config/history';
import Router from 'config/Router';
import configureStore from 'config/store';
import { ConnectedRouter } from 'connected-react-router';
import { SnackbarProvider } from 'notistack';
import React, { FC } from 'react';
import { Provider } from 'react-redux';

const App: FC = () => {
  const initialState = {} as any;
  const store = configureStore(initialState);

  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <StylesProvider injectFirst>
          <SnackbarProvider maxSnack={4}>
            <Router />
          </SnackbarProvider>
        </StylesProvider>
      </ConnectedRouter>
    </Provider>
  );
};

export default App;
