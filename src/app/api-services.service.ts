import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiServicesService {
  private apiendpoint = 'https://dark-rose-seal-coat.cyclic.app';

  constructor(private http: HttpClient) {}

  registerUser(payload: any) {
    return this.http
      .post(`${this.apiendpoint}/api/users/register`, payload, {
        observe: 'response',
      })
      .pipe(map((res: any) => res));
  }

  loginUser(payload: { email: string; password: string }) {
    return this.http
      .post(`${this.apiendpoint}/api/users/login`, payload, {
        observe: 'response',
      })
      .pipe(map((res: any) => res));
  }

  getContacts() {
    return this.http
      .get(`${this.apiendpoint}/api/contacts`, { observe: 'response' })
      .pipe(map((res: any) => res));
  }

  getContactWithId(id: string) {
    return this.http
      .get(`${this.apiendpoint}/api/contacts/${id}`, { observe: 'response' })
      .pipe(map((res: any) => res));
  }

  addContact(payload: any) {
    return this.http
      .post(`${this.apiendpoint}/api/contacts`, payload, {
        observe: 'response',
      })
      .pipe(map((res) => res));
  }

  updateContact(
    payload: { email: string; phone: string; name: string },
    id: string
  ) {
    return this.http
      .put(`${this.apiendpoint}/api/contacts/${id}`, payload, {
        observe: 'response',
      })
      .pipe(map((res: any) => res));
  }

  deleteContact(id: string) {
    return this.http
      .delete(`${this.apiendpoint}/api/contacts/${id}`, { observe: 'response' })
      .pipe(map((res: any) => res));
  }

  getCurrentUser() {
    return this.http
      .get(`${this.apiendpoint}/api/users/current`, { observe: 'response' })
      .pipe(map((res) => res));
  }
}
