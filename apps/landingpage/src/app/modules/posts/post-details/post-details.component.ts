import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostsFacade } from '../+state/posts.facade';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PostsEntity } from '../+state/posts.models';
import { SelectPost } from '../+state/posts.actions';

@Component({
  selector: 'blog-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent {
  constructor(private readonly postsFacade: PostsFacade,
              private router:Router,
              private route: ActivatedRoute)


  {
    this.route.queryParams.subscribe(params => {
      const id = params['id'];
      this.postsFacade.selectedPosts$.subscribe((post)=>{
        if(!post||id!==post.id){
          this.postsFacade.dispatch(SelectPost({ selectedId: id }));
        }
      this.post$ = this.postsFacade.selectedPosts$

    })
      {

      }
    })
  }
  post$: Observable<PostsEntity>;
  Type= {
    "text":"text",
    "md":"md"
  }


}
