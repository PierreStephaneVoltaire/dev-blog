import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import {PostsFacade} from "./posts/+state/posts.facade";

@Component({
  selector: 'blog-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit{
  innerWidth: number;

  constructor(private http: HttpClient, private _snackBar: MatSnackBar,private readonly postsFacade: PostsFacade,) {
    this.innerWidth = window.innerWidth;

  }
  onResize(event) {
    this.innerWidth=event.target.innerWidth;
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
