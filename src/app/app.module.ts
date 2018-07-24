import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import {HttpClientModule} from '@angular/common/http';
import {StoreService} from './services/store.service';
import {HttpService} from './services/http.service';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [StoreService,HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
