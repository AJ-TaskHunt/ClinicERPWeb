import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-donors',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './donors.html',
  styleUrls: ['./donors.css']
})
export class Donors {

  showAddForm = false;

  donorForm = {
    name: '',
    bloodGroup: '',
    phone: '',
    gender: '',
    age: null as number | null,
    lastDonation: ''
  };

  donors = [
    {
      name: 'Rahul Mehta',
      bloodGroup: 'O+',
      phone: '9876543210',
      lastDonation: '12 Jan 2026',
      status: 'Eligible'
    },
    {
      name: 'Anita Patel',
      bloodGroup: 'A-',
      phone: '9898989898',
      lastDonation: '25 Dec 2025',
      status: 'Not Eligible'
    }
  ];

  toggleForm() {
    this.showAddForm = !this.showAddForm;
  }

saveDonor() {
  this.donors.unshift({
    name: this.donorForm.name,
    bloodGroup: this.donorForm.bloodGroup,
    phone: this.donorForm.phone,
    lastDonation: this.donorForm.lastDonation
      ? this.formatDate(this.donorForm.lastDonation)
      : '—',
    status: 'Eligible'
  });

    this.donorForm = {
  name: '',
  bloodGroup: '',
  phone: '',
  gender: '',
  age: null,
  lastDonation: ''  
};


    this.showAddForm = false;
  }
formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  });
}


  getStatusClass(status: string) {
    return status === 'Eligible'
      ? 'bg-green-100 text-green-700'
      : 'bg-red-100 text-red-700';
  }
}

