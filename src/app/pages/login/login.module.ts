import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ErrorModule } from 'src/shared/components/error/error.module';
import { LoginFormModule } from './components/login-form/login-form.module';
import { WelcomeModule } from '../welcome/welcome.module';
import { LoginComponent } from './login.component';
import { LoginService } from './service/login.service';

@NgModule({
  imports: [ErrorModule, LoginFormModule, WelcomeModule, CommonModule],
  exports: [LoginComponent],
  declarations: [LoginComponent],
  providers: [LoginService],
})
export class LoginModule {}
