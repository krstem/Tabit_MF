import {Component} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import {Store} from "@ngrx/store";
import {Router} from "@angular/router";
import {Subject} from "rxjs";
import {loginRequestAction} from "../store/app.actions";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    // BrowserModule,
    // BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,

  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private _store: Store<any>, private _route: Router) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
    this._store.select("auth", "isAuth").pipe(takeUntilDestroyed()).subscribe((data: any) => {
      if (data) {
        this._route.navigate(['/profile'])
      } else {
        this._route.navigate(['/loginInside'])
      }
    })
  }

  onSubmit(value: any): void {
    if (this.loginForm.valid) {
      console.log('Login form submitted', value);
      // add value in to store
      this._store.dispatch(loginRequestAction({payload: value}));
    }
  }
}


