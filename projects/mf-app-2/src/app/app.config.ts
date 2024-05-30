import {ApplicationConfig, importProvidersFrom, isDevMode, provideZoneChangeDetection} from '@angular/core';
import {provideRouter} from '@angular/router';

import {provideClientHydration} from '@angular/platform-browser';
import {provideStore} from "@ngrx/store";
import {provideStoreDevtools} from "@ngrx/store-devtools";
import {provideEffects} from "@ngrx/effects";
import {provideHttpClient, withFetch} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {routes} from "./app.routes";
import {CreateProductEffects} from "./store/create.product.effects";
import {appReducer, metaReducers} from "../../../host-app/src/store/app.reducers";

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection(
    {eventCoalescing: true}),
    provideRouter(routes),
    provideHttpClient(withFetch()),
    provideClientHydration(),
    provideStore(appReducer,{metaReducers: metaReducers}),
    provideEffects([CreateProductEffects]),
    provideStoreDevtools({
      maxAge: 25, // Retains last 25 states
      logOnly: !isDevMode() // Restrict extension to log-only mode
    }),
    importProvidersFrom([BrowserAnimationsModule]),

  ]
};
