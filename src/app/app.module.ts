import { ManageModule } from './pages/manage/manage.module';

import { SharedModule } from './pages/shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { ProductService } from './service/product.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { MainComponent } from './core/main/main.component';
import { FooterComponent } from './core/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AboutComponent } from './pages/about/about.component';
import { NavComponent } from './core/nav/nav.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { RegisterComponent } from './pages/register/register.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    AboutComponent,
    NavComponent,
    LoginComponent,
    ProfileComponent,
    LogoutComponent,
    RegisterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule,
    AppRoutingModule,
    ManageModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,

  ],
  exports: [
    SharedModule    
  ],

  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
