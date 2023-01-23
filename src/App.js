import {useState} from "react";

import './App.css';
import {Posts, Users} from "./components";

const App = () => {
    const [userIdForPost, SetUserIdForPost] = useState(null)
    return (
        <div className="App">
            <Users setUserIdForPosts={SetUserIdForPost}/>
            <hr/>
            <h1>User's posts</h1>
            {userIdForPost && <Posts userId={userIdForPost}/>}
        </div>
    );
}

export default App;
