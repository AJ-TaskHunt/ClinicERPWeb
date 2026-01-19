import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgApexchartsModule } from 'ng-apexcharts';

import {
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexStroke,
  ApexDataLabels
} from 'ng-apexcharts';

@Component({
  selector: 'app-blood-bank',
  standalone: true,
  imports: [
    CommonModule,        // ✅ ngIf, ngFor, ngClass
    NgApexchartsModule   // ✅ apx-chart
  ],
  templateUrl: './blood-bank.html',
  styleUrls: ['./blood-bank.css']
})
export class BloodBank {

  // ================= BLOOD GROUP STOCK =================
  bloodGroups = [
    { group: 'A+', units: 24 },
    { group: 'A-', units: 12 },
    { group: 'B+', units: 30 },
    { group: 'B-', units: 10 },
    { group: 'AB+', units: 8 },
    { group: 'AB-', units: 5 },
    { group: 'O+', units: 40 },
    { group: 'O-', units: 15 }
  ];

  // ================= CHART CONFIG =================
  bloodChart = {
    series: [
      {
        name: 'Collected',
        data: [30, 42, 35, 50, 49, 60]
      },
      {
        name: 'Issued',
        data: [20, 35, 40, 45, 38, 55]
      }
    ] as ApexAxisChartSeries,

    chart: {
      type: 'line',
      height: 300,
      toolbar: { show: false }
    } as ApexChart,

    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
    } as ApexXAxis,

    stroke: {
      curve: 'smooth',
      width: 3
    } as ApexStroke,

    colors: ['#ef4444', '#3b82f6'],

    dataLabels: {
      enabled: false
    } as ApexDataLabels
  };

  // ================= EXPIRY ALERT =================
  expiringStock = [
    { bloodGroup: 'A+', bagNo: 'BB1021', expiry: new Date(2026, 1, 15), daysLeft: 5 },
    { bloodGroup: 'O-', bagNo: 'BB1033', expiry: new Date(2026, 1, 18), daysLeft: 8 }
  ];

  // ================= REQUESTS =================
  bloodRequests = [
    {
      patient: 'Rahul Mehta',
      bloodGroup: 'O+',
      units: 2,
      doctor: 'Dr. Shah',
      status: 'Pending'
    },
    {
      patient: 'Anita Patel',
      bloodGroup: 'A-',
      units: 1,
      doctor: 'Dr. Mehra',
      status: 'Approved'
    }
  ];

  // ================= DONORS =================
  recentDonors = [
    { name: 'Suresh Kumar', bloodGroup: 'B+', units: 1, date: new Date() },
    { name: 'Neha Jain', bloodGroup: 'O+', units: 1, date: new Date() }
  ];

  // ================= HELPERS =================
  getRequestStatusClass(status: string): string {
    switch (status) {
      case 'Approved':
        return 'bg-green-100 text-green-700';
      case 'Pending':
        return 'bg-orange-100 text-orange-700';
      case 'Rejected':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  }
}
