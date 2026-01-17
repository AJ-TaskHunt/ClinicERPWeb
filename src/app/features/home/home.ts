import { Component } from '@angular/core';
import { Header } from '../../core/layout/header/header';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  todayAppointments = [
    { name: 'Sarah Jenkins', time: '09:15 AM', status: 'Confirmed' },
    { name: 'Maria Garly', time: '09:30 AM', status: 'Pending' },
    { name: 'Robert Davios', time: '10:00 AM', status: 'Confirmed' },
    { name: 'Marr plinmer', time: '10:30 AM', status: 'Confirmed' },
    { name: 'Gargy lia', time: '11:20 AM', status: 'Pending' },
    { name: 'Jon sheek', time: '11:45 AM', status: 'Confirmed' },
    { name: 'Jiya diloit', time: '12:00 AM', status: 'Pending' },
  ];

  alerts = [
    '3 Pending insurance claims',
    'Low stock : Amoxicillin 500mg',
    'Dr. Lee out of office tomorrow',
  ];

  recentActivities = [
    {
      text: 'New patient registered : Mark T.',
      time: '10 m ago',
      type: 'info',
    },
    { text: 'Invoice #4022 generated', time: '25 m ago', type: 'success' },
    {
      text: 'Lab report uploaded for Sarah J.',
      time: '1 h ago',
      type: 'neutral',
    },
  ];

  getAppointmentStatusClass(status: string): string {
    const classes = {
      Confirmed: 'bg-green-100 text-status-success',
      Pending: 'bg-orange-100 text-status-pending',
    };
    return classes[status as keyof typeof classes] || '';
  }

  getActivityIconColor(type: string): string {
    const classes = {
      info: 'bg-primary-dark',
      success: 'bg-status-success',
      neutral: 'bg-gray-400',
    };
    return classes[type as keyof typeof classes] || 'bg-gray-400';
  }
}
