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
            'title': "" ,
            'completed': false
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
                <h5 style={checkboxDecoration}>{ todo.title } </h5>
            )
        }

        else {
            return <h5>{ todo.title } </h5>
        }
    }
    

    render() {
        return (
            <main>
            <div id="main">
                <form onSubmit={this.handleSubmit}>
                    <div className="row justify-content-center">
                        
                        <div className="col-lg-6 col-sm-12">
                            <div className="form-group">
                                <input type="text" name="title" className="form-control" value={this.state.title} placeholder="Enter the todo..." onChange= {this.handleChange} />
                            </div>
                        </div>
                        
                        <div className="col-lg-1 col-sm-12">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    
                    </div>
                </form>

                {this.props.todos.map(todo => 
                        <div className="row justify-content-center mt-5">
                            <div className="col-lg-7 col-sm-12">

                                <div className="card" key={todo.id}>
                                    <div className="card-body">

                                        <div className="row justify-content-around">

                                            <div className="col-lg-1 col-sm-1">         
                                                <input type="checkbox" name="completed" className="mr-3" checked={this.handleChecked(todo)} onChange={() => this.props.checkTodo(todo.id)} />
                                            </div>
                                           
                                            <div className="col-lg-8 col-sm-1">
                                                {this.todoTitle(todo)}  
                                            </div>
                                           
                                            <div className="col-lg-1 col-sm-1">
                                                 <button className="btn btn-sm btn-danger" onClick={() => this.props.deleteTodo(todo.id)}>Delete</button>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>

                            </div>
                        </div>
                    )}
            </div>
            </main>
        )
    }
}


const checkboxDecoration = {
    textDecoration : "line-through" ,
    color: "grey" ,
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