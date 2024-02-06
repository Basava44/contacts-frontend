import { Component, OnInit } from '@angular/core';
import { ApiServicesService } from '../api-services.service';
import { Router } from '@angular/router';
import { contactModel } from '../dataModels';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  ngOnInit(): void {}
  contacts: contactModel[] = [];

  constructor(private apiService: ApiServicesService, private router: Router) {
    this.getContacts();
  }

  addContact() {
    this.router.navigate(['addContact']);
  }

  deleteContact(id: string) {
    this.apiService.deleteContact(id).subscribe((res) => {
      if (res.status === 200) {
        this.getContacts();
      }
    });
  }
  editContact(contact: contactModel) {}

  getContacts() {
    this.apiService.getContacts().subscribe((res) => {
      this.contacts = res.body;
    });
  }
}
