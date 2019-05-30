import { HomeActions, HomeState } from './homeTypes';
import { createReducer } from 'typesafe-actions';

const initialState: HomeState = {
  count: 0,
};

const reducer = createReducer(initialState)
  .handleAction(HomeActions.INCREMENT, (state, action) => ({ ...state, count: state.count + action.payload }))
  .handleAction(HomeActions.DECREMENT, (state, action) => ({ ...state, count: state.count - action.payload }));

export default reducer;