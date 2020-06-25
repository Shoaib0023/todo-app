import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux' ;

import addTodoAction from '../actions/addtodoaction' ;
import deleteTodoAction from '../actions/deleteTodoAction' ;
import checkTodoAction from '../actions/checkTodoAction' ;

import '../App.css' ;
import uuid from "react-uuid" ;

class AddTodo extends Component {
    constructor(props){
        super(props) ;
        this.state = {
            'title': ""
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleCheckboxChange = (e) => {
        this.setState({
            'completed': e.target.checked
        })
    }

    handleSubmit = (e) => {
        e.preventDefault() ;
        const todoobj = {
            "id": uuid() ,
            "title": this.state.title ,
            "completed": this.state.completed
        }

        this.setState({
            title: ''
        })

        this.props.addTodo(todoobj)
    }

    handleChecked = (obj) => {
        if(obj.completed === true){
          return true
        }
        else{
          return false
        }
    }


    todoTitle = (todo) => {
        if(todo.completed === true){
            return (
                <h5 id="title" style={checkboxDecoration}>{ todo.title } </h5>
            )
        }

        else {
            return <h5 id="title">{ todo.title } </h5>
        }
    }

    deleteBtn = (todo) => {
      if(todo.completed === true){
        return (
          <button className="btn btn-sm btn-danger submit-btn fadebtn" onClick={() => this.props.deleteTodo(todo.id)}>Delete</button>
        )
      }

      else {
        return (
          <button className="btn btn-sm btn-danger submit-btn" onClick={() => this.props.deleteTodo(todo.id)}>Delete</button>
        )

      }
    }


    render() {
        return (
            <main>
                <div className="row text-center" id="header">
                  <div className="col-12">
                     <h3 className="display-4"><strong>TODOS</strong></h3>
                  </div>
                </div>

                <div id="form-container">
                  <form onSubmit={this.handleSubmit}>
                       <input type="text" name="title" className="form-control" value={this.state.title} placeholder="Enter a thing to do . . ." onChange= {this.handleChange} />
                  </form>
                </div>

                <div id="todo-container">
                    {this.props.todos.map(todo =>
                        <div className="todo" key={todo.id}>
                            <input type="checkbox" name="completed" className="mr-3 check-btn" checked={this.handleChecked(todo)} onChange={() => this.props.checkTodo(todo.id)} />

                            {this.todoTitle(todo)}

                            {this.deleteBtn(todo)}

                        </div>
                      )}
                </div>

            </main>
        )
    }
}


const checkboxDecoration = {
    textDecoration : "line-through" ,
    color: "grey"
  }

function mapStateToProps(state){
    return {
        todos: state.addTodo.todos,
        count: state.addTodo.count
    }
}

function matchActionToProps(dispatch){
    return bindActionCreators(
        {
            addTodo: addTodoAction ,
            deleteTodo: deleteTodoAction,
            checkTodo: checkTodoAction
        },
        dispatch )
}

export default connect(mapStateToProps, matchActionToProps)(AddTodo)
