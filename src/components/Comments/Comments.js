import React, {useEffect, useState} from 'react';
import {commentsService} from "../../services";
import {Comment} from "../Comment/Comment";

export const Comments = () => {

    const [comments,SetComments]=useState([]);

    useEffect(()=>{
        commentsService.getAll().then(({data})=>SetComments([...data]))
    },[])


    return (
        <div style={{display:"flex", flexDirection:"column",rowGap:"20px"}}>
            {
                comments.map(comments=><Comment key={comments.id} comment={comments}/>)
            }

        </div>
    );
};
