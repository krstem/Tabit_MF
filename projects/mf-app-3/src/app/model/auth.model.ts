export interface LoginRequestModel {
  email: string;
  password: string;
}

export interface LoginResponseModel {
  success: number;
  data: LoginDataResponseModel;
}

export interface LoginDataResponseModel {
  user: any,
  token: string | null;
  isAuth: boolean;
  loginError?: string;
}
