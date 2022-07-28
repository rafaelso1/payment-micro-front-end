import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorModule } from 'src/shared/components/error/error.module';
import { HeaderComponent } from 'src/shared/components/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './pages/login/login.module';
import { MenuModule } from './pages/menu/menu.module';
import { AccountDebitModule } from './pages/payments/components/account-debit/account-debit.module';
import { CreditCardModule } from './pages/payments/components/credit-card/credit-card.module';
import { IssuanceTicketsModule } from './pages/payments/components/issuance-tickets/issuance-tickets.module';
import { PayTicketsModule } from './pages/payments/components/pay-tickets/pay-tickets.module';
import { SecondWayTicketsModule } from './pages/payments/components/second-way-tickets/second-way-tickets.module';
import { PaymentsComponent } from './pages/payments/payments.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, PaymentsComponent],
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
    ErrorModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {}
}
