import React, {useEffect, useState} from 'react';

import {userService} from "../../services";
import {User} from "../User/User";

export const Users = ({setUser,setUserIdForPosts}) => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getAll().then(value => value.data).then(value => setUsers([...value]))
    }, [])


    return (
        <div>


            {
                users.map(user => <User key={user.id} user={user} setUser={setUser} setUserIdForPosts={setUserIdForPosts}/>)
            }

        </div>
    );
};

