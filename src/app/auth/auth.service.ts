import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { IUser, IRegUser } from '../interfaces/book';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _user: string = '';
  private _accessToken: string = '';

  constructor(
    private router: Router,
    private httpClient: HttpClient,
  ) { }

  public get accessToken(): string {
    return this._accessToken;
  }

  public get isAuthorized(): boolean {
    return this._accessToken != '';
  }
  public login(authUser: IUser): Observable<any> {
    let headers = new HttpHeaders({
      ['accept']: 'application/json',
      ['Content-Type']: 'application/json',
    });

    console.log('Auth:', authUser);

    return this.httpClient.post<any>(environment.apiUrl + 'auth/login',
      JSON.stringify(authUser),
      { headers: headers })
      .pipe(
        tap({
          next: result => {
            this._accessToken = result.accessToken;
            this.parseUserName();
          }, error: _ => {
            this._accessToken = '';
            this._user = '';
          }
        })
      );
  }

  public register(newUser: IRegUser): Observable<any> {
    console.log('AddNewUser:', newUser);

    let headers = new HttpHeaders({ ['Content-Type']: 'application/json' });
    return this.httpClient.post(environment.apiUrl + 'auth/register',
      JSON.stringify(newUser),
      { headers: headers });
  }

  public logout(): void {
    this._user = '';
    this._accessToken = '';
    this.router.navigate(['/']);
    location.reload();
  }

  public get userName(): string {
    return this._user;
  }

  private parseUserName(): void {
    let payload = this._accessToken.split(".")[1];
    let authDataString = atob(payload);
    let authData = JSON.parse(authDataString);
    this._user = `${authData.name} (${authData.email})`;
  }
}
