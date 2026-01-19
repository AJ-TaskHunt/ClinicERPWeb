import { Routes } from '@angular/router';
import { Dashboard } from './features/dashboard/dashboard';
import { Layout } from './core/layout/layout';
import { Home } from './features/home/home';
import { AddDoctor } from './features/doctors/add-doctor/add-doctor';
import { AllDoctors } from './features/doctors/all-doctors/all-doctors';
import { DocProfile } from './features/doctors/doc-profile/doc-profile';
import { BloodBank } from './features/blood-bank/blood-bank';
import { Collection } from './features/blood-bank/collection/collection';
import { Donors } from './features/donors/donors';
import { Inventory } from './features//blood-bank/inventory/inventory';
import { Issue } from './features//blood-bank/issue/issue';
import { Requests } from './features/blood-bank/requests/requests';

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
        path:'blood-bank',component:BloodBank
      },
      {
        path:'donors',component:Donors
      },
      {
        path:'inventory',component:Inventory
      },
      {
        path:'collection',component:Collection
      },
      {
        path:'issue',component:Issue
      },
      {
        path:'requests',component:Requests
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
    ],
  },
];
