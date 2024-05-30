import { createReducer, on } from "@ngrx/store";
import {AppState} from "../model/app.state.model";
import {createProductErrorAction, createProductResponseAction, createProductResetAction} from "./app.actions";

export const createProductKey="CreateProduct";
export const initialState: AppState = {
  product: null,
}

const _createProductReducer = createReducer(
  initialState,
  on(createProductResponseAction,(state, {payload})=>{
    console.log(payload,'payload')
    console.log(state, 'state')
    return {
      ...state,
      product: payload.data,
    }
  }),
  on(createProductErrorAction,(state, {error})=>{
    console.log(state, '==========')
    return {
      ...state,
      error: error,
      product: null,
    }
  }),
  on(createProductResetAction, (state)=>{
    return {
      ...initialState
    }
  })
)

export function createProductReducer(state:any, action:any){
  return _createProductReducer(state, action)
}
