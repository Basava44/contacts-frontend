import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LadingPageComponent } from './lading-page/lading-page.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import {
  HTTP_INTERCEPTORS,
  HttpClient,
  HttpClientModule,
} from '@angular/common/http';
import { HttpInterceptorService } from './http-interceptor.service';
import { AddContactComponent } from './add-contact/add-contact.component';
import { LoaderComponent } from './loader/loader.component';
import { loggedUserDetails } from './store-utilities/user.state';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { EditContactComponent } from './edit-contact/edit-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    LadingPageComponent,
    SignupComponent,
    DashboardComponent,
    LoginComponent,
    NavbarComponent,
    AddContactComponent,
    LoaderComponent,
    EditContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxsModule.forRoot([loggedUserDetails]),
    NgxsReduxDevtoolsPluginModule.forRoot(),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
