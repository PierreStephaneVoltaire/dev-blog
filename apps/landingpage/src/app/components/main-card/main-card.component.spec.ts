import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCardComponent } from './main-card.component';
import { MatCardModule } from '@angular/material/card';
import { PostsComponent } from '../../modules/posts/posts.component';
import { BrowserModule } from '@angular/platform-browser';
import { SearchbarModule } from '../../modules/searchbar/searchbar.module';
import { MatInputModule } from '@angular/material/input';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MarkdownModule } from 'ngx-markdown';
import { RoutingModule } from '../../modules/routing/routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { PostDetailsComponent } from '../../modules/posts/post-details/post-details.component';
import { MatChipsModule } from '@angular/material/chips';
import { MatRippleModule } from '@angular/material/core';
import { APP_BASE_HREF } from '@angular/common';
import { PostsFacade } from '../../modules/posts/+state/posts.facade';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromPosts from '../../modules/posts/+state/posts.reducer';
import { PostsEffects } from '../../modules/posts/+state/posts.effects';

describe('MainCardComponent', () => {
  let component: MainCardComponent;
  let fixture: ComponentFixture<MainCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MainCardComponent,PostsComponent,PostDetailsComponent],
      imports: [MatCardModule, BrowserModule,
        SearchbarModule,
        SearchbarModule,
        MatInputModule,
        HttpClientModule,
        MatButtonModule,
        MarkdownModule.forRoot({ loader: HttpClient }),
        RoutingModule,
        StoreModule.forRoot({}),
        EffectsModule.forRoot([]),

        StoreModule.forFeature(fromPosts.POSTS_FEATURE_KEY, fromPosts.reducer),
        EffectsModule.forFeature([PostsEffects]),

        BrowserAnimationsModule,
        SearchbarModule,
        MatGridListModule,
        MatMenuModule,
        MatSnackBarModule,
        MatIconModule,
        MatFormFieldModule,
        MatChipsModule,
        MatRippleModule
     ],
      providers:[{provide: APP_BASE_HREF, useValue : '/' },PostsFacade],

    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
