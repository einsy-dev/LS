import {
  ApplicationConfig,
  provideZoneChangeDetection,
  isDevMode,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from '@router';
import { provideHttpClient } from '@angular/common/http';
import { graphqlProvider } from '@graphql';
import { provideStore } from '@ngrx/store';

import { appStore } from '@store';
import { provideStoreDevtools } from '@ngrx/store-devtools';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    graphqlProvider,
    provideStore(appStore),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
  ],
};
