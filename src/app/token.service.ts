import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  token: string = '';

  setToken(token: string) {
    this.token = token;
  }

  getToken() {
    return this.token;
  }
}
