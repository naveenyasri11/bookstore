import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ContactusComponent } from './contactus/contactus.component';
import { EditproductComponent } from './editproduct/editproduct.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { SignupComponent } from './signup/signup.component';
import { registerLocaleData } from '@angular/common';
import { AddtocartComponent } from './addtocart/addtocart.component';
import { HeaderComponent } from './component/header/header.component';
import { HeadComponent } from './head/head.component';
import { LogoutComponent } from './logout/logout.component';
import { Pro1Component } from './pro1/pro1.component';
import { Pro1cartComponent } from './pro1cart/pro1cart.component';
import{AdminModule} from './admin/admin.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { Buy1Component } from './buy1/buy1.component';
import { PaymentComponent } from './payment/payment.component';
import { Pro2Component } from './pro2/pro2.component';
import { Cart2Component } from './cart2/cart2.component';
import { Pro3Component } from './pro3/pro3.component';
import { Cart3Component } from './cart3/cart3.component';
import { Pro4Component } from './pro4/pro4.component';
import { Cart4Component } from './cart4/cart4.component';
import { Pro5Component } from './pro5/pro5.component';
import { Cart5Component } from './cart5/cart5.component';
import { Pro6Component } from './pro6/pro6.component';
import { Cart6Component } from './cart6/cart6.component';
import { Pro7Component } from './pro7/pro7.component';
import { Cart7Component } from './cart7/cart7.component';
import { Pro8Component } from './pro8/pro8.component';
import { Cart8Component } from './cart8/cart8.component';
import { Pro9Component } from './pro9/pro9.component';
import { Cart9Component } from './cart9/cart9.component';
import { Pro10Component } from './pro10/pro10.component';
import { Cart10Component } from './cart10/cart10.component';
import { Pro11Component } from './pro11/pro11.component';
import { Cart11Component } from './cart11/cart11.component';
import { Pro12Component } from './pro12/pro12.component';
import { Cart12Component } from './cart12/cart12.component';
import { Pro13Component } from './pro13/pro13.component';
import { Cart13Component } from './cart13/cart13.component';
import { Pro14Component } from './pro14/pro14.component';
import { Cart14Component } from './cart14/cart14.component';
import { Pro15Component } from './pro15/pro15.component';
import { Cart15Component } from './cart15/cart15.component';
import { FpComponent } from './fp/fp.component';
import { Pro16Component } from './pro16/pro16.component';
import { Pro17Component } from './pro17/pro17.component';
import { Cart16Component } from './cart16/cart16.component';
import { Cart17Component } from './cart17/cart17.component';
import { Pro18Component } from './pro18/pro18.component';
import { Cart18Component } from './cart18/cart18.component';
import { PopupComponent } from './popup/popup.component';

const routes: Routes =[
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'app',
    component:AppComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'signup',
    component:SignupComponent
  },
  {
    path:'header',
    component:HeaderComponent
  },
  {
    path:'product',
    component:ProductComponent
   

  },
 
  {
    path:'logout',
    component:LogoutComponent
  },

  {
    path:'addtocart',
    component:AddtocartComponent
  },
  {
    path:'pro1',
    component:Pro1Component
  },
  {
    path:'pro1cart',
    component:Pro1cartComponent
  },
  { 
    path: 'product-list',
   component: ProductListComponent 
   },
  {
     path: 'product/:id', 
     component: ProductDetailsComponent
     },
     { 
        path: 'buy1',
       component:Buy1Component
       },
       {
        path:'payment',
        component:PaymentComponent
      },
      {
        path:'pro2',
        component:Pro2Component
      },
       {
        path:'cart2',
        component:Cart2Component
      },
      {
        path:'pro3',
        component:Pro3Component
      },
      {
        path:'cart3',
        component:Cart3Component
      },
      {
        path:'pro4',
        component:Pro4Component
      },
      {
        path:'cart4',
        component:Cart4Component
      },
      {
        path:'pro5',
        component:Pro5Component
      },
      {
        path:'cart5',
        component:Cart5Component
      },
      {
        path:'pro6',
        component:Pro6Component
      },
      {
        path:'cart6',
        component:Cart6Component
      },
      {
        path:'pro7',
        component:Pro7Component
      },
      {
        path:'cart7',
        component:Cart7Component
      },
      {
        path:'pro8',
        component:Pro8Component
      },
      {
        path:'cart8',
        component:Cart8Component
      },
      {
        path:'pro9',
        component:Pro9Component
      },
      {
        path:'cart9',
        component:Cart9Component
      },
      {
        path:'pro10',
        component:Pro10Component
      },
      {
        path:'cart10',
        component:Cart10Component
      },
      {
        path:'pro11',
        component:Pro11Component
      },
      {
        path:'cart11',
        component:Cart11Component
      },
      {
        path:'pro12',
        component:Pro12Component
      },
      {
        path:'cart12',
        component:Cart12Component
      },
      {
        path:'pro13',
        component:Pro13Component
      },
      {
        path:'cart13',
        component:Cart13Component
      },
      {
        path:'pro14',
        component:Pro14Component
      },
      {
        path:'cart14',
        component:Cart14Component
      },
      {
        path:'pro15',
        component:Pro15Component
      },
      {
        path:'cart15',
        component:Cart15Component
      },
      {
        path:'fp',
        component:FpComponent
      },
      {
        path:'pro16',
        component:Pro16Component
      },
      {
        path:'pro17',
        component:Pro17Component
      },
      {
        path:'cart16',
        component:Cart16Component
      },
      {
        path:'cart17',
        component:Cart17Component
      },
      {
        path:'pro18',
        component:Pro18Component
      },
      {
        path:'cart18',
        component:Cart18Component
      },
      {
        path:'popup',
        component:PopupComponent
      },
  {
    path:'**',
    component:HomeComponent
  },
 


];


@NgModule({
  imports: [RouterModule.forRoot(routes),AdminModule],
  exports: [RouterModule],
  providers:[]
})
export class AppRoutingModule { }
