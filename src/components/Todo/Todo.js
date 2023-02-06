import React from 'react';

export const Todo = ({todo}) => {

    const  {userId,id,title,completed} = todo;

    return (
        <div>
            <h3>UserID: {userId}</h3>
            <h3>ID: {id}</h3>
            <p>Title: {title}</p>
            <p>Status: {completed ? "Completed" : "Not completed"}</p>
        </div>
    );
};

