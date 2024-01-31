import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { IUser, IRegUser } from '../interfaces/book';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _isAuthorized: boolean = false;
  private _user: string = '';

  constructor(
    private router: Router,
    private httpClient: HttpClient,
  ) { }

  public get isAuthorized(): boolean {
    return this._isAuthorized;
  }

  public login(authUser: IUser): void {
    this._isAuthorized = true;
    this._user = authUser.user;
    console.log('Auth:', authUser);
    this.router.navigate(['/books']);
  }

  public register(newUser: IRegUser): Observable<any> {
    console.log('AddNewUser:', newUser);

    let headers = new HttpHeaders({['Content-Type']: 'application/json'});
    return this.httpClient.post(environment.apiUrl + 'auth/register', JSON.stringify(newUser), {headers: headers});

    this.router.navigate(['/login']);
  }

  public logout(): void {
    this._isAuthorized = false;
    this._user = '';
    this.router.navigate(['/']);
    location.reload();
  }

  public get userName(): string {
    return this._user;
  }

}
