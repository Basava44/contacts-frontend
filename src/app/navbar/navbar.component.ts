import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { clearData } from '../store-utilities/user.action';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  ngOnInit(): void {}
  userLoggedIn = false;
  constructor(private router: Router, private store: Store) {
    this.store
      .select((state) => state)
      .subscribe((res: any) => {
        this.userLoggedIn = res.userDetails?.isLoggedIn;
      });
  }

  logIn() {
    this.router.navigate(['/login']);
  }

  signUp() {
    this.router.navigate(['/register']);
  }

  logout() {
    this.store.dispatch(new clearData());
    this.router.navigate(['']);
  }
}
