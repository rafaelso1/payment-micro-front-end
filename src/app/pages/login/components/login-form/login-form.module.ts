import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorModule } from 'src/shared/components/error/error.module';
import { LoginService } from '../../service/login.service';
import { LoginFormComponent } from './login-form.component';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    BrowserModule,
    ErrorModule,
  ],
  exports: [LoginFormComponent],
  declarations: [LoginFormComponent],
  providers: [],
})
export class LoginFormModule {}
