import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SecondWayTicketsComponent } from './second-way-tickets.component';

@NgModule({
  imports: [CommonModule, BrowserModule],
  exports: [SecondWayTicketsComponent],
  declarations: [SecondWayTicketsComponent],
  providers: [],
})
export class SecondWayTicketsModule {}
