import React from 'react';
import ReactDOM from 'react-dom';
import AddTodo from './containers/addTodo' ;
import 'bootstrap/dist/css/bootstrap.css'
import { Provider } from 'react-redux' ;
import { createStore } from 'redux' ;
import allReducer from './reducers/index' ;
import './App.css' ;

const store = createStore(allReducer)

ReactDOM.render(
    <Provider store={store}>
        <AddTodo />
    </Provider>,
    document.getElementById('root'));
