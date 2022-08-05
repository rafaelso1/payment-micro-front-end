import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from '../menu/service/menu.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {
  cpf?: string;
  constructor(private router: Router, private menuService: MenuService) {}

  ngOnInit(): void {
    this.menuService.get().subscribe((x) => {
      this.cpf = x.cpf;
    });
  }

  goBack() {
    return this.router.navigate(['']);
  }
}
