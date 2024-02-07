import { Component, OnInit } from '@angular/core';
import { ApiServicesService } from '../api-services.service';
import { Router } from '@angular/router';
import { contactModel } from '../dataModels';
import { Store } from '@ngxs/store';
import { editContact } from '../store-utilities/user.action';
import { Notyf } from 'notyf';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  ngOnInit(): void {}
  contacts: contactModel[] = [];
  notyf = new Notyf();

  constructor(
    private apiService: ApiServicesService,
    private router: Router,
    private store: Store
  ) {
    this.getContacts();
  }

  addContact() {
    this.router.navigate(['addContact']);
  }

  deleteContact(id: string) {
    this.apiService.deleteContact(id).subscribe((res) => {
      if (res.status === 200) {
        this.getContacts();
        this.notyf.error({
          message: 'Contact Deleted Successfully',
          position: {
            x: 'right',
            y: 'top',
          },
        });
      }
    });
  }
  editContact(contact: contactModel) {
    this.store.dispatch(new editContact(contact));
    this.router.navigate(['editContact']);
  }

  getContacts() {
    this.apiService.getContacts().subscribe((res) => {
      this.contacts = res.body;
    });
  }
}
