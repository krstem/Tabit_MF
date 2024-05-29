import { ActionReducer, MetaReducer } from "@ngrx/store";
import {productKey, productReducer} from "./product.reducers";
import {localStorageSync} from "ngrx-store-localstorage";

export const appReducer = {
  products: productReducer
}
export function localStorageSyncReducer(
  reducer: ActionReducer<any>
): ActionReducer<any> {
  return localStorageSync({
      keys: [productKey],
      rehydrate: true,
      storage: sessionStorage,
  })(reducer);
}

export function clearState(
  reducer: ActionReducer<any>
): ActionReducer<any> {
  return (state, action) => {
      if(action !== null && action.type === "CLEAR_STATE"){
          return reducer(undefined, {type: "CLEAR_STATE"});
      }
      return reducer(state, action);
  }
}

export const metaReducers: Array<MetaReducer<any, any>> = [
  localStorageSyncReducer,
  clearState
]
