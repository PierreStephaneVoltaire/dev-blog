import { Component, OnInit } from '@angular/core';
import { PostsFacade } from './+state/posts.facade';
import { Observable } from 'rxjs';
import { PostsEntity } from './+state/posts.models';
import { map } from 'rxjs/operators';
import { SelectPost } from './+state/posts.actions';

@Component({
  selector: 'blog-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  $postList: Observable<PostsEntity[]>;
  $loaded: Observable<boolean>;
  currentPage = 0;
  pageSize = 6;
  myColor = '#3f51b5';

  constructor(private readonly postsFacade: PostsFacade) {

  }

  click = (id: string) => {
    this.postsFacade.dispatch(SelectPost({ selectedId: id }));
    this.postsFacade.selectedPosts$.subscribe((postid => {
      console.log(postid);
    }));

  };

  ngOnInit(): void {
    this.postsFacade.dispatch({ type: '[Posts] Load Posts' });


    this.$loaded = this.postsFacade.loaded$;
    this.$postList = this.postsFacade.allPosts$.pipe(map((posts) => {
      return posts.slice(this.currentPage, this.pageSize);
    }));
  }

}
