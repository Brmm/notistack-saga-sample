import { HomeActions } from './homeTypes';
import { action } from 'typesafe-actions';

export const increment = (amount: number) => action(HomeActions.INCREMENT, amount);
export const decrement = (amount: number) => action(HomeActions.DECREMENT, amount);
export const incrementAsync = (amount: number) => action(HomeActions.INCREMENT_ASYNC, amount);
export const decrementAsync = (amount: number) => action(HomeActions.DECREMENT_ASYNC, amount);