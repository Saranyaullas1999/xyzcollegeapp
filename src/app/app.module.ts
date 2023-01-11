import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { RouterModule,Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { ViewallstudentComponent } from './viewallstudent/viewallstudent.component';
import { AddfacultyComponent } from './addfaculty/addfaculty.component';
import { ViewallfacultyComponent } from './viewallfaculty/viewallfaculty.component';
import {HttpClientModule} from '@angular/common/http';
import { SearchstudentComponent } from './searchstudent/searchstudent.component';
import { SearchfacultyComponent } from './searchfaculty/searchfaculty.component'

const appRoutes:Routes=[
  {
    path:"",component:AdminloginComponent
  },
  {
    path:"nav",component:NavbarComponent
  },
  {
    path:"add",component:AddstudentComponent
  },
  {
    path:"search",component:SearchstudentComponent
  },
  {
    path:"view",component:ViewallstudentComponent
  },
  {
    path:"addfac",component:AddfacultyComponent
  },
  {
    path:"viewfac",component:ViewallfacultyComponent
  },
  {
    path:"searchfac",component:SearchfacultyComponent
  }
  
]
@NgModule({
  declarations: [
    AppComponent,
    AdminloginComponent,
    NavbarComponent,
    AddstudentComponent,
    ViewallstudentComponent,
    AddfacultyComponent,
    ViewallfacultyComponent,
    SearchstudentComponent,
    SearchfacultyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
