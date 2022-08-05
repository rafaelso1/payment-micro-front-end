import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IssuanceTicketsComponent } from './issuance-tickets.component';

@NgModule({
  imports: [CommonModule, BrowserModule],
  exports: [IssuanceTicketsComponent],
  declarations: [IssuanceTicketsComponent],
  providers: [],
})
export class IssuanceTicketsModule {}
