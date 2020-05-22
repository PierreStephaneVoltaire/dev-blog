import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostDetailsComponent } from './post-details.component';
import { MatCardModule } from '@angular/material/card';
import { MarkdownModule } from 'ngx-markdown';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PostsComponent } from '../posts.component';
import { MatChipsModule } from '@angular/material/chips';
import { MatRippleModule } from '@angular/material/core';
import { PostsFacade } from '../+state/posts.facade';
import { BrowserModule } from '@angular/platform-browser';
import { SearchbarModule } from '../../searchbar/searchbar.module';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { RoutingModule } from '../../routing/routing.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromPosts from '../+state/posts.reducer';
import { PostsEffects } from '../+state/posts.effects';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { APP_BASE_HREF } from '@angular/common';
import { MainCardComponent } from '../../pages/main-card/main-card.component';

describe('PostDetailsComponent', () => {
  let component: PostDetailsComponent;
  let fixture: ComponentFixture<PostDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PostDetailsComponent, MainCardComponent, PostsComponent
      ],
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

        StoreModule.forFeature(fromPosts.postsFeatureKey, fromPosts.reducer),
        EffectsModule.forFeature([PostsEffects]),

        BrowserAnimationsModule,
        SearchbarModule,
        MatGridListModule,
        MatMenuModule,
        MatSnackBarModule,
        MatIconModule,
        MatFormFieldModule,
        MatChipsModule,
        MatRippleModule],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }, PostsFacade]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
