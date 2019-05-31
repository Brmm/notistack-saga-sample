import snackbarAction from 'components/SnackbarAction';
import { decrement, decrementSaga, increment, incrementSaga } from './homeActions';
import { HomeActions } from './homeTypes';
import { all, put, takeEvery } from 'redux-saga/effects';
import { enqueueSnackbar } from 'store/snackbars/snackbarActions';

function* handleIncrement (action: ReturnType<typeof incrementSaga>) {
    yield all([
        put(increment(action.payload)),
    ]);
}

function* handleDecrement (action: ReturnType<typeof decrementSaga>) {
    yield all([
        put(decrement(action.payload)),
    ]);
}

function* HomeSaga () {
    yield all([
        takeEvery(HomeActions.INCREMENT_SAGA, handleIncrement),
        takeEvery(HomeActions.DECREMENT_SAGA, handleDecrement)
    ]);
}

export default HomeSaga;