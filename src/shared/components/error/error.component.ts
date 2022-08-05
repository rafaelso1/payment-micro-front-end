import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss'],
})
export class ErrorComponent implements OnInit {
  @Input() message?: string;
  @Input() isError = true;

  constructor(private _location: Location) {}

  ngOnInit(): void {
    if (!this.message) {
      this.message = 'Erro ao chamar o serviço.';
    }
  }

  public backRoute() {
    this._location.back();
  }
}
