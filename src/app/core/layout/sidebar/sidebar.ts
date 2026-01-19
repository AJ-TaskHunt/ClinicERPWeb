import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  @Input() collapsed = false;

  // toggleMenu(item: any) {
  //   if (item.children) {
  //     item.expanded = !item.expanded;
  //   }
  // }

  toggleMenu(item: any) {
    if (!item.children) return;

    this.navItems.forEach((i) => {
      if (i !== item) {
        i.expanded = false;
      }
    });

    item.expanded = !item.expanded;
  }

  navItems = [
    {
      label: 'Home',
      route: '/home',
      icon: 'https://api.builder.io/api/v1/image/assets/TEMP/b96a4468b866f08bc3ba682ca7f37e2a447f926f?width=70',
      active: false,
    },
    {
      label: 'Dashboard',
      route: '/dashboard',
      icon: 'https://api.builder.io/api/v1/image/assets/TEMP/25d1473f78dcc6e3e4b31a8d50d40fe939065491?width=60',
      active: false,
    },
    {
      label: 'Patients',
      route: '/patients',
      icon: 'https://api.builder.io/api/v1/image/assets/TEMP/7d8416b76528d917000a627a1fd75aa4e7f3d726?width=70',
      active: false,
    },
    {
      label: 'Doctor',
      icon: 'https://api.builder.io/api/v1/image/assets/TEMP/c657c719fc1341245ffa40f587f70004b7854281?width=70',
      active: false,
      expanded: false,
      children: [
        { label: 'All Doctors', route: '/all-doctors' },
        { label: 'Add Doctor', route: '/add-doctor' },
        { label: 'Edit Doctor', route: '/doctors/edit' },
        { label: 'Assign Department', route: '/doctors/department' },
        { label: 'Shift Management', route: '/doctors/shift' },
        { label: 'Doctor Profile', route: '/doc-profile' },
      ],
    },
    {
      label: 'Appointments',
      route: '/appointments',
      icon: 'https://api.builder.io/api/v1/image/assets/TEMP/413e08e6f457993a3e4065e392a4504a90be3030?width=70',
      active: false,
    },
    {
      label: 'OPD / IPD',
      route: '/opd-ipd',
      icon: 'https://api.builder.io/api/v1/image/assets/TEMP/42383562e402d521180ba8a41d8cb84841c0d491?width=70',
      active: false,
    },
    {
      label: 'Lab',
      route: '/lab',
      icon: 'https://api.builder.io/api/v1/image/assets/TEMP/385c0d11119601e7aeb68c54eb53103ecde1b726?width=70',
      active: false,
    },
    {
      label: 'Pharmacy',
      route: '/pharmacy',
      icon: 'https://api.builder.io/api/v1/image/assets/TEMP/4f58e5c24c22869be9be1547283f4ba5958526a5?width=70',
      active: false,
    },
    {
      label: 'Reports',
      route: '/reports',
      icon: 'https://api.builder.io/api/v1/image/assets/TEMP/53169aa4cb58e8e57f5423411a7a99d6eab3e100?width=70',
      active: false,
    },
    {
      label: 'Billing',
      route: '/billing',
      icon: 'https://api.builder.io/api/v1/image/assets/TEMP/52756159770675ecaadce45a6c62d8673a3e6ca2?width=70',
      active: false,
    },
    {
      label: 'Staff',
      route: '/staff',
      icon: 'https://api.builder.io/api/v1/image/assets/TEMP/e3811acc6dc0c0f5284977ec13af3d9f3f5f1449?width=70',
      active: false,
    },
    {
      label: 'Setting',
      route: '/setting',
      icon: 'https://api.builder.io/api/v1/image/assets/TEMP/074469da0cae565d6b7ff3e0759548f499545659?width=70',
      active: false,
    },
  ];
}
