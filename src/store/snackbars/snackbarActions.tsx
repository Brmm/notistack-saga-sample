import Button from '@material-ui/core/Button';
import React from 'react';
import { Snackbar, SnackbarActionTypes } from './snackbarTypes';
import { action } from 'typesafe-actions';

export const removeSnackbar = (key: string | number) => action(SnackbarActionTypes.REMOVE_SNACKBAR, key);
export const closeSnackbar = (key?: string | number) => action(SnackbarActionTypes.CLOSE_SNACKBAR, { dismissAll: !key, key });
export const enqueueSnackbar = (snackbar: Snackbar) => {
    const snackKey = (snackbar.options && snackbar.options.key) || new Date().getTime() + Math.random();
    return action(SnackbarActionTypes.ENQUEUE_SNACKBAR, {
        ...snackbar,
        key: snackKey,
        options: {
            key: snackKey,
            variant: 'success',
            action: () => (<Button onClick={() => closeSnackbar(snackKey)}>dissmiss me</Button>),
        },
    });
};