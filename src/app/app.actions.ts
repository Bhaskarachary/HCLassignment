import { createAction, props } from '@ngrx/store';

export const asiaData = createAction('[App Component] asiaData', props<{asiaData: any}>());
export const europeData = createAction('[App Component] europeData', props<{europeData: any}>());
