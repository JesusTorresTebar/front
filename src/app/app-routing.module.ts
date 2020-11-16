import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { ProvidersComponent } from './components/providers/providers.component';
import { UsersComponent } from './components/users/users.component';
import { InvoicesComponent } from './components/invoices/invoices.component';
import { AddInvoiceComponent} from './components/add-invoice/add-invoice.component';

import { AddProviderComponent} from './components/add-provider/add-provider.component';
import { AddProductComponent} from './components/add-product/add-product.component';
import { HomeComponent } from './components/home/home.component';
import { IndividualProductComponent } from './components/individual-product/individual-product.component';
import { CustomerComponent } from './components/customer/customer.component';
import { AddCustomerComponent } from './components/add-customer/add-customer.component';

const routes: Routes = [
  {path:'products',component:ProductsComponent},
  {path:'providers',component:ProvidersComponent},
  {path:'users', component:UsersComponent},
  {path:'invoices', component:InvoicesComponent},
  {path:'add-invoice', component:AddInvoiceComponent},
  {path:'add-customer', component:AddCustomerComponent},
  {path:'add-provider', component:AddProviderComponent},
  {path:'add-product', component:AddProductComponent},
  {path:'home',component:HomeComponent},
  {path:'individual-product/:id',component:IndividualProductComponent},
  {path:'customers',component:CustomerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
