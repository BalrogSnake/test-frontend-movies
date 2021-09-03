import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layout/default/default.component';
import { DetailComponent } from './modules/detail/detail.component';
import { HomeComponent } from './modules/home/home.component';

const routes: Routes = [
  {
    path:'',
    component: DefaultComponent,
    children: [
      {
        path:'home',
        component: HomeComponent,
      },
      {
        path: 'detail',
        component: DetailComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
