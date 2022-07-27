import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { IssuanceTicketsComponent } from './issuance-tickets/issuance-tickets.component';
import { PayTicketsComponent } from './pay-tickets/pay-tickets.component';
import { AccountDebitComponent } from './account-debit/account-debit.component';
import { SecondWayTicketsComponent } from './second-way-tickets/second-way-tickets.component';
import { CreditCardComponent } from './credit-card/credit-card.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    IssuanceTicketsComponent,
    PayTicketsComponent,
    AccountDebitComponent,
    SecondWayTicketsComponent,
    CreditCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
