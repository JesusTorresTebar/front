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
import { IndividualCustomerComponent } from './components/individual-customer/individual-customer.component';
import { IndividualProviderComponent } from './components/individual-provider/individual-provider.component';
import { CreateInvoiceSelectionComponent } from './components/create-invoice-selection/create-invoice-selection.component';
import { CustomerInvoice } from './models/customerInvoice';
import { ProviderInvoice } from './models/providerInvoice';
import { AddCustomerInvoiceComponent } from './components/add-customer-invoice/add-customer-invoice.component';
import { AddProviderInvoiceComponent } from './components/add-provider-invoice/add-provider-invoice.component';
import { IndividualCustomerInvoiceComponent } from './components/individual-customer-invoice/individual-customer-invoice.component';
import { IndividualProviderInvoiceComponent } from './components/individual-provider-invoice/individual-provider-invoice.component';

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
  {path:'individual-customer/:id',component:IndividualCustomerComponent},
  {path:'individual-provider/:id',component:IndividualProviderComponent},
  {path:'customers',component:CustomerComponent},
  {path:'create-invoice-selection',component:CreateInvoiceSelectionComponent},
  {path:'customer-invoice', component:AddCustomerInvoiceComponent},
  {path:'provider-invoice', component:AddProviderInvoiceComponent},
  {path: 'individual-customer-invoice/:id', component:IndividualCustomerInvoiceComponent},
  {path: 'individual-provider-invoice/:id', component:IndividualProviderInvoiceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
