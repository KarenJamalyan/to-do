import {TodoState, TodoActionTypes, TodoAction  } from "../../types/todo"


const initialState: TodoState = {
    todos: [
        { id:1, title:" Tasak mek ", status: false},
        { id:2, title:" Tasak mek 2", status: false}
    ],
    error: null,
    loading: false
}


export const todoReducer = (state = initialState, action:TodoAction) => {
    switch(action.type) {
        case TodoActionTypes.ADD_TODO :
            return  {...state, todos: [...state.todos, action.payload]}
        case TodoActionTypes.DELETE_TODO :
            return  {...state, todos: [...state.todos, action.payload]}
        case TodoActionTypes.CHANGE_TODO :
            return  {...state}
        default:
            return state
    }
} 