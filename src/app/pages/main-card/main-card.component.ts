import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'blog-main-card',
  templateUrl: './main-card.component.html',
  styleUrls: ['./main-card.component.sass']
})
export class MainCardComponent  {


  constructor(private http: HttpClient, private _snackBar: MatSnackBar) {
  }

  notYetSupported = () => {
    this._snackBar.open('This feature has yet to be implemented', null, {
      duration: 2000
    });
  };
}
