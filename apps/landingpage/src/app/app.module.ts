import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PostsComponent } from './components/posts/posts.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchbarModule } from './modules/searchbar/searchbar.module';
import { MainCardComponent } from './components/main-card/main-card.component';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {ToolbarComponent} from './components/toolbar/toolbar.component';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [AppComponent, PostsComponent, MainCardComponent,ToolbarComponent],
  imports: [BrowserModule, MatInputModule, HttpClientModule, MatButtonModule, BrowserAnimationsModule, SearchbarModule, MatGridListModule, MatMenuModule, MatIconModule, MatFormFieldModule, MatCardModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]

})
export class AppModule {}
