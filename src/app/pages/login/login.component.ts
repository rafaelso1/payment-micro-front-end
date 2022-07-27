import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  test: any;
  constructor(private router: Router, public loginService: LoginService) {}

  ngOnInit(): void {
    this.test = this.loginService.get;
  }

  navigateMenu() {
    this.router.navigate(['menu']);
  }
}
