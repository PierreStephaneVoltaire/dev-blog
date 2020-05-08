import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PostsFacade } from './modules/posts/+state/posts.facade';

@Component({
  selector: 'blog-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor(private http: HttpClient, private _snackBar: MatSnackBar,private readonly postsFacade: PostsFacade,) {

  }

  notYetSupported = () => {
    this._snackBar.open('This feature has yet to be implemented', null, {
      duration: 2000
    });
  };

  ngOnInit(): void {
    this.postsFacade.dispatch({ type: '[Posts] Load Posts' });

  }
}
