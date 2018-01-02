import 'babel-polyfill';
import dva from 'dva';
import 'moment/locale/zh-cn';
// import browserHistory from 'history/createBrowserHistory';
// import './less/main.less';
import router from './router';

// 1. Initialize
const app = dva({
  // history: browserHistory(),
});

// 2. Plugins
// app.use({});

// 3. Register global model
app.model({
  namespace: 'global',

  state: 0,
});

// 4. Router
app.router(router);

// 5. Start
app.start('#root');
