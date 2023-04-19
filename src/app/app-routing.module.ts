import { AboutComponent } from './pages/about/about.component';
import { ProductsComponent } from './pages/products/products.component';
import { MainComponent } from './core/main/main.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
       {path: "", loadChildren: ()=>
       import("./pages/shared/shared.module").then(m=>m.SharedModule)},
      {path: "", loadChildren: ()=>
       import("./pages/manage/manage.module").then(me=>me.ManageModule)},
      {path: "Home", component: HomeComponent},
      {path: "Gallery", component: MainComponent},
      {path: "Products", component: ProductsComponent },
      {path: "Login", component: LoginComponent},
      {path: "About", component: AboutComponent},
      // {path: "Logout", component: LogoutComponent},
      // {path: "Profile", component: ProfileComponent},
      // {path: "Register", component: RegisterComponent},

      {path: "**", component: NotfoundComponent, pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
