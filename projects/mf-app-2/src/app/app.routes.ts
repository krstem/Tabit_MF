import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./product/product.component').then(m => m.ProductComponent).catch(ex => {
      console.log(ex.toString(), 'EX ProductComponent');
      return ex;
    })
  },
  {
    path: 'product',
    loadComponent: () => import('./product/product.component').then(m => {
      return m.ProductComponent
    }).catch(ex => {
      console.log(ex.toString(), 'EX ProductComponent');
      return ex;
    })
  },
  {
    path: 'test',
    loadComponent: () => import('./test/test.component').then(m => {
      return m.TestComponent;
    }).catch(ex => {
      console.log(ex.toString(), 'EX TestComponent');
      return ex;
    })
  },
];
