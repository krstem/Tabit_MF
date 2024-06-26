import { ActionReducer, MetaReducer } from "@ngrx/store";
import {productKey, productsReducer} from "../../../mf-app/src/app/products/store/products.reducers";
import {localStorageSync} from "ngrx-store-localstorage";
import {createProductKey, createProductReducer} from "../../../mf-app-2/src/app/store/product.reducers";
import {authKey, authReducer} from "../../../mf-app-3/src/app/store/auth.reducers";

export const appReducer = {
  products: productsReducer,
  product: createProductReducer,
  auth: authReducer
}
export function localStorageSyncReducer(
  reducer: ActionReducer<any>
): ActionReducer<any> {
  return localStorageSync({
      keys: [productKey, createProductKey, authKey], // add here all keys from the APP
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
