import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import {
//   LucideAngularModule,
//   provideIcons,
//   Calendar,
//   Scissors,
//   UserPlus,
//   Wallet,
// } from 'lucide-angular';

import {
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexStroke,
  ApexTooltip,
  ApexDataLabels,
  ApexFill,
  ApexResponsive,
  ApexLegend,
  ApexPlotOptions,
  ApexYAxis,
} from 'ng-apexcharts';
import { NgApexchartsModule } from 'ng-apexcharts';

export type LineChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  tooltip: ApexTooltip;
  dataLabels: ApexDataLabels;
  fill: ApexFill;
};

export type DonutChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  legend: ApexLegend;
  responsive: ApexResponsive[];
  colors: string[]; // ✅ add this
  plotOptions: ApexPlotOptions; // ✅ add this
  dataLabels?: ApexDataLabels; // ✅ optional but useful
  tooltip?: ApexTooltip;
};

export type MiniBarChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  tooltip: ApexTooltip;
};

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, NgApexchartsModule, FormsModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  surveyRange: 'weekly' | 'monthly' | 'yearly' = 'monthly';

  onSurveyRangeChange() {
    // later you’ll switch chart data here
    console.log('Survey range:', this.surveyRange);
  }

  appointments = [
    {
      patient: 'James Wilson',
      doctor: 'Dr. Lee',
      time: '09:00 AM',
      title: 'Routine Check-Up',
      type: 'Routine',
      status: 'Completed',
    },
    {
      patient: 'Maria Garcia',
      doctor: 'Dr. Chen',
      time: '10:30 AM',
      title: 'Consultation',
      type: 'Consultation',
      status: 'Upcoming',
    },
    {
      patient: 'Robert Davis',
      doctor: 'Dr. Patel',
      time: '11:45 AM',
      title: 'Follow-Up',
      type: 'Follow-Up',
      status: 'Cancelled',
    },
  ];

  payments = [
    { patient: 'Emily White', amount: '$ 250', method: 'Credit Card', status: 'Paid' },
    { patient: 'David Kim', amount: '$ 120', method: 'Cash', status: 'Pending' },
    { patient: 'Sarah Johnson', amount: '$ 450', method: 'Insurance', status: 'Pending' },
  ];

  /* License Information */
  license = {
    licenseKey: 'CLINIC-ERP-9X72-AKLP-2026',
    subscriptionStart: new Date('2026-01-01'),
    subscriptionEnd: new Date('2026-11-01'),
    status: 'ACTIVE', // or 'SUSPENDED'
  };

  daysRemaining(): number {
    const today = new Date();
    const expiry = new Date(this.license.subscriptionEnd);
    const diff = (expiry.getTime() - today.getTime()) / (1000 * 60 * 60 * 24);

    return Math.max(Math.ceil(diff), 0);
  }

  isExpiringSoon(): boolean {
    return this.daysRemaining() <= 30 && this.license.status === 'ACTIVE';
  }

  // isExpiringSoon(): boolean {
  //   const today = new Date();
  //   const expiry = new Date(this.license.subscriptionEnd);
  //   const diffDays = (expiry.getTime() - today.getTime()) / (1000 * 60 * 60 * 24);

  //   return diffDays <= 30;
  // }

  /* End License Information */

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

  //hospital survey chart
  hospitalSurveyChart: LineChartOptions = {
    series: [
      {
        name: 'New Patients',
        data: [30, 40, 35, 50, 49, 65, 80],
      },
      {
        name: 'Old Patients',
        data: [20, 30, 25, 40, 45, 55, 60],
      },
    ],
    chart: {
      type: 'area',
      height: 280,
      toolbar: { show: false },
    },
    stroke: {
      curve: 'smooth',
      width: 3,
    },
    dataLabels: { enabled: false },
    fill: {
      type: 'gradient',
      gradient: {
        opacityFrom: 0.35,
        opacityTo: 0.05,
      },
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    },
    tooltip: {
      theme: 'light',
    },
  };

  //for patient chart
  patientChart: DonutChartOptions = {
    series: [22, 20, 15, 18],
    labels: ['Dengue', 'Malaria', 'Typhoid', 'Cold'],
    colors: ['#1E90FF', '#00C48C', '#FFB020', '#FF4D4F'],
    chart: {
      type: 'donut',
      height: 280,
    },
    plotOptions: {
      pie: {
        donut: {
          size: '65%',
          labels: {
            show: true,
            total: {
              show: true,
              label: 'Total',
              fontSize: '13px',
              color: '#6B7280',
              formatter: () => '75',
            },
            value: {
              fontSize: '28px',
              fontWeight: 700,
              color: '#111827',
            },
          },
        },
      },
    },
    legend: {
      position: 'bottom',
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: { height: 240 },
        },
      },
    ],
    dataLabels: {
      enabled: false,
    },
    tooltip: {
      theme: 'light',
      style: {
        fontSize: '12px',
      },
      y: {
        formatter: (val: number) => `${val}%`,
      },
    },
  };

  currentDate = new Date(2026, 0, 26);

  weekDays = Array.from({ length: 7 }, (_, i) => {
    const d = new Date(this.currentDate);
    d.setDate(this.currentDate.getDate() - 3 + i);
    return d;
  });

  isActive(date: Date): boolean {
    return date.toDateString() === this.currentDate.toDateString();
  }

  changeDay(offset: number) {
    this.currentDate.setDate(this.currentDate.getDate() + offset);
    this.currentDate = new Date(this.currentDate);
  }

  //for revenue chart
  revenueChart: MiniBarChartOptions = {
    series: [
      {
        name: 'Revenue',
        data: [20, 35, 30, 45, 40, 60, 50],
      },
    ],
    chart: {
      type: 'bar',
      height: 160,
      toolbar: { show: false },
    },
    plotOptions: {
      bar: {
        columnWidth: '45%',
        borderRadius: 6,
      },
    },
    yaxis: {
      labels: { show: false },
    },
    tooltip: {
      enabled: true,
    },
  };

  //Doctor list with Available / Absent status
  doctorStatus = [
    { name: 'Dr. Jay Soni', degree: 'MBBS, MD', status: 'Available' },
    { name: 'Dr. Sarah Smith', degree: 'BDS, MDS', status: 'Absent' },
    { name: 'Dr. Megha Trivedi', degree: 'MBBS', status: 'Available' },
    { name: 'Dr. John Deo', degree: 'MBBS, MS', status: 'Available' },
    { name: 'Dr. Jacob Ryan', degree: 'MBBS, MD', status: 'Absent' },
    { name: 'Dr. Linda Carter', degree: 'MBBS, DNB', status: 'Available' },
  ];

  getDoctorStatusClass(status: string) {
    return status === 'Available' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700';
  }

  today = new Date();

  // weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  // weekDates = [
  //   { date: 12, isToday: false },
  //   { date: 13, isToday: false },
  //   { date: 14, isToday: true },
  //   { date: 15, isToday: false },
  //   { date: 16, isToday: false },
  //   { date: 17, isToday: false },
  //   { date: 18, isToday: false },
  // ];

  // todayAppointments = [
  //   {
  //     patient: 'Rahul Mehta',
  //     doctor: 'Dr. Jay Soni',
  //     time: '09:30 AM',
  //     status: 'Confirmed',
  //   },
  //   {
  //     patient: 'Anita Sharma',
  //     doctor: 'Dr. Sarah Smith',
  //     time: '11:00 AM',
  //     status: 'Pending',
  //   },
  //   {
  //     patient: 'Kunal Patel',
  //     doctor: 'Dr. Megha Trivedi',
  //     time: '01:15 PM',
  //     status: 'Confirmed',
  //   },
  //   {
  //     patient: 'Riya Shah',
  //     doctor: 'Dr. John Deo',
  //     time: '04:00 PM',
  //     status: 'Cancelled',
  //   },
  // ];

  getAppointmentStatusClass(status: string) {
    switch (status) {
      case 'Confirmed':
        return 'bg-green-100 text-green-700';
      case 'Pending':
        return 'bg-orange-100 text-orange-700';
      case 'Cancelled':
        return 'bg-red-100 text-red-700';
      default:
        return '';
    }
  }

  getTimelineDot(status: string) {
    switch (status) {
      case 'Confirmed':
        return 'bg-green-500';
      case 'Pending':
        return 'bg-orange-500';
      case 'Cancelled':
        return 'bg-red-500';
      default:
        return 'bg-gray-400';
    }
  }

  todayAppointments = [
    {
      patient: 'John Doe',
      type: 'Routine Check-Up',
      doctor: 'Dr. Patel',
      time: '09:00 AM',
    },
    {
      patient: 'Bob Johnson',
      type: 'Routine Check-Up',
      doctor: 'Dr. Patel',
      time: '10:00 AM',
    },
    {
      patient: 'John Doe',
      type: 'Meeting',
      doctor: 'Dr. Patel',
      time: '11:00 AM',
    },
    {
      patient: 'Sarah White',
      type: 'Consultation',
      doctor: 'Dr. Patel',
      time: '01:30 PM',
    },
    {
      patient: 'Amit Shah',
      type: 'Follow-Up',
      doctor: 'Dr. Patel',
      time: '03:00 PM',
    },
  ];

  getTypeColor(type: string) {
    switch (type) {
      case 'Routine Check-Up':
        return 'bg-yellow-400';
      case 'Meeting':
        return 'bg-teal-400';
      case 'Consultation':
        return 'bg-blue-400';
      case 'Follow-Up':
        return 'bg-green-400';
      default:
        return 'bg-gray-300';
    }
  }
}
