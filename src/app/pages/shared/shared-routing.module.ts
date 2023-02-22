import { ProductComponent } from './../product/product.component';
import { ProductsComponent } from './../products/products.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from "@angular/core";
import { DetailComponent } from '../detail/detail.component';

const routes: Routes = [
    //  {path: "", component: NotfoundComponent},
    
    {path: "Bonsais", component: ProductComponent},
    {path: "Bonsais/:id", component: DetailComponent},
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SharedRoutingModule {}