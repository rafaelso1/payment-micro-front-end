import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, first, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { ILogin } from 'src/shared/model/login.model';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private readonly API = `login-api`;

  constructor(private http: HttpClient) {}

  get(): Observable<ILogin> {
    return this.getMock();
  }

  getMock() {
    return this.http.get<ILogin>(this.API).pipe(
      first(),
      catchError(this.handleError),
      map((x: ILogin) => {
        return x;
      })
    );
  }

  handleError(error: Error) {
    return throwError(error);
  }
}
