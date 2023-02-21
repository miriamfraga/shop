import { ManageComponent } from './pages/manage/manage.component';
import { MainComponent } from './core/main/main.component';
import { ProductComponent } from './pages/product/product.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
const routes: Routes = [
       {path: "", loadChildren: ()=>
       import("./pages/shared/shared.module").then(m=>m.SharedModule)},
       {path: "", loadChildren: ()=>
       import("./pages/manage/manage.module").then(me=>me.ManageModule)},
      // {path: "Manage", component:ManageComponent},
      {path: "Home", component: HomeComponent},
      {path: "Bonsais", component: ProductComponent},
      {path: "Gallery", component: MainComponent},
      {path: "**", component: NotfoundComponent, pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
