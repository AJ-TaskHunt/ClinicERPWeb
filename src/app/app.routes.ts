import { Routes } from '@angular/router';
import { Dashboard } from './features/dashboard/dashboard';
import { Layout } from './core/layout/layout';
import { Home } from './features/home/home';
import { AddDoctor } from './features/doctors/add-doctor/add-doctor';
import { AllDoctors } from './features/doctors/all-doctors/all-doctors';
import { DocProfile } from './features/doctors/doc-profile/doc-profile';
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
        path:'add-doctor',component:AddDoctor,
        data: { title: 'Add Doctor' }
      },
      {
        path:'all-doctors',component:AllDoctors,
        data: { title: 'All Doctors' }
      },
      {
        path:'doc-profile',component:DocProfile,
        data: { title: 'Doctor Profile' }
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
