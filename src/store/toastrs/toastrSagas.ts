import { AddToastPayload } from 'react-redux-toastr';
import { all, takeEvery } from 'redux-saga/effects';
import ToastrActions from './toastrTypes';
import { PayloadMetaAction } from 'typesafe-actions';

function* handleToastrAdd (action: PayloadMetaAction<ToastrActions.ADD_TOASTR, AddToastPayload, undefined>) {
    yield 'This is triggered right after a toast is added';
}

function* handleToastrRemove (action: PayloadMetaAction<ToastrActions.REMOVE_TOASTR, string, undefined>) {
    yield 'This is triggered right after a toast is removed';
}

function* ToastrSaga () {
    yield all([
        takeEvery(ToastrActions.ADD_TOASTR, handleToastrAdd),
        takeEvery(ToastrActions.REMOVE_TOASTR, handleToastrRemove)
    ]);
}

export default ToastrSaga;