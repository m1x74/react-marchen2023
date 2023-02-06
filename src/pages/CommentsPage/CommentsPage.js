import React from 'react';

import {Comments} from "../../components";
import css from './comments.module.css'
import {Outlet} from "react-router-dom";

export const CommentsPage = () => {
    return (
        <div className={css.comments}>
            <Comments/>
            <Outlet/>
        </div>
    );
};

