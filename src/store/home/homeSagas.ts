
import { decrement, decrementAsync, increment, incrementAsync } from './homeActions';
import { HomeActions } from './homeTypes';
import { all, delay, put, takeEvery } from 'redux-saga/effects';

function* handleIncrementAsync (action: ReturnType<typeof incrementAsync>) {
    yield delay(1000);
    yield put(increment(action.payload));
}

function* handleDecrementAsync (action: ReturnType<typeof decrementAsync>) {
    yield delay(1000);
    yield put(decrement(action.payload));
}

function* HomeSaga () {
    yield all([
        takeEvery(HomeActions.INCREMENT_ASYNC, handleIncrementAsync),
        takeEvery(HomeActions.DECREMENT_ASYNC, handleDecrementAsync)
    ]);
}

export default HomeSaga;