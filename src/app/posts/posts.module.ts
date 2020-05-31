import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts.component';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { MatChipsModule } from '@angular/material/chips';
import { MatRippleModule } from '@angular/material/core';
import { PostDetailsComponent } from './post-details/post-details.component';
import { MarkdownModule } from 'ngx-markdown';
import * as fromPosts from './+state/posts.reducer';
import { PostsEffects } from './+state/posts.effects';
import { PostsFacade } from './+state/posts.facade';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [PostsComponent, PostDetailsComponent],
  imports: [
    CommonModule,
    MatInputModule,
    HttpClientModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatMenuModule,
    MatIconModule,
    MatFormFieldModule,
    MatCardModule,
    StoreModule.forFeature(fromPosts.postsFeatureKey, fromPosts.reducer),
    EffectsModule.forFeature([PostsEffects]),
    MatChipsModule,
    MatRippleModule,
    MarkdownModule,
    StoreModule.forFeature(fromPosts.postsFeatureKey, fromPosts.reducer),
    RouterModule
  ],
  exports: [
    PostsComponent
  ],
  providers: [PostsFacade]
})
export class PostsModule {
}
