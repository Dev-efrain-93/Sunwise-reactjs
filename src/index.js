import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/index';
import thunk from 'redux-thunk';

//se crea el store que contiene el arbol de estados
const store = createStore(rootReducer, applyMiddleware(thunk));

//Y con Provider hago que el store Redux esté disponible en la jerarquía de componentes
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
