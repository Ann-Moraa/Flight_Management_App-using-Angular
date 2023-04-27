import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuthenticated = false;

  constructor(private http: HttpClient) { }

  authenticateUser(username: string, password: string): Observable<any> {
    return of({ token: 'fake-token' }).pipe(
      tap(response => {
        localStorage.setItem('token', response.token);
      }),
      catchError(error => {
        console.error(error);
        throw error;
      })
    );
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }
  

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  login() {
    // perform authentication logic
    this.isAuthenticated = true;
  }

  logout() {
    this.isAuthenticated = false;
  }

  /*isLoggedIn() {
    return this.isAuthenticated;
  }*/
  
}
