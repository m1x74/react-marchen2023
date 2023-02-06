import React from 'react';
import {useNavigate} from "react-router-dom";

export const Post = ({post}) => {


    const {userId, id, title, body} = post
    const navigate = useNavigate();


    return (
        <div id={'post'}>
            <h3>POST INFO</h3>

            <div>userId: {userId}</div>
            <div>ID: {id}</div>
            <div>Title: {title}</div>
            <div>Content: {body}</div>
            <div></div>
            <button onClick={() => navigate('/comments')}>Hide</button>
        </div>
    );
};

