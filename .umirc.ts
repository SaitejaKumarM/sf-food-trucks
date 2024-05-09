import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: 'max-app',
  },
  routes: [
    {
      path: '/',
      redirect: '/table',
    },
    {
      name: 'table',
      path: '/table',
      component: './Table',
    },
  ],
  npmClient: 'pnpm',
});
