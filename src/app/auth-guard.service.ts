import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { loggedUserDetails } from './store-utilities/user.state';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
  @Select(loggedUserDetails.isLoggedIn)
  isLoggedIn$!: Observable<any>;
  isLoggedIn = false;

  constructor(private router: Router, private store: Store) {}

  canActivate() {
    return this.checkLogin();
  }

  checkLogin() {
    if (this.store.snapshot().userDetails.isLoggedIn) {
      return true;
    } else {
      this.router.navigate(['login']);
    }

    return false;
  }
}
