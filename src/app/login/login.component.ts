import { Component, OnInit } from '@angular/core';
import { loginUserModel } from '../dataModels';
import { Router } from '@angular/router';
import { ApiServicesService } from '../api-services.service';
import { Store } from '@ngxs/store';
import { setLogIn } from '../store-utilities/user.action';
import { Notyf } from 'notyf';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  user!: loginUserModel;
  notyf = new Notyf();

  ngOnInit(): void {}

  constructor(
    private router: Router,
    private apiService: ApiServicesService,
    private store: Store
  ) {
    this.user = {
      email: '',
      password: '',
    };
  }

  login(form: any) {
    const paylod = form.form.value;
    this.apiService.loginUser(paylod).subscribe((res) => {
      if (res.status === 200) {
        this.store.dispatch(new setLogIn());
        this.router.navigate(['dashboard']);
      }
      if (res.status !== 200) {
        this.notyf.error({
          message: res.body.message,
          position: { x: 'right', y: 'top' },
        });
      }
    });
  }
}
