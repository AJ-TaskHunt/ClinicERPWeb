import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Header } from "../../core/layout/header/header";

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  appointments = [
    { patient: 'James Wilson', doctor: 'Dr. Lee', time: '09:00 AM', status: 'Completed' },
    { patient: 'Maria Garcia', doctor: 'Dr. Chen', time: '10:30 AM', status: 'Upcoming' },
    { patient: 'Robert Davis', doctor: 'Dr. Patel', time: '11:45AM', status: 'Cancelled' },
  ];

  payments = [
    { patient: 'Emily White', amount: '$ 250', method: 'Credit Card', status: 'Paid' },
    { patient: 'David Kim', amount: '$ 120', method: 'Cash', status: 'Pending' },
    { patient: 'Sarah Johnson', amount: '$ 450', method: 'Insurance', status: 'Pending' },
  ];

  getStatusClass(status: string): string {
    const classes = {
      Completed: 'bg-green-100 text-status-success',
      Upcoming: 'bg-blue-100 text-primary',
      Cancelled: 'bg-orange-100 text-status-pending',
    };
    return classes[status as keyof typeof classes] || '';
  }

  getPaymentStatusClass(status: string): string {
    const classes = {
      Paid: 'bg-green-100 text-status-success',
      Pending: 'bg-orange-100 text-status-pending',
    };
    return classes[status as keyof typeof classes] || '';
  }
}
