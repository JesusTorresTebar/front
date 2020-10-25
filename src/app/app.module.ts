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
import { AddUserComponent } from './components/add-user/add-user.component';
import { AddProviderComponent } from './components/add-provider/add-provider.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { AddInvoiceComponent } from './components/add-invoice/add-invoice.component';
import { HomeComponent } from './components/home/home.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    ProvidersComponent,
    ProductsComponent,
    UsersComponent,
    InvoicesComponent,
    AddUserComponent,
    AddProviderComponent,
    AddProductComponent,
    AddInvoiceComponent,
    HomeComponent
  ],
  imports: [
  
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    HttpClientModule,
    RouterModule.forRoot(
      [{path:'', redirectTo: '/home' ,pathMatch: 'full'}]
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
