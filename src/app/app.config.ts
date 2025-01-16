import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { HttpClientModule,provideHttpClient,withFetch } from '@angular/common/http';
import { DashboardService } from './core/services/dashboard.service';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';


export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true })
    , provideRouter(routes)
    , provideClientHydration(withEventReplay()),
  DashboardService,importProvidersFrom(HttpClientModule)
,provideHttpClient(withFetch()), provideAnimationsAsync()]
};
