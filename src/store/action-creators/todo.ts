import {Dispatch} from "redux";
import {TodoActionTypes, OneToDo, TodoAction} from "../../types/todo";



export const addTodo = (newTodo: OneToDo) => {

    return ((dispatch: Dispatch<TodoAction>) => {
        dispatch({type: TodoActionTypes.ADD_TODO, payload: newTodo})
    })

}  