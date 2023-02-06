import React from 'react';
import {NavLink} from "react-router-dom";
import css from './header.module.css'

const Header = () => {
    return (
        <div className={css.Header}>
            <NavLink to={""}>Home</NavLink>
            <NavLink to={"todos"}>Todos</NavLink>
            <NavLink to={"comments"}>Comments</NavLink>
            <NavLink to={"albums"}>Albums</NavLink>
        </div>
    );
};

export default Header;