import React from 'react';
import Iconify from '../components/dashboard/Iconify';

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const navConfig = [
  {
    title: 'Dashboard',
    path: '/dashboard/app',
    icon: getIcon('eva:pie-chart-2-fill'),
  },
  {
    title: 'Users',
    path: '/dashboard/users',
    icon: getIcon('eva:people-fill'),
  },
  {
    title: 'Accommodations',
    path: '/dashboard/accommodations',
    icon: getIcon('eva:shopping-bag-fill'),
  },
  {
    title: 'Chat',
    path: '/dashboard/chat',
    icon: getIcon('eva:file-text-fill'),
  },
  {
    title: 'profile',
    path: '/dashboard/profile',
    icon: getIcon('eva:lock-fill'),
  },
  {
    title: 'Trip Request',
    path: '/dashboard/trip-request',
    icon: getIcon('eva:person-add-fill'),
  },
  {
    title: 'Logout',
    path: '/welcome',
    icon: getIcon('eva:alert-triangle-fill'),
  },
];

export default navConfig;
