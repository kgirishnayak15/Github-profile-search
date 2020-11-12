import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserviewComponent } from './userview/userview.component';
import{HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import{TokenService} from "./token.service"






@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserviewComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
        ],
        providers: [
          {
            provide: HTTP_INTERCEPTORS,
            useClass: TokenService,
            multi: true
          }],
  bootstrap: [AppComponent]
})
export class AppModule { }
