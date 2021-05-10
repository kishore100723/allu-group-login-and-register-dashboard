import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Homecomponent } from "./home.component";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from './account/login/login.component';
import { RegisterComponent } from './account/register/register.component';
import { NotFoundComponent } from './not-found.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AccountModule } from './account/account.module';


const routes:Routes =[
  {
  path:"", 
  component:LoginComponent,
},
{
  path:"Register", 
  component:RegisterComponent,
},
{
  path:"Home", 
  component:Homecomponent,
  children:[
    {
    path:"",
    loadChildren: ()=> import("./dashboard/dashboard.module").then(u=> u.DashboardModule),
  },
  {
    path:"todo",
    loadChildren: ()=> import("./todo/todo.module").then(u=> u.TodoModule),
  },
]
},
{
  path: "**",
  component: NotFoundComponent,
},
];


@NgModule({
  declarations: [AppComponent, Homecomponent,NotFoundComponent],
  imports: [BrowserModule,AppRoutingModule, RouterModule.forRoot(routes), NgbModule, AccountModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
 