import React from 'react';

export const Album = ({albums}) => {

    const {userId,id,title} = albums

    return (
        <div>
            <h3>UserID: {userId}</h3>
            <h3>ID: {id}</h3>
            <p>Title: {title}</p>
        </div>
    );
};

