import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainCardComponent } from '../../components/main-card/main-card.component';
import { PostDetailsComponent } from '../posts/post-details/post-details.component';



const routes: Routes = [
  { path: '', component: MainCardComponent },
  { path: 'post', component: PostDetailsComponent },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
