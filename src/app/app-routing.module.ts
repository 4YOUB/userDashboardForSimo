import { NgModule } from '@angular/core';
import {  RouterModule, Routes } from '@angular/router';
import { CommandesComponent } from './pages/commandes/commandes.component';
import { ProfileComponent } from './pages/profile/profile.component';

const routes: Routes = [
  {
    path:'',redirectTo : '/profile' ,pathMatch:"full"
  },
  {
    path:'profile',component: ProfileComponent
  },
  {
    path:'commandes',component: CommandesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
