import { Component, OnInit } from '@angular/core';
import { newContactModel } from '../dataModels';
import { ApiServicesService } from '../api-services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss'],
})
export class AddContactComponent implements OnInit {
  constructor(private apiService: ApiServicesService, private router: Router) {}

  newContact!: newContactModel;

  ngOnInit(): void {
    this.newContact = {
      email: '',
      name: '',
      phone: '',
    };
  }

  addContact(formDetails: any) {
    const payload = formDetails.form.value;
    this.apiService.addContact(payload).subscribe((res) => {
      if (res.status === 201) {
        this.router.navigate(['dashboard']);
      }
    });
  }
}
