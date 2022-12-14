import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { ErrorModule } from 'src/shared/components/error/error.module';

@NgModule({
  imports: [ErrorModule, CommonModule],
  exports: [HomeComponent],
  declarations: [HomeComponent],
  providers: [],
})
export class HomeModule {}
