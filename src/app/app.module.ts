import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PremiereHomeComponent } from './widgets/components/home/premiere-home/premiere-home.component';
import { DefaultComponent } from './layout/default/default.component';
import { LoginComponent } from './modules/login/login.component';
import { HomeComponent } from './modules/home/home.component';
import { DetailComponent } from './modules/detail/detail.component';
import { FormLoginComponent } from './widgets/components/login/form-login/form-login.component';
import { ListHomeComponent } from './widgets/components/home/list-home/list-home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { PanelDetailComponent } from './widgets/components/detail/panel/panel-detail/panel-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    PremiereHomeComponent,
    DefaultComponent,
    LoginComponent,
    HomeComponent,
    DetailComponent,
    FormLoginComponent,
    ListHomeComponent,
    PanelDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
