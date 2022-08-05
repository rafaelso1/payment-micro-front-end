import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FrontPageComponent } from './front-page.component';

@NgModule({
  declarations: [FrontPageComponent],
  imports: [CommonModule],
  exports: [FrontPageComponent],
  providers: [],
})
export class FrontPageModule {}
