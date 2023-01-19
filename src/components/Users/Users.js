import React, {useEffect, useState} from 'react';
import {userService} from "../../services";
import {User} from "../User/User";
import {UserDetails} from "../UserDetails/UserDetails";

export const Users = () => {

    const [users, setUsers] = useState([]);
    const [userDetails, setUserDetails] = useState(null);

    useEffect(() => {
        userService.getAll().then(value => value.data).then(value => setUsers([...value]))
    }, [])


    return (
        <div>
            <h1>User:</h1>
            {userDetails && <UserDetails user={userDetails}/>}

            <hr/>

            {
                users.map(user => <User key={user.id} user={user} setUserDetails={setUserDetails}/>)
            }
        </div>
    );
};

