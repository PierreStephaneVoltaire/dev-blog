import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCardComponent } from './post-card.component';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import * as fromPosts from '../../+state/posts.reducer';
import { EffectsModule } from '@ngrx/effects';
import { PostsEffects } from '../../+state/posts.effects';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatRippleModule } from '@angular/material/core';
import { PostsFacade } from '../../+state/posts.facade';

describe('PostCardComponent', () => {
  let component: PostCardComponent;
  let fixture: ComponentFixture<PostCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PostCardComponent],
      imports:[
      MatInputModule,
      HttpClientModule,
        StoreModule.forRoot({}),
        EffectsModule.forRoot([]),

        StoreModule.forFeature(fromPosts.POSTS_FEATURE_KEY, fromPosts.reducer),
      EffectsModule.forFeature([PostsEffects]),
      MatButtonModule,
      MatGridListModule,
      MatMenuModule,
      MatIconModule,
      MatFormFieldModule,
      MatCardModule,
      MatChipsModule,
      MatRippleModule],
    providers: [PostsFacade]

  })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
