import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IMenuOptions } from '../../../shared/model/menu-options.model';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss'],
})
export class PaymentsComponent implements OnInit {
  menu?: IMenuOptions[];
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.menu = [
      { name: 'Emissão de Boletos', component: 'issuance-tickets' },
      { name: 'Pagamento de Boletos', component: 'pay-tickets' },
      { name: 'Débito em Conta', component: 'account-debit' },
      { name: 'Cartão de crédito', component: 'credit-card' },
      { name: 'Segunda via de Boletos', component: 'second-way-tickets' },
    ];
  }

  navigateTo(component: string) {
    this.router.navigate([component]);
  }
}
