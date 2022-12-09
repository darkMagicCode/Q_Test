import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './product/home/home.component';
import { HeaderComponent } from './product/header/header.component';

const children: Routes = [
{path:'' , component:HomeComponent},
  { path: 'home', component: HomeComponent },


];
const routes: Routes = [
  {
    path: '',
    component: HeaderComponent,
    children
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
