import { connectRouter, go, goBack, goForward, push, replace, RouterState } from 'connected-react-router';
import { History } from 'history';
import { actions as toastrActions, reducer as toastrReducer, ToastrState } from 'react-redux-toastr';
import { combineReducers } from 'redux';
import { all, fork } from 'redux-saga/effects';
import * as homeActions from 'store/home/homeActions';
import HomeReducer from 'store/home/homeReducer';
import homeSaga from 'store/home/homeSagas';
import { HomeState } from 'store/home/homeTypes';
import { ActionType } from 'typesafe-actions';

const routerActions = {
    push: typeof push,
    replace: typeof replace,
    go: typeof go,
    goBack: typeof goBack,
    goForward: typeof goForward,
};

const ToastrActions = {
    add: typeof toastrActions.add,
    clean: typeof toastrActions.clean,
    hideConfirm: typeof toastrActions.hideConfirm,
    remove: typeof toastrActions.remove,
    removeByType: typeof toastrActions.removeByType,
    showConfirm: typeof toastrActions.showConfirm,
};

export type ApplicationState = Readonly<{
    router: RouterState;
    home: HomeState;
    toastr: ToastrState;
}>;

export function* rootSaga () {
    yield all([fork(homeSaga)]);
}

export const rootActions = {
    router: routerActions,
    home: homeActions,
    toastr: ToastrActions,
};

export type RootAction = ActionType<typeof rootActions>;

export default (history: History) => combineReducers<ApplicationState>({
    router: connectRouter(history),
    home: HomeReducer,
    toastr: toastrReducer,
});