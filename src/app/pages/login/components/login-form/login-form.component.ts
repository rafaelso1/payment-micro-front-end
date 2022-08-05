import { Component, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { ErrorComponent } from 'src/shared/components/error/error.component';
import { LoginEnum } from 'src/shared/enums/login.enum';
import { ILogin } from 'src/shared/model/login.model';
import { LoginComponent } from '../../login.component';
import { LoginService } from '../../service/login.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  bankLogins?: ILogin;
  agency: string = '';
  account: string = '';
  formBank!: FormGroup;
  @Input() message = '';
  @Input() isError: boolean = false;

  constructor(
    public loginService: LoginService,
    private router: Router,
    private formBuilder: FormBuilder,
    private error: ErrorComponent
  ) {}

  ngOnInit(): void {
    this.loginService.get().subscribe(
      (data: ILogin) =>
        (this.bankLogins = {
          account: data.account,
          agency: data.agency,
        }),
      () => {
        this.router.navigate(['error']);
      }
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
    if (this.validDatas()) {
      this.router.navigate(['home']);
      return;
    }
    this.error.message = LoginEnum.agencyAccountInvalid;
    this.router.navigate(['error']);
    return;
  }

  private createForm() {
    this.formBank = this.formBuilder.group({
      account: [''],
      agency: [''],
    });
  }
}
