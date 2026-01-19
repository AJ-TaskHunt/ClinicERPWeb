import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-doc-profile',
  imports: [CommonModule, FormsModule],
  templateUrl: './doc-profile.html',
  styleUrl: './doc-profile.css',
})
export class DocProfile {
  isEditMode = false;
  activeTab = 'About Me';

  tabs = ['About Me', 'Education', 'Experience', 'Certifications', 'Patient Feedback'];

  doctor = {
    name: 'Dr. John Smith',
    degree: 'MD - Cardiologist',
    address: '123 Medical Center Dr, New York, NY 10001',
    phone: '+1 (123) 456-7890',
    email: 'john.smith@example.com',
    avatar: 'https://i.pravatar.cc/150?img=12',
    about:
      'Dr. Smith is a board-certified cardiologist with over 15 years of experience in treating cardiovascular diseases. He specializes in interventional cardiology and has performed over 1,000 cardiac procedures.',
    education: 'MBBS, MD (Cardiology) – Harvard Medical School',
    experience: '15+ years experience at New York Medical Center',
    certifications: 'American Board of Cardiology',
    stats: {
      following: 564,
      followers: 18000,
      posts: 565,
    },
  };

  metrics = [
    {
      label: 'Patients',
      value: '1,286',
      change: '+12%',
      target: '1,500',
      icon: 'users',
      color: 'green',
    },
    {
      label: 'Surgeries',
      value: '96',
      change: '+8%',
      target: '100',
      icon: 'briefcase',
      color: 'orange',
    },
    {
      label: 'Success Rate',
      value: '95%',
      change: '+5%',
      target: '90%',
      icon: 'chart',
      color: 'cyan',
    },
    {
      label: 'Avg. Wait Time',
      value: '15 min',
      change: '-25%',
      target: '20 min',
      icon: 'clock',
      color: 'purple',
    },
  ];

  skills = [
    { name: 'Cardiac Catheterization', value: 95 },
    { name: 'Echocardiography', value: 85 },
    { name: 'Patient Care', value: 90 },
    { name: 'Research', value: 70 },
  ];

  toggleEdit() {
    this.isEditMode = !this.isEditMode;
  }

  setTab(tab: string) {
    this.activeTab = tab;
  }

  saveProfile() {
    this.isEditMode = false;
    // API integration later
  }
}
