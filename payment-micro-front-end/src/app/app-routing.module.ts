import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { routes } from '../shared/constants/routes.constants';

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  constructor(
    protected router: Router, 
    ){
    
  }
}
