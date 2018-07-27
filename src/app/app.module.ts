import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import {HttpClientModule} from '@angular/common/http';
import {StoreService} from './services/store.service';
import {HttpService} from './services/http.service';
import {FormsModule} from '@angular/forms';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { MainPageComponent } from './main-page/main-page.component';
import {RouterModule, Routes} from '@angular/router';
import {ContactsModule} from './contacts/contact.module';
import {AuthGuard} from './guards/auth.guard';

const appRoutes:Routes = [
  {path:'', component:MainPageComponent},
  {path:'login',component:LoginPageComponent},
  {path:'contacts',loadChildren:'./contacts/contact.module#ContactsModule'}
];
@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    TopMenuComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    ContactsModule
  ],
  providers: [StoreService,HttpService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
