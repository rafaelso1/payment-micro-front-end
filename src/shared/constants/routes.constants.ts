import { Routes } from '@angular/router';
import { AccountDebitComponent } from '../../app/pages/account-debit/account-debit.component';
import { CreditCardComponent } from '../../app/pages/credit-card/credit-card.component';
import { HomeComponent } from '../../app/pages/home/home.component';
import { IssuanceTicketsComponent } from '../../app/pages/issuance-tickets/issuance-tickets.component';
import { LoginComponent } from '../../app/pages/login/login.component';
import { MenuComponent } from '../../app/pages/menu/menu.component';
import { PayTicketsComponent } from '../../app/pages/pay-tickets/pay-tickets.component';
import { SecondWayTicketsComponent } from '../../app/pages/second-way-tickets/second-way-tickets.component';
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
];
