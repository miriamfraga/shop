import { ProductComponent } from './pages/product/product.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { ManageComponent } from './pages/manage/manage.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './pages/products/products.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {path: "", loadChildren: ()=>
   import("./pages/shared/shared.module").then(m=>m.SharedModule)},
  
  
     {path: "home", component: HomeComponent},
  //  {path: "Products", component: ProductsComponent},
      {path: "Product", component: ProductComponent},
  //  {path: "Manage", component: ManageComponent},
   {path: "**", component: NotfoundComponent, pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
