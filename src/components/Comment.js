import {Component} from "react";

class Comment extends Component{
    render() {
        const {id,name,body}=this.props.comments
        return(
            <div>
                    <div>id:{id}</div>
                    <div>name:{name}</div>
                    <div>body:{body}</div>

            </div>
        )
    }
}
export {
    Comment
}