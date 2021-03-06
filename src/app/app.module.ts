import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProvidersComponent } from './components/providers/providers.component';
import { ProductsComponent } from './components/products/products.component';
import { UsersComponent } from './components/users/users.component';
import { LayoutModule } from './layout/layout.module';
import { InvoicesComponent } from './components/invoices/invoices.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatPaginatorModule} from '@angular/material/paginator';
import { AddProviderComponent } from './components/add-provider/add-provider.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { AddInvoiceComponent } from './components/add-invoice/add-invoice.component';
import { HomeComponent } from './components/home/home.component';
import { RouterModule } from '@angular/router';
import { IndividualProductComponent } from './components/individual-product/individual-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerComponent } from './components/customer/customer.component';
import { AddCustomerComponent } from './components/add-customer/add-customer.component';
import { IndividualProviderComponent } from './components/individual-provider/individual-provider.component';
import { IndividualCustomerComponent } from './components/individual-customer/individual-customer.component';
import { AddProviderInvoiceComponent } from './components/add-provider-invoice/add-provider-invoice.component';
import { AddCustomerInvoiceComponent } from './components/add-customer-invoice/add-customer-invoice.component';
import { CreateInvoiceSelectionComponent } from './components/create-invoice-selection/create-invoice-selection.component';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';

import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { IndividualCustomerInvoiceComponent } from './components/individual-customer-invoice/individual-customer-invoice.component';
import { IndividualProviderInvoiceComponent } from './components/individual-provider-invoice/individual-provider-invoice.component';
import {MatTabsModule} from '@angular/material/tabs';
import { StoragesComponent } from './components/storages/storages.component';
import { ZonesComponent } from './components/zones/zones.component';
@NgModule({
  declarations: [
    AppComponent,
    ProvidersComponent,
    ProductsComponent,
    UsersComponent,
    InvoicesComponent,
    AddCustomerComponent,
    AddProviderComponent,
    AddProductComponent,
    AddInvoiceComponent,
    HomeComponent,
    IndividualProductComponent,
    CustomerComponent,
    IndividualProviderComponent,
    IndividualCustomerComponent,
    AddProviderInvoiceComponent,
    AddCustomerInvoiceComponent,
    CreateInvoiceSelectionComponent,
    IndividualCustomerInvoiceComponent,
    IndividualProviderInvoiceComponent,
    StoragesComponent,
    ZonesComponent
    
    
    
  ],
  imports: [
    MatTabsModule,
    MatSelectModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDialogModule,
    MatButtonModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatInputModule,
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    HttpClientModule,
    FormsModule,
    
    RouterModule.forRoot(
      [{path:'', redirectTo: '/home' ,pathMatch: 'full'}]
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
