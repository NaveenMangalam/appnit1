import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { ProductComponent } from './product/product.component';


const routes: Routes = [
  
  {
    component: ListComponent,
    path:"list"
  },
  {
    component: ProductComponent,
    path:"product/:id"
  },
  {
    path:'', 
    redirectTo:'list',
    pathMatch:'full',
   
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
