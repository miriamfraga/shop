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
import { PipePipe } from './pipe/pipe.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    PipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule,
    SharedModule
  
    
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
