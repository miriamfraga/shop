import { ProductsComponent } from './../products/products.component';
import { NotfoundComponent } from './../notfound/notfound.component';
import { ManageComponent } from './../manage/manage.component';
import { HomeComponent } from './../home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from "@angular/core";


const routes: Routes = [
    {path: "home", component: HomeComponent},
    {path: "gestion", component: ManageComponent},
    {path: "notFound", component: NotfoundComponent},
    {path: "products", component: ProductsComponent}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SharedRoutingModule {}