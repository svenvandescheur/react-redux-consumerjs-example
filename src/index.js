import React from 'react'
import thunk from 'redux-thunk';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { applyMiddleware, compose, createStore } from 'redux'
import reducer from './reducers'
import App from './components/App'



const composeEnhancers = (window &&  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;


const enhancer = composeEnhancers(
  applyMiddleware(thunk),
);


const store = createStore(reducer, enhancer)


render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('.main')
)