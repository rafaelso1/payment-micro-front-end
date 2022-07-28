import { Routes } from '@angular/router';
import { HomeComponent } from '../../app/pages/home/home.component';
import { LoginComponent } from '../../app/pages/login/login.component';
import { MenuComponent } from '../../app/pages/menu/menu.component';
import { AccountDebitComponent } from '../../app/pages/payments/components/account-debit/account-debit.component';
import { CreditCardComponent } from '../../app/pages/payments/components/credit-card/credit-card.component';
import { IssuanceTicketsComponent } from '../../app/pages/payments/components/issuance-tickets/issuance-tickets.component';
import { PayTicketsComponent } from '../../app/pages/payments/components/pay-tickets/pay-tickets.component';
import { SecondWayTicketsComponent } from '../../app/pages/payments/components/second-way-tickets/second-way-tickets.component';
import { PaymentsComponent } from '../../app/pages/payments/payments.component';
import { ErrorComponent } from '../components/error/error.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'menu',
    component: MenuComponent,
  },
  {
    path: 'credit-card',
    component: CreditCardComponent,
  },
  {
    path: 'account-debit',
    component: AccountDebitComponent,
  },
  {
    path: 'issuance-tickets',
    component: IssuanceTicketsComponent,
  },
  {
    path: 'pay-tickets',
    component: PayTicketsComponent,
  },
  {
    path: 'second-way-tickets',
    component: SecondWayTicketsComponent,
  },
  {
    path: 'error',
    component: ErrorComponent,
  },
  {
    path: 'payments',
    component: PaymentsComponent,
  },
];
