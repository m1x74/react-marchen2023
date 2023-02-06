import React from 'react';
import {useNavigate} from "react-router-dom";

export const Comment = ({comment}) => {

    const navigate = useNavigate();

    const {postId, id, name, email, body} = comment;

    return (
        <div>
           <div style={{display:"flex", alignItems:"center",columnGap:'15px'}}>
               <h3>PostId:{postId}</h3>
               <button onClick={()=>navigate(postId.toString())}>Show Post</button>
           </div>
            <h3>ID: {id}</h3>
            <h3>Name: {name}</h3>
            <p>Email: {email}</p>
            <p>Body: {body}</p>
        </div>
    );
};
