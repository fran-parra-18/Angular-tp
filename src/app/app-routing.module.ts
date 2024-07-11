import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeersComponent } from './beers/beers.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [  
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full',
  },
  {
    path:'home', 
    component:HomeComponent,
  },
  {
    path:'beers',
    component:BeersComponent,
  },
  {
    path:'about',
    component:AboutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
