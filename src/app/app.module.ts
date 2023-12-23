import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { ContainerComponent } from './container/container.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { RequestInterceptor } from './request.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppNavComponent } from './app-nav/app-nav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { NavComponent } from './nav/nav.component';
import { MatButtonModule } from '@angular/material/button';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormsModule } from '@angular/forms';
import { HoverDirective } from './hover.directive';
import { LoginComponent } from './login/login.component';
import { EmailvalidateDirective } from './emailvalidate.directive';
// import { RoomsModule } from './rooms/rooms.module';
import { HeaderDirective } from './header/header.directive';
// import { BookingComponent } from './booking/booking.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    ContainerComponent,
    AppNavComponent,
    NavComponent,
    NotFoundComponent,
    HoverDirective,
    LoginComponent,
    EmailvalidateDirective,
    HeaderDirective,
    // BookingComponent
  ],
  imports: [
    BrowserModule,
    // RoomsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgbModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    FormsModule
  ],
  providers: [
   {
    provide:  HTTP_INTERCEPTORS,
    useClass: RequestInterceptor,
    multi: true
   }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
