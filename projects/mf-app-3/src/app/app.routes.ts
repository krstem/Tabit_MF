import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./login/login.component').then(m => m.LoginComponent).catch(ex => {
      console.log(ex.toString(), 'EX LoginComponent');
      return ex;
    })
  },
  {
    path: 'loginInside',
    loadComponent: () => import('./login/login.component').then(m => m.LoginComponent).catch(ex => {
      console.log(ex.toString(), 'EX LoginComponent');
      return ex;
    })
  },
  {
    path: 'profile',
    loadComponent: () => import('./profile/profile.component').then(m => m.ProfileComponent).catch(ex => {
      console.log(ex.toString(), 'EX ProfileComponent');
      return ex;
    })
  },
];
