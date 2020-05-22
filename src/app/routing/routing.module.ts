import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostDetailsComponent } from '../posts/post-details/post-details.component';
import { MainCardComponent } from '../pages/main-card/main-card.component';


const routes: Routes = [
  { path: '', component: MainCardComponent },
  { path: 'post', component: PostDetailsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule {
}
