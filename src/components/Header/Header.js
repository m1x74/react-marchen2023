import React from 'react';
import {NavLink} from "react-router-dom";
import css from './header.module.css'
import {useAuthContext} from "../../hooks/useAuthContext";

const Header = () => {
    const {user} = useAuthContext()
    const{logOut}=useAuthContext();

    return (
        <div className={css.Header}>
            <NavLink to={""}>Home</NavLink>
            <NavLink to={"todos"}>Todos</NavLink>
            <NavLink to={"comments"}>Comments</NavLink>
            <NavLink to={"albums"}>Albums</NavLink>
            {user &&
                <div>
                    {user}
                    <button onClick={()=>logOut()}>LogOut</button>
                </div>}
        </div>
    );
};

export default Header;