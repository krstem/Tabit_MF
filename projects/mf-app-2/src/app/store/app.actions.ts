import { createAction, props } from "@ngrx/store";

export const createProductRequestAction = createAction(
  '[CreateProduct] product request action',
  props<{payload: any}>()
);

export const createProductResponseAction = createAction(
  '[CreateProduct] product response action',
  props<{payload: any}>()
);

export const createProductErrorAction = createAction(
  '[CreateProduct] product response error action',
  props<{error: string}>()
);
export const createProductResetAction = createAction(
  '[CreateProduct] reset product details',
);
export const resetState = createAction('CLEAR_STATE');
