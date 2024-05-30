import {createReducer, on} from "@ngrx/store";
import {AppState} from "../../models/app.state.model";
import {
  productErrorAction,
  productResponseAction,
  resetProductAction
} from "../../../../../host-app/src/store/app.actions";

export const productKey = "product";
export const initialState: AppState = {
  products: null,
}

const _productReducer = createReducer(
  initialState,
  on(productResponseAction, (state, {payload}) => {
    console.log(payload, 'PRODUCTS PAYLOAD REDUCER')
    console.log(state, 'PRODUCTS STATE REDUCER')
    if (state.products) { // check if we have products in store
      console.log('WE HAVE DATA DO UPDATE')
      return {
        ...state,
        products: [...state.products, payload.data.products[0]],
      }
    } else {
      return {
        ...state,
        products: payload.data.products,
      }
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

export function productsReducer(state: any, action: any) {
  return _productReducer(state, action)
}
