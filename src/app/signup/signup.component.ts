import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServicesService } from '../api-services.service';
import { SigninUserModel } from '../dataModels';
import { Notyf } from 'notyf';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  user!: SigninUserModel;
  notyf = new Notyf();

  constructor(private router: Router, private apiService: ApiServicesService) {
    this.user = {
      username: '',
      email: '',
      password: '',
    };
  }

  ngOnInit(): void {}

  register(form: any) {
    const payload = form.form.value;
    this.apiService.registerUser(payload).subscribe((res) => {
      if (res.status === 201) {
        this.router.navigate(['login']);
        this.notyf.success({
          message: 'Account is created, Please Login!!',
          position: {
            x: 'right',
            y: 'top',
          },
        });
      }
    });
  }
}
