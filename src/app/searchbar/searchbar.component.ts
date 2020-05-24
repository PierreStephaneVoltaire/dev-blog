import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'blog-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.sass']
})
export class SearchBarComponent implements OnInit {

  @Input() wSize: number;

  constructor() {
  }

  ngOnInit(): void {
  }

  goToSignUpPage() {

  }
}
