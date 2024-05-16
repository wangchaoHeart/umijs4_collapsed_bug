import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '@umijs/max',
  },
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: '首页',
      path: '/home',
      component: './Home',
    },
    {
      name: '权限演示',
      path: '/access',
      component: './Access',
      routes: [
        {
          name: '权限演示1',
          path: '/access/access1',
          component: './Access',
        },
        {
          name: '权限演示2',
          path: '/access/access2',
          component: './Access',
        },
      ],
    },
    {
      name: '页面3',
      path: '/homse',
      component: './Home',
    },
    {
      name: ' CRUD 示例',
      path: '/table',
      component: './Table',
    },
  ],
  npmClient: 'pnpm',
});
