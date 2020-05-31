import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { MainCardComponent } from './pages/main-card/main-card.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchbarModule } from './searchbar/searchbar.module';
import { MatButtonModule } from '@angular/material/button';
import { MarkdownModule } from 'ngx-markdown';
import { PostsModule } from './posts/posts.module';
import { RoutingModule } from './routing/routing.module';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { EffectsModule } from '@ngrx/effects';
import { environment } from '../environments/environment';
import { ActionReducer, MetaReducer, StoreModule } from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';
import { AmplifyUIAngularModule } from '@aws-amplify/ui-angular';

export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({ keys: ['posts'] })(reducer);
}

const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];

@NgModule({
  declarations: [
    AppComponent,
    ErrorPageComponent,
    MainCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserModule,
    RoutingModule,
    SearchbarModule,
    PostsModule,
    AmplifyUIAngularModule,
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
      maxAge: 25 // Retains last 25 states
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
  bootstrap: [AppComponent]
})
export class AppModule {
}
