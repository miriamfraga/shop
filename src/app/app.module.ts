<<<<<<< HEAD
import { SharedModule } from './pages/shared/shared.module';
=======
import { ManageModule } from './pages/manage/manage.module';
import { SharedModule } from './pages/shared/shared.module';

>>>>>>> form
import { AppRoutingModule } from './app-routing.module';
import { ProductService } from './service/product.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { MainComponent } from './core/main/main.component';
import { FooterComponent } from './core/footer/footer.component';
<<<<<<< HEAD
// import { PipePipe } from './pipe/pipe.pipe';
=======

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
>>>>>>> form


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
<<<<<<< HEAD
    // PipePipe
=======
>>>>>>> form
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule,
<<<<<<< HEAD
    SharedModule
  
    
=======
    AppRoutingModule,
    SharedModule,
    ManageModule,
    ReactiveFormsModule,
    FormsModule,
>>>>>>> form
  ],
  exports: [
    // PipePipe
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
