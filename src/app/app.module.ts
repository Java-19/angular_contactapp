import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import {HttpClientModule} from '@angular/common/http';
import {StoreService} from './services/store.service';
import {HttpService} from './services/http.service';
import {FormsModule} from '@angular/forms';
import { ContactListComponent } from './contacts/contact-list/contact-list.component';
import { ContactViewComponent } from './contacts/contact-view/contact-view.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { MainPageComponent } from './main-page/main-page.component';
import {RouterModule, Routes} from '@angular/router';
import {ContactService} from './services/contact.service';
import {AuthGuard} from './guards/auth.guard';

const appRoutes:Routes = [
  {path:"", component:MainPageComponent},
  {path:"login",component:LoginPageComponent},
  {path:"contacts",component:ContactListComponent, canActivate:[AuthGuard], children:[
      {path:":indx",component:ContactViewComponent}
    ]}
];
@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    ContactListComponent,
    ContactViewComponent,
    TopMenuComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [StoreService,HttpService,ContactService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
