import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorModule } from 'src/shared/components/error/error.module';
import { HeaderComponent } from 'src/shared/components/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountDebitModule } from './pages/account-debit/account-debit.module';
import { CreditCardModule } from './pages/credit-card/credit-card.module';
import { IssuanceTicketsModule } from './pages/issuance-tickets/issuance-tickets.module';
import { LoginModule } from './pages/login/login.module';
import { MenuModule } from './pages/menu/menu.module';
import { PayTicketsModule } from './pages/pay-tickets/pay-tickets.module';
import { SecondWayTicketsModule } from './pages/second-way-tickets/second-way-tickets.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
    const elementName = 'mfePayment';
  }
}
