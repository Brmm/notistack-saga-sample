import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, MuiThemeProvider, Theme } from '@material-ui/core/styles';
import { StylesProvider } from '@material-ui/styles';
import history from 'config/history';
import Router from 'config/Router';
import configureStore from 'config/store';
import { ConnectedRouter } from 'connected-react-router';
import { SnackbarProvider } from 'notistack';
import React, { FC } from 'react';
import { Provider, ReactReduxContext } from 'react-redux';

const App: FC = () => {
  const initialState = {} as any;
  const store = configureStore(initialState);

  const createTheme: Theme = createMuiTheme({
    palette: {
      type: 'dark',
    },
  });

  return (
    <Provider store={store} context={ReactReduxContext}>
      <StylesProvider injectFirst>
          <MuiThemeProvider theme={createTheme}>
            <SnackbarProvider maxSnack={4}>
              <ConnectedRouter history={history} context={ReactReduxContext}>
                <CssBaseline />
                <Router />
              </ConnectedRouter>
            </SnackbarProvider>
          </MuiThemeProvider>
      </StylesProvider>
    </Provider>
  );
};

export default App;
