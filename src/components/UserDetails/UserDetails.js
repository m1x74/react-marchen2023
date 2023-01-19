const UserDetails = ({user}) => {
    const {id, name,email,username} = user;
    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>email: {email}</div>
            <div>username: {username}</div>

        </div>
    );
};

export {UserDetails};