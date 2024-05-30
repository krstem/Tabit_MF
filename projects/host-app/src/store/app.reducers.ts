import { ActionReducer, MetaReducer } from "@ngrx/store";
import {productKey, productReducer} from "../../../mf-app/src/app/products/store/product.reducers";
import {localStorageSync} from "ngrx-store-localstorage";
import {createProductKey, createProductReducer} from "../../../mf-app-2/src/app/store/product.reducers";

export const appReducer = {
  products: productReducer,
  product: createProductReducer
}
export function localStorageSyncReducer(
  reducer: ActionReducer<any>
): ActionReducer<any> {
  return localStorageSync({
      keys: [productKey, createProductKey], // add here all keys from the APP
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
