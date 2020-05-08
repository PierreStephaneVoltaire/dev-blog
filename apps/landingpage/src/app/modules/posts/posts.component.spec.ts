import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsComponent } from './posts.component';
import { MatInputModule } from '@angular/material/input';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';

import { MatChipsModule } from '@angular/material/chips';
import { MatRippleModule } from '@angular/material/core';
import { PostsFacade } from './+state/posts.facade';
import { StoreModule } from '@ngrx/store';
import * as fromPosts from './+state/posts.reducer';
import { EffectsModule } from '@ngrx/effects';
import { PostsEffects } from './+state/posts.effects';
import { MarkdownModule } from 'ngx-markdown';
import { RoutingModule } from '../routing/routing.module';
import { MainCardComponent } from '../../components/main-card/main-card.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { APP_BASE_HREF } from '@angular/common';

describe('PostsComponent', () => {
  let component: PostsComponent;
  let fixture: ComponentFixture<PostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PostsComponent,PostDetailsComponent,    MainCardComponent
      ], imports: [
        MatInputModule,
        HttpClientModule,
        StoreModule.forRoot({}),
        EffectsModule.forRoot([]),

        StoreModule.forFeature(fromPosts.POSTS_FEATURE_KEY, fromPosts.reducer),
        EffectsModule.forFeature([PostsEffects]),
        MatButtonModule,
        MatGridListModule,
        MatMenuModule,
        MarkdownModule.forRoot({ loader: HttpClient }),
        RoutingModule,

        MatIconModule,
        MatFormFieldModule,
        MatCardModule,
        MatChipsModule,
        MatRippleModule],
      providers:[{provide: APP_BASE_HREF, useValue : '/' },PostsFacade],

    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
