import React, {useState} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {OneToDo} from "../types/todo";
import {useActions} from "../hooks/useActions";
import styled from "styled-components";



const Title = styled.h2`
display: flex;
flex-direction: row;
justify-content: center;
`
const Form = styled.form`
display: flex;
flex-direction: row;
justify-content: center;
`

const AddInput = styled.input`
    margin: 5px;
    border: 2px solid #008CBA;
`
const AddButton = styled.input`
margin: 5px;
padding: 3px 9px;
border-radius:10%;
cursor:pointer;
background-color: white;
color: black;
border: 2px solid #008CBA;
&:hover{
    background-color: #008CBA;
    color: white;
}
` 
const List = styled.ul`
margin-left: 0;
padding-left: 0;
`

const ListItem = styled.li`
list-style-type: none;
`

const TodoList: React.FC = () => {
    const {todos} = useTypedSelector(state => state.todo)
    const {addTodo } = useActions()


    const [newTodo, setnewTodo]= useState<string>('')

    const handleSubmit = (e:React.FormEvent) => {
        e.preventDefault();
        if(!newTodo === false){
            addTodo( {id:String(Date.now()), title:newTodo, status: false});
            setnewTodo('');
        }
    }

    return (
        <>
            <Title> Add To do</Title>
            <Form onSubmit = {handleSubmit}>
                <label htmlFor="todoText">
                    <AddInput type="text" name="todoText" value={newTodo} onChange={(e) => {setnewTodo(e.target.value)}}/>
                </label>
                <AddButton type="submit" value="Submit"/>
            </Form>
            <List>
                {
                   todos.map( (item:OneToDo) => {
                   return  <ListItem key = {item?.id}> {item?.title} </ListItem>
                   }) 
                }
            </List>
        </>
    )};

    export default TodoList;