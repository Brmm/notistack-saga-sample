
export enum HomeActions {
  INCREMENT = '@@home/INCREMENT_COUNT',
  DECREMENT = '@@home/DECREMENT_COUNT',
  INCREMENT_SAGA = '@@home/INCREMENT_SAGA',
  DECREMENT_SAGA = '@@home/DECREMENT_SAGA',
}

export type HomeState = Readonly<{
  count: number;
}>;