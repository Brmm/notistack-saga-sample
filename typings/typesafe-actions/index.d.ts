import { RootAction } from '../../src/store/rootStore'

declare module 'typesafe-actions' {
  interface Types {
    RootAction: RootAction;
  }
}