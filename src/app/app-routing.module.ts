import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoveiListComponent } from './components/movei-list/movei-list.component';

const routes: Routes = [
  {
    path: "movei-list",
    component: MoveiListComponent
  },
  {
    path: "**",
    redirectTo: "movei-list"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
