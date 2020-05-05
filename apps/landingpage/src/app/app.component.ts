import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '@pvoltaire/api-interfaces';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'blog-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  hello$ = this.http.get<Message>('/api/hello');

  constructor(private http: HttpClient, private _snackBar: MatSnackBar) {
  }

  notYetSupported = () => {
    this._snackBar.open('This feature has yet to be implemented', null, {
      duration: 2000
    });
  };
}
