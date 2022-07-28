import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ILogin } from 'src/shared/model/login.model';
import { LoginService } from './service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  bankLogins?: ILogin;
  agency: string = '';
  account: string = '';
  formBank!: FormGroup;

  constructor(
    private router: Router,
    public loginService: LoginService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.loginService.get().subscribe(
      (data: ILogin) =>
        (this.bankLogins = {
          account: data.account,
          agency: data.agency,
        })
    );
    this.createForm();
  }

  validDatas() {
    return (
      this.bankLogins?.account === this.formBank.value.account &&
      this.bankLogins?.agency === this.formBank.value.agency
    );
  }

  navigateMenu() {
    return this.validDatas()
      ? this.router.navigate(['menu'])
      : console.log('colocar o login corretamente.');
  }

  private createForm() {
    this.formBank = this.formBuilder.group({
      account: [''],
      agency: [''],
    });
  }
}
