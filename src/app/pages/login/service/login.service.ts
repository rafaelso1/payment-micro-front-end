import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { retry, catchError, first, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { ILogin } from 'src/shared/model/login.model';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private readonly API = `http://localhost:3000/login-api`;

  constructor(private http: HttpClient) {}

  get(): Observable<any> {
    return this.getMock();
  }

  getMock() {
    return this.http
      .get<ILogin>(this.API)
      .pipe(first(), retry(), catchError(this.handleError));
  }

  handleError(error: Error) {
    return throwError(error);
  }
}
