
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-add-patient',
  imports: [CommonModule,FormsModule],
  templateUrl: './add-patient.html',
  styleUrl: './add-patient.css',
})
export class AddPatient {
   patient: any = {
    clinicID: null,
    fullName: '',
    dob: '',
    gender: '',
    phone: '',
    address: '',
    bloodGroup: '',
    allergies: ''
  };

  savePatient() {
    // Logic to save patient details
    console.log('Patient details saved:', this.patient);
  }


}
