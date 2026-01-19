import { Routes } from '@angular/router';
import { Dashboard } from './features/dashboard/dashboard';
import { Layout } from './core/layout/layout';
import { Home } from './features/home/home';
import { AddDoctor } from './features/add-doctor/add-doctor';
import { BloodBank } from './features/blood-bank/blood-bank';
import { Donors } from './features/donors/donors';
import { Inventory } from './features/inventory/inventory';
import { Collection } from './features/collection/collection';
import { Issue } from './features/issue/issue';
import { Requests } from './features/requests/requests';

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
