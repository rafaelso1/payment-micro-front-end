import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PayTicketsComponent } from './pay-tickets.component';

@NgModule({
  imports: [CommonModule, BrowserModule],
  exports: [PayTicketsComponent],
  declarations: [PayTicketsComponent],
  providers: [],
})
export class PayTicketsModule {}
