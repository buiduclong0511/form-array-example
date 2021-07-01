import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductComponent } from "./product.component";


const productRoutes: Routes = [
    {
      path: "product",
      component: ProductComponent,
      children: [
          {
              path: "",
              component: ProductListComponent
          },
          {
              path: ":id",
              component: ProductDetailComponent
          },
      ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(productRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class ProductRoutingModule { }