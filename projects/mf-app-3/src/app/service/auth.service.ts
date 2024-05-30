import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {delay, of} from 'rxjs';
import {LoginRequestModel} from "../model/auth.model";

const LOGIN_DATA = {
  success: 200,
  data: {
    token: 'hjbccdsbcbdscbdsb55csc6d65',
    isAuth: true,
    user: {
      email: 'km@gmail.com',
      username: 'Krste Moskov'
    }
  }
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  readonly url = 'xyz.com';
  constructor(private httpClient: HttpClient) { }

  getLoginData(payload:LoginRequestModel){
    return of(LOGIN_DATA).pipe(delay(1000)); // only for simulation that something is loaded
  }
}
