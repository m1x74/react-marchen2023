const User = ({user,setUserIdForPosts}) => {
    const {id, name} = user;

    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <button onClick={()=>setUserIdForPosts(user.id)}>CHECK POSTS</button>
        </div>
    );
};

export {User};

