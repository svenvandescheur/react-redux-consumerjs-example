import React from 'react'
import thunk from 'redux-thunk';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import todoApp from './reducers'
import App from './components/App'

let store = createStore(todoApp, applyMiddleware(thunk))

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('.main')
)