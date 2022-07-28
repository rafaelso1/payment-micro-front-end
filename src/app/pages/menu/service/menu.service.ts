import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, first, retry, catchError, throwError } from 'rxjs';
import { IMenu } from '../../../../shared/model/menu.model';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  private readonly API = `http://localhost:3100/menu-api`;

  constructor(private http: HttpClient) {}

  get(): Observable<any> {
    return this.getMock();
  }

  getMock() {
    return this.http
      .get<IMenu>(this.API)
      .pipe(first(), retry(), catchError(this.handleError));
  }

  handleError(error: Error) {
    return throwError(error);
  }
}
