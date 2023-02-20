import { ProductsComponent } from './../products/products.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from "@angular/core";


const routes: Routes = [
    //  {path: "", component: NotfoundComponent},
     {path: "Products", component: ProductsComponent},
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SharedRoutingModule {}