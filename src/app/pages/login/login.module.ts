import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { LoginComponent } from './login.component';

@NgModule({
  imports: [FormsModule, CommonModule, ReactiveFormsModule, BrowserModule],
  exports: [],
  declarations: [LoginComponent],
  providers: [],
})
export class LoginModule {}
