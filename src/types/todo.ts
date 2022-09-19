export interface TodoState {
    todos: any[];
    loading: boolean;
    error: null | string;
}

export enum TodoActionTypes {
    ADD_TODO= 'ADD_TODO',
    DELETE_TODO= 'DELETE_TODO',
    CHANGE_TODO= 'CHANGE_TODO'
}


export interface OneToDo {
    id: string;
    title:string;
    status:boolean;
}

interface AddTodoAction {
    type: TodoActionTypes.ADD_TODO
    payload: {
        id: string,
        title:string,
        status: boolean
    }
}
interface DeleteTodoAction {
    type: TodoActionTypes.DELETE_TODO;
    payload: any[];
}
interface ChangeTodoAction {
    type: TodoActionTypes.CHANGE_TODO;
}

export type TodoAction = AddTodoAction   |   DeleteTodoAction    |   ChangeTodoAction