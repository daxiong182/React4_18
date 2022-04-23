import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {HashRouter} from 'react-router-dom'
import store from './redux/store'
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    {/* 此处需要用provider 包裹App 目的是让所有的后代容器都能接收到 store */}
    <Provider store={store}>
    <App />
    </Provider>
  </HashRouter>
);




