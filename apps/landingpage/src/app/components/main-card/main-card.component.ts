import { Component, OnInit } from '@angular/core';
import { Message } from '@pvoltaire/api-interfaces';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'blog-main-card',
  templateUrl: './main-card.component.html',
  styleUrls: ['./main-card.component.scss']
})
export class MainCardComponent  {

  hello$ = this.http.get<Message>('/api/hello');

  constructor(private http: HttpClient, private _snackBar: MatSnackBar) {
  }

  notYetSupported = () => {
    this._snackBar.open('This feature has yet to be implemented', null, {
      duration: 2000
    });
  };
}
