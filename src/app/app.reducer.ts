import { createReducer, on } from '@ngrx/store';
import { asiaData, europeData } from './app.actions';

export interface RegionState {
    asiaData: any;
    europeData: any;
  }
export const initialState: RegionState = {
    asiaData: Array,
    europeData: Array
};
const reducer = createReducer(
  initialState,
  on(asiaData, (state: RegionState) => {
    return { ...state, asiaData: [state.asiaData, asiaData]};
  }),
  on(europeData, (state: RegionState) => {
    return { ...state, europeData: [state.europeData, europeData]};
  }),
);

export function appReducer(state: RegionState, action: any) {
  return reducer(state, action);
}
