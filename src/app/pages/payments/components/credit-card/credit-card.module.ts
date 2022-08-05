import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CreditCardComponent } from './credit-card.component';

@NgModule({
  imports: [CommonModule, BrowserModule],
  exports: [CreditCardComponent],
  declarations: [CreditCardComponent],
  providers: [],
})
export class CreditCardModule {}
