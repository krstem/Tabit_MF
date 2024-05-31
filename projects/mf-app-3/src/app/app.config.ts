import {ApplicationConfig, importProvidersFrom, isDevMode, provideZoneChangeDetection} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {provideClientHydration} from '@angular/platform-browser';
import {provideHttpClient, withFetch} from "@angular/common/http";
import {provideStore} from "@ngrx/store";
import {appReducer, metaReducers} from "../../../host-app/src/store/app.reducers";
import {provideEffects} from "@ngrx/effects";
import {AuthEffects} from "./store/auth.effects";
import {provideStoreDevtools} from "@ngrx/store-devtools";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection(
    {eventCoalescing: true}),
    provideRouter(routes),
    provideHttpClient(withFetch()),
    provideClientHydration(),
    provideStore(appReducer, {metaReducers}),
    provideEffects([AuthEffects]),
    provideStoreDevtools({
      maxAge: 25, // Retains last 25 states
      logOnly: !isDevMode() // Restrict extension to log-only mode
    }),
    importProvidersFrom([BrowserAnimationsModule]),

  ]
};
