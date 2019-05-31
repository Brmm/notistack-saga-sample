import { AddToastPayload as ToastrOptions } from 'react-redux-toastr';

export const toastrTimeout = 3000;
export const isDevEnv = () => {
    const env = process.env.NODE_ENV;
    return env === 'development' ? true : env === 'test';
};

export const defaultToastrOptions: ToastrOptions = {
    type: 'success',
    position: 'top-left',
    options: {
        timeOut: toastrTimeout,
        progressBar: false,
        removeOnHover: false,
        transitionIn: 'fadeIn',
        transitionOut: 'fadeOut',
        showCloseButton: true,
    },
};