import TodoReducer from './TodoReducer'

const initialState = TodoReducer()

export default function (state=initialState, action) {
    switch(action.type){
        case "ADD_TODO" :
            state.todos.unshift(action.payload)
            console.log(state.todos)
            return {
                ...state ,
                count: state.count + 1
            }

        case "DELETE_TODO":
            return {
                ...state,
                todos : state.todos.filter(todo => todo.id !== action.payload),
            }

        case "CHECK_TODO":
            return {
                ...state,
                todos: state.todos.filter(todo => {
                    if(todo.id === action.payload){
                        todo.completed = todo.completed ? false : true 
                    }

                    return todo
                })
            }


        default:
            return state
    }
}