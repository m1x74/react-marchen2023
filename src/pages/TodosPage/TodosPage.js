import React from 'react';
import {Outlet} from "react-router-dom";

import {Todos} from "../../components";
import css from './todos.module.css'


export const TodosPage = () => {
    return (
        <div className={css.todo}>
            <Todos/>
        </div>
    );
};

