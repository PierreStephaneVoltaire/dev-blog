import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostsFacade } from '../+state/posts.facade';
import { Observable, Subscription } from 'rxjs';
import { flatMap, map } from 'rxjs/operators';
import { PostsEntity } from '../+state/posts.models';
import { SelectPost } from '../+state/posts.actions';

@Component({
  selector: 'blog-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit,OnDestroy{
  constructor(private readonly postsFacade: PostsFacade,
              private router:Router,
              private route: ActivatedRoute)


  {

  }
  subs:Subscription;
  post$: Observable<PostsEntity>;
  currRoute:number|string
  Type= {
    "text":"text",
    "md":"md"
  }

  ngOnInit(): void {
   this.subs= this.route.queryParams.pipe(flatMap(curRoute=>{
      this.currRoute=curRoute['id']
      return this.postsFacade.selectedPosts$
    })).subscribe(post=>{
      if(!this.currRoute){
        //go to 404
      }
           if(!post||this.currRoute!==post.id){
             this.postsFacade.dispatch(SelectPost({ selectedId: this.currRoute }));
           }
      this.post$ = this.postsFacade.selectedPosts$
    })
  }

  ngOnDestroy(): void {
this.subs.unsubscribe()
  }


}
