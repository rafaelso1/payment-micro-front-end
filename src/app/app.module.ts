import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorComponent } from 'src/shared/components/error/error.component';
import { ErrorModule } from 'src/shared/components/error/error.module';
import { HeaderComponent } from 'src/shared/components/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrontPageModule } from './pages/front-page/front-page.module';
import { HomeComponent } from './pages/home/home.component';
import { HomeModule } from './pages/home/home.module';
import { LoginModule } from './pages/login/login.module';
import { LoginService } from './pages/login/service/login.service';
import { MenuModule } from './pages/menu/menu.module';
import { MenuService } from './pages/menu/service/menu.service';
import { AccountDebitModule } from './pages/payments/components/account-debit/account-debit.module';
import { CreditCardModule } from './pages/payments/components/credit-card/credit-card.module';
import { IssuanceTicketsModule } from './pages/payments/components/issuance-tickets/issuance-tickets.module';
import { PayTicketsModule } from './pages/payments/components/pay-tickets/pay-tickets.module';
import { SecondWayTicketsModule } from './pages/payments/components/second-way-tickets/second-way-tickets.module';
import { PaymentsModule } from './pages/payments/payments.module';
import { WelcomeModule } from './pages/welcome/welcome.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    MenuModule,
    IssuanceTicketsModule,
    PayTicketsModule,
    AccountDebitModule,
    SecondWayTicketsModule,
    CreditCardModule,
    HomeModule,
    WelcomeModule,
    PaymentsModule,
    ErrorModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FrontPageModule,
    BrowserAnimationsModule,
    MatMenuModule,
  ],
  exports: [],
  providers: [LoginService, MenuService, HomeComponent, ErrorComponent],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {}
}
