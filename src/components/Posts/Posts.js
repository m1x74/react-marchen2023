import React, {useEffect, useState} from 'react';

import postService from "../../services/post.service";
import {Post} from "../Post/Post";

export const Posts = ({userId}) => {
    const [posts, setPosts] = useState(null);
    useEffect(() => {
        postService.getAll(userId).then(({data}) => setPosts(data))
    }, [userId])
    return (
        <div>
            {
                posts ? posts.map((post) => <Post key={post.id} post={post}/>) : 'Wait'
            }

        </div>
    );
};

