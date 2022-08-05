import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PaymentsModule } from '../payments/payments.module';
import { MenuComponent } from './menu.component';

@NgModule({
  imports: [CommonModule, PaymentsModule],
  exports: [MenuComponent],
  declarations: [MenuComponent],
  providers: [],
})
export class MenuModule {}
