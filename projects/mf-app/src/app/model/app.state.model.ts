import {ProductRequestModel} from "./product.model";

export interface AppState {
  products: ProductRequestModel[] | null;
  loginError?: string;
}
