import React, {Component} from 'react';
import { connect } from 'react-redux' ;
import { bindActionCreators } from 'redux' ;
import addTodoAction from '../actions/addtodoaction' ;

class App extends Component {
  render(){
    return (
      <div className="container">
        {this.props.allTodos.map(todo => 
            <div className="container p-2" key={todo.id}>
              <h4>{todo.title}</h4>
              <h5>Completed : {todo.completed}</h5><hr/>
            </div>
          )}  
          <button className="btn btn-primary mt-2">Add Todo</button>
      </div>
    )
  }
}

function mapStateToProps(state) {
   return {
      allTodos: state.addTodo.todos,
   }
}

function matchDispatchToProps(dispatch){
   return bindActionCreators({
        addTodoAction : addTodoAction
   }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(App);
