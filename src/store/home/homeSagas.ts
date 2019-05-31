import { decrement, decrementSaga, increment, incrementSaga } from './homeActions';
import { HomeActions } from './homeTypes';
import { actions as toastrActions } from 'react-redux-toastr';
import { all, put, takeEvery } from 'redux-saga/effects';
// import uuid from 'uuid/v4';

function* handleIncrement (action: ReturnType<typeof incrementSaga>) {
    yield all([
        put(increment(action.payload)),
        put(toastrActions.add({ id: 'blaah', type: 'success', title: 'The saga title', message: 'saga is awesome', position: 'top-right' }))
    ]);
}

function* handleDecrement (action: ReturnType<typeof decrementSaga>) {
    yield all([
        put(decrement(action.payload)),
        put(toastrActions.remove('blaah'))
    ]);
}

function* HomeSaga () {
    yield all([
        takeEvery(HomeActions.INCREMENT_SAGA, handleIncrement),
        takeEvery(HomeActions.DECREMENT_SAGA, handleDecrement)
    ]);
}

export default HomeSaga;