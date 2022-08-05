import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AccountDebitComponent } from './account-debit.component';

@NgModule({
  imports: [CommonModule, BrowserModule],
  exports: [AccountDebitComponent],
  declarations: [AccountDebitComponent],
  providers: [],
})
export class AccountDebitModule {}
