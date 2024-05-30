import {createReducer, on} from "@ngrx/store";
import {AppState} from "../../models/app.state.model";
import {productErrorAction, productResponseAction, resetProductAction} from "../../store/app.actions";

export const productKey = "product";
export const initialState: AppState = {
  products: null,
}

const _productReducer = createReducer(
  initialState,
  on(productResponseAction, (state, {payload}) => {
    console.log(payload)
    console.log(state)
    return {
      ...state,
      products: payload.data.products,
    }
  }),
  on(productErrorAction, (state, {error}) => {
    return {
      ...state,
      error: error,
      products: null,
    }
  }),
  on(resetProductAction, (state) => {
    return {
      ...initialState
    }
  })
)

export function productReducer(state: any, action: any) {
  return _productReducer(state, action)
}
