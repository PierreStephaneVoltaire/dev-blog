import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchbarModule } from './modules/searchbar/searchbar.module';
import { MainCardComponent } from './components/main-card/main-card.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { ActionReducer, MetaReducer, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { PostsModule } from './modules/posts/posts.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RoutingModule } from './modules/routing/routing.module';
import { localStorageSync } from 'ngrx-store-localstorage';
import { MarkdownModule } from 'ngx-markdown';
import { ErrorPageComponent } from './components/error-page/error-page.component';
export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({keys: ['posts']})(reducer);
}
const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];

@NgModule({
  declarations: [
    AppComponent,
    MainCardComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    SearchbarModule,
    PostsModule,
    MarkdownModule.forRoot({ loader: HttpClient }),
    SearchbarModule,
    MatInputModule,
    HttpClientModule,
    MatButtonModule,
    BrowserAnimationsModule,
    SearchbarModule,
    MatGridListModule,
    MatMenuModule,
    MatSnackBarModule,
    MatIconModule,
    MatFormFieldModule,
    MatCardModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
    }),
    StoreModule.forRoot(
      {},
      {
        metaReducers,
        runtimeChecks: {
          strictActionImmutability: true,
          strictStateImmutability: true
        }
      }
    ),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}
