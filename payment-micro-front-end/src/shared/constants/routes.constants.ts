import { Routes } from "@angular/router";
import { AccountDebitComponent } from "../../app/pages/account-debit/account-debit.component";
import { CreditCardComponent } from "../../app/pages/credit-card/credit-card.component";
import { HomeComponent } from "../../app/pages/home/home.component";
import { IssuanceTicketsComponent } from "../../app/pages/issuance-tickets/issuance-tickets.component";
import { LoginComponent } from "../../app/pages/login/login.component";
import { MenuComponent } from "../../app/pages/menu/menu.component";
import { PayTicketsComponent } from "../../app/pages/pay-tickets/pay-tickets.component";
import { SecondWayTicketsComponent } from "../../app/pages/second-way-tickets/second-way-tickets.component";
import { ErrorComponent } from "../components/error/error.component";

export const routes: Routes = [
  {
    outlet: 'mfePayment',
    path: '',
    component: HomeComponent
  },
  {
    outlet: 'mfePayment',
    path: 'home',
    component: HomeComponent
  },
  {
    outlet: 'mfePayment',
    path: 'login',
    component: LoginComponent
  },
  {
    outlet: 'mfePayment',
    path: 'menu',
    component: MenuComponent
  },
  {
    outlet: 'mfePayment',
    path: 'credit-card',
    component: CreditCardComponent
  },
  {
    outlet: 'mfePayment',
    path: 'account-debit',
    component: AccountDebitComponent
  },
  {
    outlet: 'mfePayment',
    path: 'issuance-tickets',
    component: IssuanceTicketsComponent
  },
  {
    outlet: 'mfePayment',
    path: 'pay-tickets',
    component: PayTicketsComponent
  },
  {
    outlet: 'mfePayment',
    path: 'second-way-tickets',
    component: SecondWayTicketsComponent
  },
  {
    outlet: 'mfePayment',
    path: 'error',
    component: ErrorComponent
  }
];