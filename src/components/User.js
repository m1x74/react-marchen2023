import React from 'react';
import {useDispatch} from "react-redux";
import {userActions} from "../redux";

const User = ({user}) => {
    const {id,name,username}=user
        const dispatch = useDispatch();
    return (
        <div>
            {id} - {name} - {username}
            <button onClick={()=>dispatch(userActions.setSelectedUser(user))}>select</button>
        </div>
    );
};

export default User;