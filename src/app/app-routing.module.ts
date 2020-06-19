import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MPForumComponent} from './components/mp-forum/mp-forum.component';
import {MPForumDetailsComponent} from './components/mp-forum-details/mp-forum-details.component';


const routes: Routes = [
  {
    path: '',
    component: MPForumComponent
  },
  {
    path: 'posts/:id',
    component: MPForumDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
