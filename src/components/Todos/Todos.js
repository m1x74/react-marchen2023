import React, {useEffect, useState} from 'react';
import {todosService} from "../../services";
import {Todo} from "../Todo/Todo";

export const Todos = () => {

    const [todos,SetTodo]=useState([]);

    useEffect(()=>{
        todosService.getAll().then(({data})=>SetTodo([...data]))
    },[])


    return (
        <div  style={{display:"flex", flexDirection:"column",rowGap:"20px"}}>
            {
                todos.map(todo=><Todo key={todo.id} todo={todo}/>)
            }

        </div>
    );
};

