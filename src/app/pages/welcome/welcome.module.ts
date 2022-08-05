import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ErrorModule } from 'src/shared/components/error/error.module';
import { WelcomeComponent } from './welcome.component';

@NgModule({
  imports: [ErrorModule, CommonModule],
  exports: [WelcomeComponent],
  declarations: [WelcomeComponent],
  providers: [],
})
export class WelcomeModule {}
