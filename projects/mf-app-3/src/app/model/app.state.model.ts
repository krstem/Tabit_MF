export interface AppState {
  token: string | null;
  user: any | null;
  isAuth: boolean;
  loginError?: string;
}
