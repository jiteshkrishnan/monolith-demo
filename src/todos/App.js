import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './containers/App'
import reducer from './reducers'
import '!style-loader!css-loader!todomvc-app-css/index.css'

const store = createStore(reducer)

const TodosApp=()=>(
  <Provider store={store}>
    <App />
  </Provider>)

export default TodosApp;