export interface ProductRequestModel {
  name: string;
  category: string;
  price: number;
}

export interface ProductResponseModel {
  success: number;
  data: ProductDataResponseModel;
}

export interface ProductDataResponseModel {
  products: ProductRequestModel[] | null;
  loginError?: string;
}
