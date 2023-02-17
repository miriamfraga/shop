import { ProductComponent } from './../product/product.component';
import { ProductsComponent } from './../products/products.component';
import { NotfoundComponent } from './../notfound/notfound.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from "@angular/core";
import { HomeComponent } from '../home/home.component';


const routes: Routes = [
    //  {path: "home", component: HomeComponent},
    //  {path: "", component: NotfoundComponent},
     {path: "Products", component: ProductsComponent},
    //  {path: "", component: ProductComponent}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SharedRoutingModule {}