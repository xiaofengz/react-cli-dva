// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from 'COMPONENTS/Main';
// ReactDOM.render(
// 	<App />,
// 	document.getElementById('main')
// );

// react+redux+react-router写法
import React from 'react';
import ReactDOM from 'react-dom';
import {
	Provider
} from 'react-redux';
import configureStore from './store';
import routes from './routes';
// import mainStyle from 'LESS/main.less';
// import 'react-select/dist/react-select.css';

const store = configureStore();

ReactDOM.render(
	<Provider store={store}>
    {routes}
  	</Provider>,
	document.getElementById('main')
);