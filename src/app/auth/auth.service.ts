import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from '../interfaces/book';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _isAuthorized: boolean = false;
  private _user: string = '';

  constructor(
    private router: Router
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

  public logout(): void {
    this._isAuthorized = false;
    this._user = '';
    this.router.navigate(['/']);
  }

  public get userName():string {
    return this._user;
  }

}
