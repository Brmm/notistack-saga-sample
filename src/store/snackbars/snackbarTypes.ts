import { OptionsObject } from 'notistack';

export enum SnackbarActionTypes {
    ENQUEUE_SNACKBAR = '@@snackbar/ENQUEUE_SNACKBAR',
    REMOVE_SNACKBAR = '@@snackbar/REMOVE_SNACKBAR',
    CLOSE_SNACKBAR = '@@snackbar/CLOSE_SNACKBAR',
}

export interface SnackbarState {
    readonly snackbars: Snackbar[];
}

export type Snackbar = {
    key?: string | number,
    message: string,
    dismissed?: boolean;
    options?: OptionsObject;
};