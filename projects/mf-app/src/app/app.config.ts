import {ApplicationConfig, isDevMode, provideZoneChangeDetection} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {provideClientHydration} from '@angular/platform-browser';
import {provideStore} from "@ngrx/store";
import {provideStoreDevtools} from "@ngrx/store-devtools";
import {provideEffects} from "@ngrx/effects";
import {appReducer, metaReducers} from "../../../host-app/src/store/app.reducers";
import {Effects} from "../../../host-app/src/store/app.effects";
import {provideHttpClient, withFetch} from "@angular/common/http";

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection(
    {eventCoalescing: true}),
    provideRouter(routes),
    provideHttpClient(withFetch()),
    provideClientHydration(),
    provideStore(appReducer,{metaReducers: metaReducers}),
    provideEffects(Effects), // use all effects for demonstration of store between components
    provideStoreDevtools({
      maxAge: 25, // Retains last 25 states
      logOnly: !isDevMode() // Restrict an extension to log-only mode
    }),
  ]
};
