import { Routes } from '@angular/router';
import { Dashboard } from './features/dashboard/dashboard';
import { Layout } from './core/layout/layout';
import { Home } from './features/home/home';
import { AddDoctor } from './features/add-doctor/add-doctor';
import { AddPatient } from './features/Patient/add-patient/add-patient';
import { AllPatients } from './features/Patient/all-patients/all-patients';
import { PatientProfile } from './features/Patient/patient-profile/patient-profile';

export const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [
      {
        path: 'dashboard',
        component: Dashboard,
        data: { title: 'Dashboard' }
      },
      {
        path: 'home',component:Home,
        data: { title: 'Home' }
      },
      {
        path:'add-doctor',component:AddDoctor
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path:'add-patient',component:AddPatient
      },
      {
        path:'all-patients',component:AllPatients
      },
      {
        path:'patients/profile',component:PatientProfile
      }
      
    ],
  },
];
