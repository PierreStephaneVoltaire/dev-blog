import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { SearchbarModule } from './modules/searchbar/searchbar.module';
import { PostsModule } from './modules/posts/posts.module';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { StoreModule } from '@ngrx/store';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
      imports: [
        BrowserModule,
        SearchbarModule,
        PostsModule,
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
        StoreModule.forRoot(
          {},
          {
            metaReducers: !environment.production ? [] : [],
            runtimeChecks: {
              strictActionImmutability: true,
              strictStateImmutability: true
            }
          }
        ),
        EffectsModule.forRoot([]),
        !environment.production ? StoreDevtoolsModule.instrument() : []]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
