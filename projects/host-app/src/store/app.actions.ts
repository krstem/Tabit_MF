import { createAction, props } from "@ngrx/store";

export const productRequestAction = createAction(
  '[Product] products request action',
  props<{payload: any}>()
);

export const productResponseAction = createAction(
  '[Product] products response action',
  props<{payload: any}>()
);

export const productErrorAction = createAction(
  '[Product] products response error action',
  props<{error: string}>()
);

export const resetProductAction = createAction(
  '[Product] reset product details',
);

export const resetState = createAction('CLEAR_STATE');
export const getProductsState = createAction('PRODUCTS_STATE');
