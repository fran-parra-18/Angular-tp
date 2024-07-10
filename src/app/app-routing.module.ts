import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeersComponent } from './beers/beers.component';
import { AboutComponent } from './about/about.component';


const routes: Routes = [  
  {
    path:'',
    redirectTo:'beers',
    pathMatch:'full'
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
