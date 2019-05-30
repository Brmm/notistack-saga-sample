
export enum HomeActions {
  INCREMENT = '@@demo/INCREMENT_COUNT',
  DECREMENT = '@@demo/DECREMENT_COUNT',
  INCREMENT_ASYNC = '@@demo/INCREMENT_ASYNC',
  DECREMENT_ASYNC = '@@demo/DECREMENT_ASYNC',
}

export type HomeState = {
  readonly count: number;
};