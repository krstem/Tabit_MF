import {ApplicationConfig, isDevMode, provideZoneChangeDetection} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {provideClientHydration} from '@angular/platform-browser';
import {provideStore} from "@ngrx/store";
import {provideStoreDevtools} from "@ngrx/store-devtools";
import {provideEffects} from "@ngrx/effects";

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection(
    {eventCoalescing: true}),
    provideRouter(routes),
    provideClientHydration(),
    provideStore(),
    provideEffects(),
    provideStoreDevtools({
      maxAge: 25, // Retains last 25 states
      logOnly: isDevMode() // Restrict extension to log-only mode (currently only DEV, then !isDevMode())
    }),
  ]
};
