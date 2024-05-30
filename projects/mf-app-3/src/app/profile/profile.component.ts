import {Component} from '@angular/core';
import {logout} from "../store/app.actions";
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  constructor(private _store: Store<any>) {
  }


  logout() {
    console.log('logout')
    this._store.dispatch(logout());
    // this.authEffects.logout$.subscribe();
  }
}
