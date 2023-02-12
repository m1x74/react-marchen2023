import {Component} from "react";
import {commentsService} from "../services";
import {Comment} from "./Comment";

class Comments extends Component{
    constructor(props) {
        super(props);
        this.state={comments:[]}
    }

    componentDidMount() {
        commentsService.getAll.then(({data})=>this.setState({comments:[...data]}))
    }

    render() {
        return(
            <div>
                {
                    this.state.comments.map(comments=><Comment key={comments.id} comments={comments}/>)
                }
            </div>
        )
    }
}

export {
    Comments
}