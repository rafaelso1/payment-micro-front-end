import { NgModule } from '@angular/core';
import { WelcomeModule } from 'src/app/pages/welcome/welcome.module';
import { LoginModule } from 'src/app/pages/login/login.module';
import { CommonModule } from '@angular/common';
import { MenuModule } from 'src/app/pages/menu/menu.module';
import { BrowserModule } from '@angular/platform-browser';
@NgModule({
  imports: [
    CommonModule,
    LoginModule,
    WelcomeModule,
    MenuModule,
    BrowserModule,
  ],
  exports: [],
  declarations: [],
  providers: [],
})
export class HeaderModule {}
