const menuGlobal=[
  {
    id:'a',
    title: 'aaa',
    icon:'user',
    path: '/',
    models: () => [import('../models/aaa')], // models可多个
    component: () => import('../pages/aaa'),
  },
  {
    id: 'sub',
    title: 'subnav 1',
    icon: 'dashboard',
    childRoutes: [
      {
          id:'sub-b',
          title:'bbb页',
          path: '/dashboard/bbb',
          component: () => import('../pages/bbb'),
      },
      {
          id:'sub-c',
          title:'ccc页',
          path: '/dashboard/ccc',
          component: () => import('../pages/ccc'),
      },
    ]
  },
];

export default {
  menuGlobal
};
