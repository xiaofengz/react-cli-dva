import dynamic from 'dva/dynamic';

// wrapper of dynamic
const dynamicWrapper = (app, models, component) => dynamic({
  app,
  models: () => models.map(m => import(`../models/${m}.js`)),
  component,
});


export const getNavData = app => [
    {
        component: dynamicWrapper(app, ['model1', 'model2'], () => import('../layouts/BasicLayout')),
        layout: 'BasicLayout',
        name: '首页', // for breadcrumb
        path: '/',
        children: [
          {
            name: 'Dashboard',
            icon: 'dashboard',
            path: 'dashboard',
            children: [
              {
                name: '分析页',
                path: 'component1',
                component: dynamicWrapper(app, ['model1'], () => import('../routes/Page1/Component1')),
              },
              {
                name: '监控页',
                path: 'component2',
                component: dynamicWrapper(app, ['model3'], () => import('../routes/Page1/Component2')),
              }
            ],
          }]
        }
    ]