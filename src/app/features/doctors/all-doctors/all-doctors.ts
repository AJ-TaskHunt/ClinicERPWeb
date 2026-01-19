import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface ColumnConfig {
  key: string;
  label: string;
  visible: boolean;
}

export interface Doctor {
  department: string;
  specialization: string;
  availability: string;
  mobile: string;
  degree: string;
  experience: number;
  fee: number;
  email: string;
  rating: number;
  location: string;
}

@Component({
  selector: 'app-all-doctors',
  imports: [CommonModule, FormsModule],
  templateUrl: './all-doctors.html',
  styleUrl: './all-doctors.css',
})
export class AllDoctors {
  DOCTORS_DATA: Doctor[] = [
    {
      department: 'Urology',
      specialization: 'Prostate',
      availability: 'Mon – Fri',
      mobile: '1234567',
      degree: 'MBBS, MS',
      experience: 12,
      fee: 500,
      email: 'john.doe@email.com',
      rating: 4.5,
      location: 'City Hospital',
    },
    {
      department: 'Dentist',
      specialization: 'Dental',
      availability: 'Tue – Fri',
      mobile: '9876543',
      degree: 'BDS',
      experience: 8,
      fee: 300,
      email: 'sarah.s@email.com',
      rating: 4.8,
      location: 'Smile Dental',
    },
    {
      department: 'Dentist',
      specialization: 'Dental',
      availability: 'Tue – Fri',
      mobile: '9876543',
      degree: 'BDS',
      experience: 8,
      fee: 300,
      email: 'sarah.s@email.com',
      rating: 4.8,
      location: 'Smile Dental',
    },
    {
      department: 'Dentist',
      specialization: 'Dental',
      availability: 'Tue – Fri',
      mobile: '9876543',
      degree: 'BDS',
      experience: 8,
      fee: 300,
      email: 'sarah.s@email.com',
      rating: 4.8,
      location: 'Smile Dental',
    },
    {
      department: 'Dentist',
      specialization: 'Dental',
      availability: 'Tue – Fri',
      mobile: '9876543',
      degree: 'BDS',
      experience: 8,
      fee: 300,
      email: 'sarah.s@email.com',
      rating: 4.8,
      location: 'Smile Dental',
    },
    {
      department: 'Dentist',
      specialization: 'Dental',
      availability: 'Tue – Fri',
      mobile: '9876543',
      degree: 'BDS',
      experience: 8,
      fee: 300,
      email: 'sarah.s@email.com',
      rating: 4.8,
      location: 'Smile Dental',
    },
    {
      department: 'Dentist',
      specialization: 'Dental',
      availability: 'Tue – Fri',
      mobile: '9876543',
      degree: 'BDS',
      experience: 8,
      fee: 300,
      email: 'sarah.s@email.com',
      rating: 4.8,
      location: 'Smile Dental',
    },
    {
      department: 'Dentist',
      specialization: 'Dental',
      availability: 'Tue – Fri',
      mobile: '9876543',
      degree: 'BDS',
      experience: 8,
      fee: 300,
      email: 'sarah.s@email.com',
      rating: 4.8,
      location: 'Smile Dental',
    },
    {
      department: 'Dentist',
      specialization: 'Dental',
      availability: 'Tue – Fri',
      mobile: '9876543',
      degree: 'BDS',
      experience: 8,
      fee: 300,
      email: 'sarah.s@email.com',
      rating: 4.8,
      location: 'Smile Dental',
    },
    {
      department: 'Cardiology',
      specialization: 'Heart',
      availability: 'Mon – Sat',
      mobile: '8899776',
      degree: 'MBBS, DM',
      experience: 15,
      fee: 800,
      email: 'cardio@clinic.com',
      rating: 4.6,
      location: 'Heart Care Center',
    },
    {
      department: 'Orthopedic',
      specialization: 'Bones',
      availability: 'Mon – Fri',
      mobile: '7788991',
      degree: 'MBBS, MS',
      experience: 10,
      fee: 600,
      email: 'ortho@clinic.com',
      rating: 4.4,
      location: 'Bone Clinic',
    },
  ];

  filteredDoctors: Doctor[] = [];
  dropdownOpen = false;

  // ===== Search =====
  searchText = '';

  // ===== Pagination =====
  currentPage = 1;
  pageSize = 5;

  constructor() {
    this.applyFilters();
  }

  applyFilters(): void {
    const text = this.searchText.toLowerCase();

    this.filteredDoctors = this.DOCTORS_DATA.filter((d) =>
      Object.values(d).some((v) => String(v).toLowerCase().includes(text)),
    );

    this.currentPage = 1;
  }

  // ===== Pagination Helpers =====
  get paginatedDoctors(): Doctor[] {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.filteredDoctors.slice(start, start + this.pageSize);
  }

  get totalPages(): number {
    return Math.ceil(this.filteredDoctors.length / this.pageSize);
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  columns: ColumnConfig[] = [
    { key: 'department', label: 'Department', visible: true },
    { key: 'specialization', label: 'Specialization', visible: true },
    { key: 'availability', label: 'Availability', visible: true },
    { key: 'mobile', label: 'Mobile', visible: true },
    { key: 'degree', label: 'Degree', visible: true },
    { key: 'experience', label: 'Experience (Years)', visible: true },
    { key: 'fee', label: 'Consultation Fee', visible: true },
    { key: 'email', label: 'Email', visible: true },
    { key: 'rating', label: 'Rating', visible: true },
    { key: 'location', label: 'Clinic Location', visible: true },
  ];

  toggleDropdown(): void {
    this.dropdownOpen = !this.dropdownOpen;
  }

  isVisible(key: string): boolean {
    return this.columns.find((c) => c.key === key)?.visible ?? true;
  }
}
