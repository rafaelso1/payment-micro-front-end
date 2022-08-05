import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ErrorComponent } from './error.component';

@NgModule({
  imports: [CommonModule],
  exports: [ErrorComponent],
  declarations: [ErrorComponent],
  providers: [],
})
export class ErrorModule {}
