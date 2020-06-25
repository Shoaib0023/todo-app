import { combineReducers } from 'redux' ;
import TodoReducer from './TodoReducer' ;
import addTodo from './addTodo' ;

const allReducers =  combineReducers ({
    MyTodos: TodoReducer ,
    addTodo: addTodo
})

export default allReducers