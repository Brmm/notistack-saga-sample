import { SnackbarActionTypes, SnackbarState } from './snackbarTypes';
import { createReducer } from 'typesafe-actions';

const initialState: SnackbarState = {
    snackbars: [],
};

const reducer = createReducer(initialState)
    .handleAction(
        SnackbarActionTypes.ENQUEUE_SNACKBAR,
        (state, action) => ({...state, snackbars: [...state.snackbars, {...action.payload}]})
    )
    .handleAction(
        SnackbarActionTypes.REMOVE_SNACKBAR,
        (state, action) => ({...state, snackbars: state.snackbars.filter(snackbar => snackbar.key !== action.payload)})
    );

export default reducer;