import React from 'react';
import {NavLink, useNavigate} from "react-router-dom";
import css from './header.module.css'
import {useAuthContext} from "../../hooks/useAuthContext";

const Header = () => {
    const {user} = useAuthContext();
    const{logOut}=useAuthContext();
    const navigate =useNavigate();


    const login =()=>{
        logOut();
        navigate('/');
    }

    return (
        <div className={css.Header}>
            <NavLink to={""}>Home</NavLink>
            <NavLink to={"todos"}>Todos</NavLink>
            <NavLink to={"comments"}>Comments</NavLink>
            <NavLink to={"albums"}>Albums</NavLink>
            {user &&
                <div>
                    {user}
                    <button onClick={()=>login()}>LogOut</button>
                </div>}
        </div>
    );
};

export default Header;