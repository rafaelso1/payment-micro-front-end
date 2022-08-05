import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private _router: Router) {}

  ngOnInit(): void {}

  home() {
    this._router.navigate(['home']);
  }

  showForm() {
    return this._router.url === '/' || this._router.url === '/error';
  }
}
