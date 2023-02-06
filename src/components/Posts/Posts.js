import React, {useEffect, useState} from 'react';
import {postsService} from "../../services";
import {Post} from "../Post/Post";

export const Posts = ({postId}) => {

    const [post, setPost] = useState(null);
    useEffect(() => {
        if (postId) {
            postsService.getpostById(postId).then(({data}) => setPost({...data}))
        }
    }, [postId])
    if (!post) return null;
    return (
       <div>
           <Post post={post}/>
       </div>
    );
};

