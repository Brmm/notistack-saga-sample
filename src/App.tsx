import { createMuiTheme } from '@material-ui/core/styles';
import { StylesProvider, ThemeProvider } from '@material-ui/styles';
import ReduxToastr from 'components/ReduxToastr';
import history from 'config/history';
import Router from 'config/Router';
import configureStore from 'config/store';
import { ConnectedRouter } from 'connected-react-router';
import React, { FC } from 'react';
import { Provider } from 'react-redux';

const App: FC = () => {
  const initialState = {} as any;
  const store = configureStore(initialState);

  const theme = createMuiTheme({
    palette: {
      type: 'dark', // Switching the dark mode on is a single property value change.
    },
  });

  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <StylesProvider injectFirst>
          <ThemeProvider theme={theme}>
              <Router />
              <ReduxToastr/>
          </ThemeProvider>
        </StylesProvider>
      </ConnectedRouter>
    </Provider>
  );
};

export default App;
