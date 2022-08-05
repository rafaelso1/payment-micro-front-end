import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, ObservableInput, throwError } from 'rxjs';
import { ILogin } from 'src/shared/model/login.model';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private readonly API = `http://localhost:3000/login-api`;

  constructor(private http: HttpClient) {}

  get(): Observable<ILogin> {
    return this.getMock();
  }

  getMock() {
    return this.http.get<ILogin>(this.API).pipe(catchError(this.handleError));
  }

  handleError(error: Error): ObservableInput<any> {
    return throwError(error);
  }
}
