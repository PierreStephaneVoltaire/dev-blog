import { async, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { ActionReducer, MetaReducer, StoreModule } from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { MainCardComponent } from './pages/main-card/main-card.component';
import { BrowserModule } from '@angular/platform-browser';
import { RoutingModule } from './routing/routing.module';
import { SearchbarModule } from './searchbar/searchbar.module';
import { PostsModule } from './posts/posts.module';
import { MarkdownModule } from 'ngx-markdown';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { environment } from '../environments/environment';
export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({ keys: ['posts'] })(reducer);
}

const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ErrorPageComponent,
        MainCardComponent
      ],
      imports: [
        RouterTestingModule,
        BrowserModule,
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
    })
      .compileComponents();
  }));
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });



});
