import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _isAuthorized: boolean = false;

  constructor(
    private router: Router
  ) { }

  public get isAuthorized(): boolean {
    return this._isAuthorized;
  }

  public login(): void {
    this._isAuthorized = true;
    this.router.navigate(['/books']);
  }

  public logout(): void {
    this._isAuthorized = false;
    this.router.navigate(['/']);
  }

}
