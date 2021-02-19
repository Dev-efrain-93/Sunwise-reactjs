import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Routes from './routes';
import CoreLayout from './common/layouts/CoreLayout';
import './styles/_main.scss';

ReactDOM.render(
  <React.StrictMode>
    {/* <CoreLayout>
      <Routes />
    </CoreLayout> */}
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
