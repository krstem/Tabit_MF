import {loadRemoteModule} from '@angular-architects/module-federation';
import {Routes} from '@angular/router';
import {ShellComponent} from "./shell/shell.component";

const MFE_APP_URL = "http://localhost:4300/remoteEntry.js";
const MFE_APP_2_URL = "http://localhost:4400/remoteEntry.js"; // external repository
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
  // {
  //   path: 'login',
  //   loadChildren: () =>
  //     loadRemoteModule({ type: 'module', remoteEntry: MFE_APP_2_URL, exposedModule: './Login' }).then(
  //       (m) => m.LoginModule,
  //     ).catch(err => console.log(err, '----- ERRoR----')),
  // },
  {
    path: 'login',
    loadComponent: () => {
      return loadRemoteModule({
        type: "module",
        remoteEntry: MFE_APP_2_URL,
        exposedModule: "./Login",
      }).then(m => m.LoginComponent).catch(err => console.log(err, '----- ERRoR----'));
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
