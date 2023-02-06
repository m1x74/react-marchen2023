import React from 'react';
import {useParams} from "react-router-dom";

import { Posts} from "../../components";
import css from './post.module.css'


export const PostPage = () => {
    const {postId}=useParams()
    return (
        <div className={css.post}>
            <Posts postId={postId}/>
        </div>
    );
};

