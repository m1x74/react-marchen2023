import React from 'react';
import axios from "axios";

const UsersService =  {
    getAll:()=> axios.get('https://jsonplaceholder.typicode.com/users')
};

export default UsersService;