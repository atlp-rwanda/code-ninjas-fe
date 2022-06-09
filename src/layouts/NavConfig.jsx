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
    class: 'nav-item-users',
    id: 'nav-item-users',
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
];

export default navConfig;
