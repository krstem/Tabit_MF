import { createAction, props } from "@ngrx/store";
import {LoginRequestModel, LoginResponseModel} from "../model/auth.model";

export const loginRequestAction = createAction(
  '[Auth] login request action',
  props<{payload: LoginRequestModel}>()
);

export const loginResponseAction = createAction(
  '[Auth] login response action',
  props<{payload: LoginResponseModel}>()
);

export const loginErrorAction = createAction(
  '[Auth] login response error action',
  props<{error: string}>()
);
export const resetLoginAction = createAction(
  '[Auth] reset login details',
);
export const resetState = createAction('CLEAR_STATE');
export const logout = createAction('LOG_OUT');
