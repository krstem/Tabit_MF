import {loadRemoteModule} from '@angular-architects/module-federation';
import {Routes} from '@angular/router';
import {ShellComponent} from "./shell/shell.component";
import {ProductsComponent} from "../../../mf-app/src/app/products/products.component";

const MFE_APP_URL = "http://localhost:4300/remoteEntry.js";
export const routes: Routes = [
  {
    path: '',
    component: ShellComponent

  },
  {
    path: 'welcome',
    loadComponent: () => {
      return loadRemoteModule({
        type: "module",
        remoteEntry: MFE_APP_URL,
        exposedModule: "./WelcomeComponent",
      }).then(m => m.WelcomeComponent).catch(err => console.log(err, '----- ERRoR----'));
    }
  },
  {
    path: 'products',
    loadComponent: () => {
      return loadRemoteModule({
        type: "module",
        remoteEntry: MFE_APP_URL,
        exposedModule: "./ProductsComponent",
      }).then(m => m.ProductsComponent).catch(err => console.log(err, '----- ERRoR----'));
    }
  },
  {
    path: 'create',
    loadChildren: () => {
      return loadRemoteModule({
        type: "module",
        remoteEntry: MFE_APP_URL,
        exposedModule: "./RegistrationModule",
      }).then(m => m.RegistrationModule).catch(err => console.log(err));
    }
  }
];
