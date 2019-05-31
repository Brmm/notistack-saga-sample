import IconButton from '@material-ui/core/IconButton';
import { createMuiTheme } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import { StylesProvider, ThemeProvider } from '@material-ui/styles';
import history from 'config/history';
import Router from 'config/Router';
import configureStore from 'config/store';
import { ConnectedRouter } from 'connected-react-router';
import { SnackbarProvider, useSnackbar } from 'notistack';
import React, { FC } from 'react';
import { Provider } from 'react-redux';

const App: FC = () => {
  const initialState = {} as any;
  const store = configureStore(initialState);
  const AppContext = React.createContext(0);

  const theme = createMuiTheme({
    palette: {
      type: 'dark', // Switching the dark mode on is a single property value change.
    },
  });

  /**
   * Enabling this will have the app crash on not being able to read "handleEnqueueSnackbar of undefined".
   * Not sure why that happens actually. I feel like it can be worked around.
   * Adding the action here would be most ideal since it'll add the close action to every snackbar
   * throughout the entire app.
   */
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const action = (key?: ReturnType<typeof closeSnackbar>) => (
      <IconButton onClick={() => key ? closeSnackbar(key) : closeSnackbar()}>
          <CloseIcon />
      </IconButton>
  );

  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <StylesProvider injectFirst>
          <ThemeProvider theme={theme}>
          <SnackbarProvider maxSnack={4} action={action}>
            <Router />
          </SnackbarProvider>
          </ThemeProvider>
        </StylesProvider>
      </ConnectedRouter>
    </Provider>
  );
};

export default App;
