import { Component, OnInit } from '@angular/core';
import { newContactModel } from '../dataModels';
import { Store } from '@ngxs/store';
import { ApiServicesService } from '../api-services.service';
import { Router } from '@angular/router';
import { Notyf } from 'notyf';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.scss'],
})
export class EditContactComponent implements OnInit {
  contact!: newContactModel;
  contactData: any = {};
  notyf = new Notyf();

  constructor(
    private store: Store,
    private apiService: ApiServicesService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.store
      .select((res) => res)
      .subscribe((data) => {
        this.contactData = data.userDetails.editableContactData;
        this.contact = {
          email: this.contactData.email,
          name: this.contactData.name,
          phone: this.contactData.phone,
        };
      });
  }

  editContact(editedContact: any) {
    let payload = { ...editedContact.form.value };

    if (
      payload.name === this.contactData.name &&
      payload.email === this.contactData.email &&
      payload.phone === this.contactData.phone
    ) {
      this.notyf.error({
        message: 'No Changes Made',
        position: {
          x: 'right',
          y: 'top',
        },
      });
      return;
    }

    this.apiService
      .updateContact(payload, this.contactData._id)
      .subscribe((res) => {
        if (res.status === 200) {
          this.notyf.success({
            message: 'Contact Edited Successfully',
            position: {
              x: 'right',
              y: 'top',
            },
          });
          this.router.navigate(['dashboard']);
        }
      });
  }
}
