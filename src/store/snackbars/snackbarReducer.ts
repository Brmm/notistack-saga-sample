import { SnackbarActionTypes, SnackbarState } from './snackbarTypes';
import { createReducer } from 'typesafe-actions';

const initialState: SnackbarState = {
    snackbars: [],
};

const reducer = createReducer(initialState)
    .handleAction(
        SnackbarActionTypes.ENQUEUE_SNACKBAR,
        // @ts-ignore
        (state, action) => ({ ...state, snackbars: [...state.snackbars, { ...action.payload }] })
    )
    .handleAction(
        SnackbarActionTypes.REMOVE_SNACKBAR,
        // @ts-ignore
        (state, action) => ({ ...state, snackbars: state.snackbars.filter(snackbar => snackbar.key !== action.payload) })
    )
    .handleAction(
        SnackbarActionTypes.CLOSE_SNACKBAR,
        // @ts-ignore
        (state, action) => ({
            // @ts-ignore
            ...state, snackbars: state.snackbars.map(snackbar => ((action.payload.dismissAll || snackbar.key === action.payload.key)
                ? { ...snackbar, dismissed: true }
                : { ...snackbar })),
        })
    );

export default reducer;