import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {userService} from "../services";
import {userActions} from "../redux";
import User from "./User";


const Users = () => {
    const dispatch = useDispatch();

    const {users,loading} = useSelector(state => state.users);

    useEffect(()=>{
        dispatch(userActions.getAll())
    },[])

    return (
        <div>
            {loading&&<h1>LOADING....</h1>}
            {
                users.map(user=><User key={user.id} user={user}/>)
            }
        </div>
    );
};

export {
    Users
}