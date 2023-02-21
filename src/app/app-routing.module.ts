import { NotfoundComponent } from './pages/notfound/notfound.component';
import { ManageComponent } from './pages/manage/manage.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './pages/products/products.component';

const routes: Routes = [
  {path: "home", component: HomeComponent, title: "BONSAI • Home"},
  {path: "Products", component: ProductsComponent, title: "BONSAI • Shop"},
  {path: "Manage", component: ManageComponent, title: "BONSAI • Manage"},
  {path: "**", component: NotfoundComponent, pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
